import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

app.use("/dataProvider");

app.listen(4444, "0.0.0.0", () => {
  console.log("Data provider server started! Port: " + 4444);
});
