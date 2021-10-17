const app = require("express")();
const express = require("express");
const http = require("http").Server(app);
const io = require("socket.io")(http);

const PORT = 3500 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "./views"));

io.on("connection", (socket) => {
  socket.on("message", (msg, msg2) => {
    console.log(msg, msg2);

    io.emit("message", msg, msg2);
  });
});

app.get("/", (req, res) => {
  res.render("main.ejs");

  console.log("Hello Socket.io:)");
});

http.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});
