export class Config {
  public analyzePeriod: number = 14;
  public stockRatioMax: number = 1;
  public stockRatioMin: number = 0.85;
  public minLoad: number = 0.85;
  public maxUnavaliable: number = 0.15;

  public setAnalyzePeriod(num: number) {
    this.analyzePeriod = num;
  }

  public setStockRatioMax(num: number) {
    this.stockRatioMax = num;
  }

  public setStockRatioMin(num: number) {
    this.stockRatioMin = num;
  }

  public setMinLoad(num: number) {
    this.minLoad = num;
  }

  public setMaxUnavaliable(num: number) {
    this.maxUnavaliable = num;
  }
}
