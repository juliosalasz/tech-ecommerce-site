import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();

import productRoutes from "./routes/products.js";

//server started
const app = express();

//for uploading images and sending post request

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//start cors
app.use(cors());

//For using the localhost:5000/product commands
app.use("/product", productRoutes);

// database address

const CONNECTION_URL = process.env.API_KEY;

// Port of server
const PORT = process.env.PORT || 5000;

//Connection message from mongoose
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
