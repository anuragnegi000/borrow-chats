require("dotenv").config();
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel";

export const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try{
  const check = await User.findOne({ email });
  if (check) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({ email, password, username });
  if (user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
    return res.status(201).json({
      user,
      token,
    });
  }
}catch(err){
    return res.status(400).json({message:"Invalid credentials"})
}
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
      password,
    });
    if (user) {
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as string
      );
      return res.status(200).json({
        user,
        token,
      });
    }
  } catch (err) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};
