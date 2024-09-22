import mongoose from 'mongoose';

const MessageSchema=new mongoose.Schema({
    senderId:{
        type:String,
        required:true,
        ref:'User'
    },
    receiverId:{
        type:String,
        required:true,
        ref:'User'
    },
    message:{
        type:String,
        required:true,
    }
})

export const Message=mongoose.model('Message',MessageSchema);