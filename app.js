const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./db/database");
require("dotenv").config();
const router = require("./routes/route");
const errorHandler = require("./middleware/errorHandler");

var corsOptions = {
  origin: "https://tyrantx-search-app.netlify.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//app.use("/v1/api/", express.static("./public"));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/v1/api/fruits", router);

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(process.env.PORT || 3045, () => {
      console.log(`Server listening is port 3045`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
