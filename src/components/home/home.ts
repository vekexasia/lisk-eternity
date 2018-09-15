import Vue from 'vue';
import Component from 'vue-class-component';
import Message from '../message/message.vue';
import Compose from '../compose/compose.vue';
import {Tx} from "../../types/txwthassets";
import {mixins} from "../../utils/mixins";
import {constants} from "../../utils/constants";
import {Block} from "../../types/block";

@Component({
  components: {Message, Compose},
})
export default class Home extends Vue {
  private txs: Tx[] = [];

  public async mounted() {
    await this.loadAllTransactions();
    console.log('mounted');
    constants.socket.on('blocks/change', (b: any) => this.parseBlock(b));
  }

  public async loadAllTransactions() {
    let offset = 0;
    let loaded = this.txs.length;
    let count = 0;
    do {
      const {meta, data: txs} = await constants.apiClient
        .transactions.get({
          recipientId: constants.liskAddress,
          sort: 'timestamp:desc',
          limit: 100,
          type: 0,
          offset
        });
      count = meta.count;
      // Not ok but works.
      loaded += txs.length;
      offset += txs.length;
      this.txs.push(... txs
        .filter((tx: any) => mixins.isValidMessage(tx))
        .filter((tx: any) => !this.txs.some((t) => t.id === tx.id))
      );
      console.log('loaded', offset);
    } while (loaded < count);
    this.txs.sort((a, b) => b.timestamp - a.timestamp);
  }

  public async parseBlock(b: Block & { transactions?: Tx[] }) {
    console.log('son qua', b.height);
    console.log('parseBlock', b.transactions);
    if (b.transactions && b.transactions.length && b.transactions.some((tx) => mixins.isValidMessage(tx))) {
      console.log('RELOADING');
      await this.loadAllTransactions();
    }
  }

  public beforeDestroy() {
    console.log('beforeDestroy');
    constants.socket.off('blocks/change');
  }
}
