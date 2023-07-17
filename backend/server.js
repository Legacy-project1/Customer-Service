const inquiryRouter = require("./routes/inquiryRouter");

const express = require("express");

const app = express();
app.use(express.json());

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const port = process.env.PORT || 5000;

const userRoute = require("./routes/usersRoute");

app.use("/api/users", userRoute);

app.use("/", inquiryRouter);

app.listen(port, () => console.log(`Node/Express Started on port ${port}`));
