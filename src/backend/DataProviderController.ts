import express from "express";
import { DataProviderService } from "./DataProviderService";
import handler from "./handler";

export class DataProviderController {
  router = express.Router({ mergeParams: true });

  constructor(private readonly dataProvider: DataProviderService) {
    this.router.get(
      "/:facilityBlock/data",
      handler((req) => {
        const block = req.params.facilityBlock as string;
        return this.dataProvider.getBlockData(block);
      })
    );
  }
}
