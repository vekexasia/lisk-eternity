import Vue from 'vue';
import Component from 'vue-class-component';
import {Data} from '../../utils/Data';
import {colors} from '../../utils/colors';
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import {DposLedger, LedgerAccount, SupportedCoin} from 'dpos-ledger-api';
import {Lisk, RecipientId} from 'dpos-offline';
import {constants} from '../../utils/constants';

@Component({
  name: 'compose',
  props: {
    tx: Object,
  },
} as any)
export default class Compose extends Vue {
  private textSize: string = 'normal';
  private textColor: number = 0;
  private text: string = '';
  private active: string = 'text';
  private showLedgerSnackbar: boolean = false;
  private ledgerSnackbarText: string = '';
  private colors = colors;
  private constants = constants;

  public get fees() {
    return new Data({textSize: this.textSize as any, text: this.text, color: this.textColor}).calcPrice();
  }

  public setDone(id: string, index: string) {
    if (index) {
      this.active = index
    }
  }

  public goToNano() {
    window.open(`lisk://main/transactions/send?recipient=${constants.liskAddress}&amount=${this.fees / 1e8}`);
  }

  public goToHub() {
    window.open(`lisk://wallet?recipient=${constants.liskAddress}&amount=${this.fees / 1e8}`);
  }

  public async startLedgerProcess() {
    const transport = await TransportU2F.create();
    const dposLedger = new DposLedger(transport);
    try {
      const {coinID} = await dposLedger.version();
      if (coinID !== 'lisk') {
        throw new Error('Please open Lisk app on Ledger');
      }
      const account = new LedgerAccount().coinIndex(SupportedCoin.LISK).account(0);
      const {publicKey} = await dposLedger.getPubKey(account);

      const tx = Lisk.txs.transform({
        kind: 'send',
        sender: { publicKey: Buffer.from(publicKey, 'hex') as any},
        amount: `${this.fees}`,
        recipient: constants.liskAddress as RecipientId,
        memo: this.text,
      });

      this.ledgerSnackbarText = `Check your Ledger Nano S!`;
      this.showLedgerSnackbar = true;

      const signature = await dposLedger.signTX(
        account,
        Lisk.txs.bytes(tx)
      );
      tx.signature = signature as any;

      this.showLedgerSnackbar = false;
      await constants.apiClient.transactions
        .broadcast(Lisk.txs.toPostable(tx));

      this.ledgerSnackbarText = `Transaction Accepted!`;
      this.showLedgerSnackbar = true;

    } catch (e) {
      this.showLedgerSnackbar = false;
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.ledgerSnackbarText = `An error has occurred: ${e.message}`;
      this.showLedgerSnackbar = true;
    }
  }
}
