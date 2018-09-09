import Vue from 'vue';
import Component from 'vue-class-component';
import {Tx} from "../../types/txwthassets";
import {Data} from "../../utils/Data";
import {mixins} from "../../utils/mixins";
import {blockchain, price} from "../../network";


@Component({
  name: 'message',
  props: {
    tx: Object
  }
})
export default class Message extends Vue {
  private tx!: Tx;
  private data: Data|null = null;

  private usdPrice: number|null = null;
  private delegate: string|null = null;

  async mounted() {
    if (!this.isValid()) {
      return;
    }
    this.data = Data.decode(this.tx.asset.data, parseInt(this.tx.amount, 10));
    const p = await price.getPrice();

    this.usdPrice = p.usd * mixins.toSatoshi(parseInt(this.tx.amount, 10) + parseInt(this.tx.fee, 10))
    const block = await blockchain.getBlock(this.tx.blockId);
    const delegate = await blockchain.getDelegate(block.generatorPublicKey);
    this.delegate = delegate.username;
  }

  isValid() {
    return mixins.isValidMessage(this.tx);
  }

  isRenderable() {
    return this.data !== null;
  }
}
