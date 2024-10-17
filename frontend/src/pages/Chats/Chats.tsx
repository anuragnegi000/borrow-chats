import { CardWithForm } from "@/components/CardDemo";
import ShineBorder from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState
import { useSocket } from "@/context/socket";

const Chats = () => {
  const navigate = useNavigate();
  const [popoverOpen, setPopoverOpen] = useState(false); // State for popover visibility
  // const {socket,isConnected} = useSocket();
  const {roomName,setRoomName,setJoinedRoom} = useSocket();
  const {socket,isConnected} = useSocket();

  const createroom=()=>{
      socket?.off("roomcreated");
      socket?.emit("createroom");
      socket?.on("roomcreated",(roomID:string)=>{
        setJoinedRoom(roomID);
        alert(`Room created with name ${roomID}`);
        navigate(`/chat/${roomID}`);
      })
    
  }

  const joinRoom = ()=>{
      socket?.emit("joinroom",roomName);
      socket?.on("roomjoined",(joinedRoomName:string)=>{
        setJoinedRoom(joinedRoomName);
        alert(`Room joined with name ${joinedRoomName}`);
        navigate(`/chat/${joinedRoomName}`);
      })
    
  }
  
  return (
    <div className="h-full w-screen flex flex-col items-center justify-center">
      <ShineBorder
        className="absolute top-[8rem] flex h-[700px] w-[80rem] flex-col overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Ongoing Chats
        </span>
        <CardWithForm />
        
        <Button
          className="absolute bottom-6 right-[28rem] bg-transparent border border-white rounded-md"
          onClick={createroom}
        >
          Create your own room
        </Button>

        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          {" "}
          {/* Control the popover with state */}
          <PopoverTrigger asChild>
            <Button
              className="absolute bottom-6 left-[30rem] text-white bg-transparent hover:bg-transparent hover:text-white"
              variant="outline"
            >
              Join existing room
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-50 relative bottom-10 bg-gray-100">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Enter Room ID</h4>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Input
                    id="maxHeight"
                    defaultValue=""
                    className="col-span-2 h-8 border border-gray-700 w-full"
                    onChange={(e) => setRoomName(e.target.value)}
                  />
                  <Button onClick={joinRoom}>Submit</Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ShineBorder>
    </div>
  );
};

export default Chats;
