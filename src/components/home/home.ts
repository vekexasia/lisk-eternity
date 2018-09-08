import Vue from 'vue';
import Component from 'vue-class-component';
import Message from '../message/message.vue';
import Compose from '../compose/compose.vue';
import axios from 'axios';
import {Tx} from "../../types/txwthassets";
import {mixins} from "../../utils/mixins";
import {constants} from "../../utils/constants";

@Component({
  components: { Message, Compose },
})
export default class Home extends Vue {
  private txs: Tx[] = [];
  async mounted() {
    const {data} = await axios.get(`https://testnet.lisk.io/api/transactions?recipientId=${constants.liskAddress}&sort=timestamp:desc&type=0`);
    console.log(data);
    this.txs = data.data.filter((tx: any) => mixins.isValidMessage(tx));
  }
}
