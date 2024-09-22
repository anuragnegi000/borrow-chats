import { Response, Request } from "express";
import { Message } from "../models/MessageModel";
import ConversationModel from "../models/ConversationModel";

export const sendMessage = async (req: Request, res: Response) => {
  const { senderId, receiverId } = req.params;
  const { message } = req.body;

  console.log(senderId,receiverId,message);

  try {
    // Step 1: Create a new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    console.log("Message",newMessage);
    if (!newMessage) {
      return res.status(400).json({ message: "Message not sent" });
    }

    // Step 2: Find existing conversation or create a new one
    let conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    console.log("Conversation",conversation);

    if (!conversation) {
      // Create a new conversation if it doesn't exist
      conversation = await ConversationModel.create({
        participants:[ senderId,  receiverId],
        messages: [newMessage._id], // Add the first message
      });
      console.log("New Conversation",conversation);
    } else {
      // Add the new message to the existing conversation
      conversation.messages.push(newMessage._id);
    }

    // Step 3: Save the updated conversation
    await conversation.save();

    // Return success response
    return res.status(200).json({
      message: "Message sent",
      data: newMessage,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
