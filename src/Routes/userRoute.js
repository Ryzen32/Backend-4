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
    let user = await User.find({ name });
    console.log(user)
    if (user.length) {
      res.status(200).send({ msg: "username already present !",user });
    } else {
    let user_data=  await User.create({ name, score });
      res.status(200).send({ msg: "username successfully added !",user:user_data });
    }
  } catch (err) {
    res.status(500).send({ msg: " failed !" });
  }
});




userRoute.patch("/:id", async (req, res) => {
  const { score } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findByIdAndUpdate({ _id: id }, { score });
    res.status(200).send({msg:"updated Successfully",user})
  } catch (err) {
    res.status(500).send({ msg: "Login failed !" });
  }
});


module.exports = { userRoute };