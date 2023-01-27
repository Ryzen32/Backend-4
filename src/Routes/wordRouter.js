const express = require("express");

const wordRouter = express.Router();

wordRouter.get("/", async (req, res) => {
  let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = "";
  let num = Math.floor(Math.random() * 3);
  let num2 = Math.floor(Math.random() * 6) + 4;
  


    for (let i = num; i <= num2; i++) {
      word += data[i];
    }
    
    
    if (word.length == 0) {
        word = "BCXZ";
    }

  res.send(word);
});

module.exports = { wordRouter };
