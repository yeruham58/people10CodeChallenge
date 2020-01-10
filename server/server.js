const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const customers = require("./routes/api/customers");
const csvMerge = require("./routes/api/csvMerge");
const cors = require("cors");

app.use(cors());

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to DB
const db = require("./config/database.js");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//use Routes
app.use("/api/customers", customers);
app.use("/api/csv", csvMerge);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runing on port ${port}`));
