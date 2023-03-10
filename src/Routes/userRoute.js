require("dotenv").config();
const express = require("express");
const { User } = require("../models/userModel");
const userRoute = express.Router();



userRoute.get("/", async (req, res) => {
  try {
    let users = await User.find();
    res.send({ msg: "user Data", users });
  } catch (err) {
    res.status(500).send({ msg: "Login failed !" });
  }
});




userRoute.post("/", async (req, res) => {
  const { name, score } = req.body;

  try {
    let user = await User.findOne({ name });
    console.log(user)
    if (user) {
      res.status(200).send({ msg: "username already present !",user });
    } else {
    let user_data=  await User.create({ name, score });
      res.status(200).send({ msg: "username successfully added !",user:user_data });
    }
  } catch (err) {
    res.status(500).send({ msg: " failed !" });
  }
});




userRoute.put("/:id", async (req, res) => {
  const { score,name } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findByIdAndUpdate({ _id: id }, { score,name });
    res.status(200).send({msg:"updated Successfully",user})
  } catch (err) {
    res.status(500).send({ msg: "updated failed!" });
  }
});


module.exports = { userRoute };
