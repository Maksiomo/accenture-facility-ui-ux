import { IBlockStats } from "./types/IBlockStats";

export class DataProviderService {
  private allBlockStats: IBlockStats[] = [
    {
      blockName: "Alpha",
      status: "ok",
    },
    {
      blockName: "Bravo",
      status: "pending",
    },
    {
      blockName: "Gamma",
      status: "error",
    },
  ];

  async getBlockData(reqBlock: string): Promise<IBlockStats> {
    for (const block of this.allBlockStats) {
      if (block.blockName == reqBlock) return block;
    }
    throw new Error("Invalid blockName");
  }
}
