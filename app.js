const express = require("express");
const app = express();

const http = require("http");

const server = http.createServer(app);

const socket = require("socket.io")(server);

socket.on("connection", (client) => {
  console.log("Client connected");
  client.on("connection", (data) => {
    console.log("Client connected", data);
  });
  client.emit("jack", "Lund mera");
  client.on("message", (data) => {
    console.log(data);
  });
  client.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is listning at port 3000");
});
