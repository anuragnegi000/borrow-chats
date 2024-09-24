import { Request, Response } from 'express';
import UserRouter from './routers/UserRouter';
import MessageRouter from './routers/MessageRouter';
import mongoConnect from './db';
import { initialiseSocket } from './socket/socket';
import {server} from "../src/socket/socket";

const express=require('express');
const app=express();
const port=3000;

mongoConnect();

initialiseSocket();

app.use(express.json());

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/message",MessageRouter)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
