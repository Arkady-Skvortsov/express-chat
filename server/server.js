const app = require("express")();
const express = require("express");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Messages = require("./models/messages.model");

const PORT = 3500 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "./views"));

io.on("connection", (socket) => {
  socket.on("message", async (msg, msg2) => {
    const MessagesSchema = new Messages({ text: msg2 });
    const UserSchema = new User({ username: msg, message: MessagesSchema });

    await MessagesSchema.save();
    await UserSchema.save();

    io.emit("message", msg, msg2);
  });
});

app.get("/", (req, res) => {
  res.render("main.ejs");

  console.log("Hello Socket.io:)");
});

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://Arkadiy:Stark2003@super-puper-cluster.p06gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    http.listen(PORT, () => {
      console.log(`Socket.IO server running at http://localhost:${PORT}/`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
