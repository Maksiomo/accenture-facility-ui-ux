import express from "express";
import cors from "cors";
import { DataProviderService } from "./DataProviderService";
import { DataProviderController } from "./DataProviderController";

const app = express();
app.use(cors());

const dataProviderService = new DataProviderService();
const dataProvider = new DataProviderController(dataProviderService);

app.use("/dataProvider", dataProvider.router);

app.listen(5555, () => {
  console.log("Data provider server started! generic url: " + 5555);
});
