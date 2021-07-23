import { btcUsername, btcPassword } from "B:/blockchain-explorer/src/settings";
import { genericChain } from "B:/blockchain-explorer/src/generic/genericChain";
import { ChainUser } from "../generic/ChainUser";

export class BitcoinExplorer extends genericChain {
  chainUser: ChainUser | undefined;

  constructor() {
    super();
    this.chainUser = new ChainUser(btcUsername, btcPassword);
  }

  public getTotalCoinAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public getCapitalization(): number {
    throw new Error("Method not implemented.");
  }
  public getCurrentCoinPrice(): number {
    throw new Error("Method not implemented.");
  }
  public get24hTransactionAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public get24hAverageTransactionAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public get24hTransferedCoinAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public get24hAverageTransferedCoinAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public getAverageTransactionSum(): number {
    throw new Error("Method not implemented.");
  }
  public getMedianTransactionSum(): number {
    throw new Error("Method not implemented.");
  }
  public getAverageFees(): number {
    throw new Error("Method not implemented.");
  }
  public getMedianFees(): number {
    throw new Error("Method not implemented.");
  }
  public getAverageBlockTime(): number {
    throw new Error("Method not implemented.");
  }
  public getBlockAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public getBlockSize(): number {
    throw new Error("Method not implemented.");
  }
  public get24hBlockAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public get24hAverageBlockAmmount(): number {
    throw new Error("Method not implemented.");
  }
  public getBlockReward(): number {
    throw new Error("Method not implemented.");
  }
  public get24hAverageBlockReward(): number {
    throw new Error("Method not implemented.");
  }
  public getAverageRewardFee(): number {
    throw new Error("Method not implemented.");
  }
  public getBlockComplexity(): number {
    throw new Error("Method not implemented.");
  }
  public getNetworkHashrate(): number {
    throw new Error("Method not implemented.");
  }
  public getCoinProfitability(): number {
    throw new Error("Method not implemented.");
  }
  public getTopOfRichestAccounts(): string[] {
    throw new Error("Method not implemented.");
  }
  public getAddressesWorthMoreThanInput(targetNumber: number): string[] {
    throw new Error("Method not implemented.");
  }
  public get24hActiveAddresses(): string[] {
    throw new Error("Method not implemented.");
  }
  public getTopOfTransactions(): string[] {
    throw new Error("Method not implemented.");
  }
  public getFirstBlock(): string {
    throw new Error("Method not implemented.");
  }
  public getBlockchainSize(): number {
    throw new Error("Method not implemented.");
  }
}
