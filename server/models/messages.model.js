const mongoose = require("mongoose");

const Messages = mongoose.Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model("Messages", Messages);
