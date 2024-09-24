import { CardWithForm } from "@/components/CardDemo";
import ShineBorder from "@/components/magicui/shine-border";


const Chat = () => {
  return (
    <div className="h-full w-screen flex flex-col items-center justify-center">
      <ShineBorder
        className="absolute top-[8rem] flex h-[700px] w-[80rem] flex-col  overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        

        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Ongoing Chats
        </span>
        <CardWithForm/>

      </ShineBorder>
    </div>
  );
};

export default Chat;
