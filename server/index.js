import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

const app = express();

//dotenv
dotenv.config();

//bodyparser Setup
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

//cors-setup
app.use(cors());

//Using Morgan
app.use(morgan("dev"));

const PORT = process.env.PORT || 3001;

//DB Connection
// dbconnect();

app.listen(PORT, () => {
  console.log(`Server is Running at PORT : ${PORT}`);
});
