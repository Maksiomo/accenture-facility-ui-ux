import express from "express";
import cors from "cors";
import axios from "axios";
import { DataProviderService } from "./DataProviderService";
import { DataProviderController } from "./DataProviderController";

const app = express();
app.use(cors({ origin: "*" }));

const dataProviderService = new DataProviderService();
const dataProvider = new DataProviderController(dataProviderService);

app.use("/dataProvider", dataProvider.router);

app.listen(4444, "0.0.0.0", async () => {
  console.log("Data provider server started! Port: " + 4444);
  const res = await axios.get(
    "localhost:4444/dataProvider/КПЭ/getTableProperties"
  );
});
