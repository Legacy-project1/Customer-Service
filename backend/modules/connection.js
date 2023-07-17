const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose
  .connect(
    "mongodb+srv://tmohammadi493:server@cluster0.j2sxvmp.mongodb.net/Cluster0?retryWrites=true&w=majority",
    connectionParams
  )
  .then(() => {
    console.log(`Connected to MongoDB database`);
  })
  .catch((err) => console.log("Error connecting to the database", err));

module.exports = db;
