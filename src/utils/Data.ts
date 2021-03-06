// tslint:disable no-bitwise

export class Data {

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

  public static decode(asset: string, fees: number) {
    if ((fees & 0xf) as any === 1) {
      return this.decodeV1(asset, fees);
    } else {
      return this.decodeV1(asset, fees); // For future);
    }

  }

  private static decodeV1(asset: string, fees: number) {
    const encodedData = fees;
    const version = encodedData & 0xf;
    const textSizeCode: any = (encodedData >>> 4) & 0x3;
    const color = (encodedData >>> 8) & 0xf;
    return new Data({
      textSize: this.textSizeFromCode(textSizeCode),
      version,
      color,
      text: asset,
    });
  }

  public color: number = 0;
  public textSize: 'normal' | 'small' | 'big' | 'huge' = 'normal';
  public text: string = '';
  public version: number = 1;

  constructor(obj: {[k in keyof Data]?: Data[k]} = {}) {
    Object.keys(obj).forEach((k) => this[k] = obj[k]);
  }

  public textSizeCode() {
    switch (this.textSize) {
      case 'normal':
        return 0;
      case 'small':
        return 1;
      case 'big':
        return 2;
      case 'huge':
        return 3;
    }
    throw new Error('invalid size code');
  }

  public calcPrice() {
    return Math.pow(2, 16) *
      (
        new Buffer(this.text, 'utf8').length +
        this.textSizeCode() * 2 +
        Math.ceil(this.color / 2)
      ) +
      (
        this.version +
        (this.textSizeCode() << 4) +
        (this.color << 8)
      )
  }
}
//
// for (let i=0; i< 20; i++) {
//   console.log((new Data({text: '', color: i, textSize: 'normal'}).calcPrice()+ (1<<60)).toString(2) );
// }

// console.log(Data.decode('test',  0.24400049 * 1e8));
