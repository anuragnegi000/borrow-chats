import express from 'express';
import { Request, Response } from 'express';
import { login, signup } from '../controllers/UserController';
const router=express.Router();


router.post("/signup",signup)

router.post("/login",login)

export default router;
