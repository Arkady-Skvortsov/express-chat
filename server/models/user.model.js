const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  message: { type: mongoose.SchemaTypes.ObjectId, ref: "Messages" },
});

module.exports = mongoose.model("User", User);
