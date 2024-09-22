import express from 'express';
import { fetchConversation } from '../controllers/ConversationController';
const router=express.Router();


router.get("/fetch/conversation/:senderId/:receiverId",fetchConversation);


export default router;