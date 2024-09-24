import http from "http";
import { DefaultEventsMap, Server } from "socket.io";
import express from "express";
import { Request, Response } from "express";
import { Message } from "../models/MessageModel";

const app = express();
const server = http.createServer(app);

let io: Server<any>;

export function initialiseSocket() {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
  return io;
}   


export function getSocketInstance(){
    if(!io){
        return initialiseSocket();
    }
    return io;
}

export {server};