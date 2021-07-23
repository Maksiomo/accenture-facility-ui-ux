import { ChainUser } from "./ChainUser";

export abstract class genericChain {
  public abstract chainUser: ChainUser | undefined;

  public abstract getTotalCoinAmmount(): number;
  public abstract getCapitalization(): number;
  public abstract getCurrentCoinPrice(): number;
  public abstract get24hTransactionAmmount(): number;
  public abstract get24hAverageTransactionAmmount(): number;
  public abstract get24hTransferedCoinAmmount(): number;
  public abstract get24hAverageTransferedCoinAmmount(): number;
  public abstract getAverageTransactionSum(): number;
  public abstract getMedianTransactionSum(): number;
  public abstract getAverageFees(): number;
  public abstract getMedianFees(): number;
  public abstract getAverageBlockTime(): number;
  public abstract getBlockAmmount(): number;
  public abstract getBlockSize(): number; // средний?
  public abstract get24hBlockAmmount(): number;
  public abstract get24hAverageBlockAmmount(): number;
  public abstract getBlockReward(): number;
  public abstract get24hAverageBlockReward(): number;
  public abstract getAverageRewardFee(): number;
  public abstract getBlockComplexity(): number; // средняя?
  public abstract getNetworkHashrate(): number;
  public abstract getCoinProfitability(): number;
  public abstract getTopOfRichestAccounts(): Array<string>;
  // Wealth Distribution Top 10/100/1,000/10,000 addresses -- не совсем понятно что нужно
  public abstract getAddressesWorthMoreThanInput(
    targetNumber: number
  ): Array<string>; // придумать название покороче
  public abstract get24hActiveAddresses(): Array<string>;
  public abstract getTopOfTransactions(): Array<string>;
  public abstract getFirstBlock(): string;
  public abstract getBlockchainSize(): number;
  // Reddit subscribers
  // Твитов в день #Bitcoin
  // Маркировка крупных кошельков бирж, входы выходы с этих кошельков**
  // ^ - это дергается с бирж, если да, то как?
}
