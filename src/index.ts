import express from "express";
import config from "config";
import router from "./routes/router";

const port = config.get("app.port");

const app = express();

app.use(express.json());
app.use(router);

const start = async () => {
  try {
    app.listen(port, () => console.log("listening on port " + port));
  } catch (e) {
    console.log(e);
  }
};

start();
