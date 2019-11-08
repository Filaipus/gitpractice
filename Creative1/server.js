var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/chat", function(req, res, next) {
  res.sendFile(__dirname + "/chat.html");
});

io.on("connection", function(client) {
  console.log("Client connected...");

  client.on("join", function(data) {
    console.log(data);
  });

  client.on("messages", function(data) {
    client.emit("thread", data);
    client.broadcast.emit("thread", data);
  });
});

app.use(express.static("public"));

server.listen(4200);