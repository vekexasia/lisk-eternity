import axios from 'axios';
import {Block} from '../types/block';
import {constants} from '../utils/constants';
import {Delegate} from '../types/delegate';

const cache = {};
const promises = {};
async function cachedAtomicGETRequest(url: string) {
  if (cache[url]) {
    return cache[url];
  }

  if (promises[url]) {
    return promises[url];
  }
  promises[url] = axios.get(url).then((r) => r.data);
  return promises[url];
}

export const price = {
  async getPrice(): Promise<{btc: number, usd: number}> {
    const [r] = await cachedAtomicGETRequest('https://api.coinmarketcap.com/v1/ticker/lisk/');
    return {
      btc: parseFloat(r.price_btc),
      usd: parseFloat(r.price_usd),
    };
  },
};

export const blockchain = {
  async getBlock(id: string): Promise<Block> {
    const {data} = await cachedAtomicGETRequest(`${constants.node}/api/blocks/?blockId=${id}`);

    const [block] = data;
    return block;
  },

  async getDelegate(pubKey: string): Promise<Delegate> {
    const {data} = await cachedAtomicGETRequest(`${constants.node}/api/delegates?publicKey=${pubKey}`);
    const [delegate] = data;
    return delegate;
  },
};
