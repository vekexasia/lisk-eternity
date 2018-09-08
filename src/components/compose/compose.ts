import Vue from 'vue';
import Component from 'vue-class-component';
import {Data} from "../../utils/Data";
import {colors} from "../../utils/colors";
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import {DposLedger, LedgerAccount} from 'dpos-ledger-api';
import lisk from 'lisk-elements';
import {constants} from "../../utils/constants";
import moment from 'moment';
console.log(lisk.transaction.utils);
@Component({
  name: 'compose',
  props: {
    tx: Object
  }
})
export default class Compose extends Vue {
  private textSize: string = 'normal';
  private textColor: number = 0;
  private text: string = '';
  private active: string = 'text';
  private showLedgerSnackbar: boolean = false;
  private ledgerSnackbarText: string = '';
  private colors = colors;
  private constants = constants;

  get fees() {
    return new Data({textSize: this.textSize as any, text: this.text, color: this.textColor}).calcPrice();
  }

  setDone(id: string, index: string) {
    if (index) {
      this.active = index
    }
  }

  goToNano() {
    window.open(`lisk://main/transactions/send?recipient=${constants.liskAddress}&amount=${this.fees / 1e8}`);
  }
  async startLedgerProcess() {
    const transport = await TransportU2F.create();
    const dposLedger = new DposLedger(transport);
    try {
      const {coinID} = await dposLedger.version();
      if (coinID !== 'lisk') {
        throw new Error('Please open Lisk app on Ledger');
      }
      const account = new LedgerAccount();
      const {publicKey, address} = await dposLedger.getPubKey(account);
      const txOBJ: any = {
        senderId: address,
        senderPublicKey: publicKey,
        recipientId: constants.liskAddress,
        fee: `${lisk.transaction.constants.TRANSFER_FEE}`,
        type: 0,
        amount: `${this.fees}`,
        timestamp: moment.utc().diff(lisk.constants.EPOCH_TIME, 'seconds') - 10,
        asset: {
          data: this.text
        }
      };
      const bytes = lisk.transaction.utils.getTransactionBytes(txOBJ);
      console.log(bytes, txOBJ);
      this.ledgerSnackbarText = `Check your Ledger Nano S!`;
      this.showLedgerSnackbar = true;

      const signature = await dposLedger.signTX(
        new LedgerAccount(),
        bytes
      );

      txOBJ.signature = signature.toString('hex');
      txOBJ.id = lisk.transaction.utils.getTransactionId(txOBJ);
      this.showLedgerSnackbar = false;

      await constants.apiClient.transactions.broadcast(txOBJ);

      this.ledgerSnackbarText = `Transaction Accepted!`;
      this.showLedgerSnackbar = true;
      //
      // tx.signature = signature.toString('hex');
      // const obj = tx.toObj();
      // obj.senderId = address;
      // obj.amount = `${tx.amount}` as any;
      // obj.fee = `${tx.fee}` as any;
      // console.log(obj);

    } catch (e) {
      this.showLedgerSnackbar = false;
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.ledgerSnackbarText = `An error has occurred: ${e.message}`;
      this.showLedgerSnackbar = true;
    }
  }
}
