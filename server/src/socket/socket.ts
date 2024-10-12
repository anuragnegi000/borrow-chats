import http from "http";
import { DefaultEventsMap, Server } from "socket.io";
import express from "express";
import { Request, Response } from "express";
import { Message } from "../models/MessageModel";
import { randomInt } from "crypto";

const app = express();
const server = http.createServer(app);

type Message = {
  message: string;
  room: string;
};

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  socket.on('createroom',()=>{
    const roomID = randomInt(100000,999999).toString();
    socket.join(roomID);
    socket.emit("roomcreated",roomID);
    console.log("Room created",roomID);
  })

  socket.on('joinroom',(roomID)=>{
    socket.join(roomID);
    socket.emit("roomjoined",roomID);
    console.log("Room joined",roomID);
  })

  socket.on("sendmessage", ({roomname,message}) => {
    console.log("data reveived", message);
    io.to(roomname).emit("receivemessage",{message,roomname});
    console.log(`Message sent to room ${roomname} : ${message}`);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

export { server };
