import {colors} from "./colors";

export const mixins = {
  getColor(index: number) {
    return colors[index] || colors[1];
  }
};
