import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// import routes
import userRouter from "./routes/user.js";

//server started
const app = express();
app.use(express.json());

//for uploading images and sending post request

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors to allow connect the api to react frontend

app.use(
  cors({
    //web addresses allowed
    origin: "http://localhost:3000",
    //for allowing this commands
    methods: ["GET", "POST", "PUT", "DELETE"],
    //for allowing cookies
    credentials: true,
  })
);

//For using the localhost:5000/product commands
// app.use("/product", productRoutes);
app.use("/user", userRouter);

app.post("/createdUser", async (req, res) => {
  const user = req.body;
  console.log(user);
});

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
