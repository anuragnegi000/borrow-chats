import { Request, Response } from 'express';
import UserRouter from './routers/UserRouter';
import MessageRouter from './routers/MessageRouter';
import mongoConnect from './db';

const express=require('express');
const app=express();
const port=3000;

mongoConnect();

app.use(express.json());

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/message",MessageRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
