import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// import productRoutes from "./routes/products.js";
import userRouter from "./routes/user.js";

//server started
const app = express();
app.use(express.json());

//for uploading images and sending post request

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//cors to connect the api to react frontend
app.use(cors());

//For using the localhost:5000/product commands
// app.use("/product", productRoutes);
app.use("/user", userRouter);

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
