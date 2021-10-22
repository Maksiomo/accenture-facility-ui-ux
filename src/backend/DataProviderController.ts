import express from "express";
import { DataProviderService } from "./DataProviderService";
import handler from "./handler";

export class DataProviderController {
  router = express.Router({ mergeParams: true });

  constructor(private readonly dataProvider: DataProviderService) {
    this.router.get(
      ":tableId/getTableProperties",
      handler((req) => {
        const tableId = req.params.tableId;
        return this.dataProvider.getTableProperties(tableId);
      })
    );
  }
}
