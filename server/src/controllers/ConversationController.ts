import ConversationModel from "../models/ConversationModel";
import { Response, Request } from "express";

// Define types for request parameters
interface ConversationParams {
  senderId: string;
  receiverId: string;
}

export const fetchConversation = async (
  req: Request<ConversationParams>, 
  res: Response
) => {
  const { senderId, receiverId } = req.params;

  try {
    const conversation = await ConversationModel.findOne({
     participants:{
         $all:[senderId,receiverId]
     }
    });

    if (!conversation) {
      return res.status(404).json({ message: "No conversation found" });
    }

    return res.status(200).json({ conversation });
  } catch (e) {
    console.error(e); // Log the error for server-side tracking
    return res.status(500).json({ message: "Internal server error" });
  }
};
