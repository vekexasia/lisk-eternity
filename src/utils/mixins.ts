import {colors} from './colors';
import {Tx} from '../types/txwthassets';
import {constants} from './constants';

export const mixins = {
  getColor(index: number) {
    return colors[index] || colors[1];
  },
  getTheme(index: number) {
    return this.getColor(index).text;
  },
  isValidMessage(tx: Tx) {
    return tx.recipientId === constants.liskAddress && tx.asset && typeof (tx.asset.data) === 'string';
  },
  toSatoshi(amount: number | string) {
    return parseInt(`${amount}`, 10) / 1e8;
  },
};
