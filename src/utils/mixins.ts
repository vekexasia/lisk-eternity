import {colors} from "./colors";
import {Tx} from "../types/txwthassets";

export const mixins = {
  getColor(index: number) {
    return colors[index] || colors[1];
  },
  getTheme(index:number) {
    return this.getColor(index).text;
  },
  isValidMessage(tx: Tx) {
    return tx.asset && typeof (tx.asset.data) === 'string';
  },
  toSatoshi(amount: number|string) {
    return parseInt(`${amount}`, 10)/1e8;
  }
};
