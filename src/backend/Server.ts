import express from "express";
import cors from "cors";
import { DataProviderService } from "./DataProviderService";
import { DataProviderController } from "./DataProviderController";

const app = express();
app.use(cors({ origin: "*" }));

const dataProviderService = new DataProviderService();
const dataProvider = new DataProviderController(dataProviderService);

app.use("/dataProvider", dataProvider.router);

app.listen(5555, "0.0.0.0", () => {
  console.log("Data provider server started! Port: " + 5555);
});
