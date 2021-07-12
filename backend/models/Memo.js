const mongoose = require("mongoose");

const memo = mongoose.Schema({
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Memo", memo);
