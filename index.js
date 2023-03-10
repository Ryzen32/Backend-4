require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./src/config/db");
const { userRoute } = require("./src/Routes/userRoute");
const { wordRouter } = require("./src/Routes/wordRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/game", userRoute);
app.use("/random",wordRouter)

app.listen(process.env.PORT || 4000, async () => {
  await connect();
  console.log("listenting...");
});
