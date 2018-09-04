import Vue from 'vue';
import Component from 'vue-class-component';
import {Tx} from "../../types/txwthassets";
import {Data} from "../../utils/Data";


@Component({
  name: 'message',
  props: {
    tx: Object
  }
})
export default class Message extends Vue {
  private tx!: Tx;
  private data: Data|null = null;

  mounted() {
    if (!this.isValid()) {
      return;
    }
    this.data = Data.decode(this.tx.asset.data, parseInt(this.tx.amount, 10));
    console.log('ciao');
  }

  isValid() {
    return this.tx.asset && typeof (this.tx.asset.data) === 'string';
  }
}
