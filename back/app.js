const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const sequelize = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes/index"));

const port = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log("DB is connected on Postgres");
  app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });
});
