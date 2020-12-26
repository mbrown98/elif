import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//MongoDB Atlas connection string
const CONNECTION_URL =
  "mongodb+srv://mbrown98:Ras63206@cluster0.zdhlk.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log("Connected on port " + PORT)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
