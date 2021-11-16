import express, { json } from "express";
import router from "./routes";

const app = express();

app.use(json())
app.use(router);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
