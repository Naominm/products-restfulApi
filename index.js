import express from "express";
import productsRouter from "./routes/productsRouter.js";

const app = express();

app.use(express.json());
app.use("/products", productsRouter);

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port 4000`);
});
