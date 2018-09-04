import Vue from 'vue';
import Component from 'vue-class-component';
import Message from '../message/message.vue';
import axios from 'axios';
import {Tx} from "../../types/txwthassets";

@Component({
  components: { Message },
})
export default class Home extends Vue {
  private txs: Tx[] = [];
  async mounted() {
    const {data} = await axios.get(`https://testnet.lisk.io/api/transactions?senderId=8273455169423958419L&sort=timestamp:desc&type=0`);
    console.log(data.data)
    this.txs = data.data;
  }
}
