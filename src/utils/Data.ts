export class Data {
  public color: number = 0;
  public textSize: 'normal' | 'small' | 'big' | 'huge' = 'normal';
  public text: string = '';
  public version: number = 1;

  constructor(obj: {[k in keyof Data]?: Data[k]} = {}) {
    Object.keys(obj).forEach((k) => this[k] = obj[k]);
  }

  public textSizeCode() {
    switch (this.textSize) {
      case "normal":
        return 0;
      case "small":
        return 1;
      case "big":
        return 2;
      case "huge":
        return 3;
    }
    throw new Error('invalid size code');
  }

  public static textSizeFromCode(code: 0 | 1 | 2 | 3) {
    switch (code) {
      case 0:
        return 'normal';
      case 1:
        return 'small';
      case 2:
        return 'big';
      case 3:
        return 'huge';
    }
  }

  public calcPrice() {
    return 1e7 +
      (new Buffer(this.text, 'utf8').length * 1e5) *
      (this.textSizeCode() + 1) *
      (this.color > 1 ? 4 : 1) +
      (
        this.version +
        (this.textSizeCode() << 4) +
        (this.color << 8)
      )
  }

  public static decode(asset: string, fees: number) {
    const encodedData = fees % 1e5;
    const version = encodedData % 4;
    const textSizeCode = (encodedData >> 4) % (1 << 4) as any;
    const color = (encodedData >> 8) % (1 << 5);
    return new Data({
      textSize: this.textSizeFromCode(textSizeCode),
      version,
      color,
      text: asset
    });
  }
}
