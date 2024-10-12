import { CardWithForm } from "@/components/CardDemo";
import ShineBorder from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";



const Chat = () => {
  return (
    <div className="h-full w-screen flex flex-col items-center justify-center">
      <ShineBorder
        className="absolute top-[8rem] flex h-[700px] w-[80rem] flex-col  overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="absolute w-full h-[42rem] rounded-lg flex flex-col p-1">
          <div className="flex flex-row h-[3rem] gap-4">
            <div className="border border-white w-full flex justify-center items-center">
              <h1 className="text-white">Room id</h1>
            </div>
            <div className="border border-white w-full flex justify-center items-center">
              <h1 className="text-white">Room name</h1>
            </div>
            <div className="border border-white w-full flex justify-center items-center">
              <h1 className="text-white">Random name</h1>
            </div>
          </div>
          <div className="h-[40rem]">
            <div className="pl-[15rem] pr-[15rem] pt-4 pb-10 h-full">
              <div className="border border-white h-full w-full">
                <div className="h-full flex flex-col justify-between">
                  <div
                    className="overflow-y-auto flex-1 p-4 space-y-4 "
                    style={{
                      scrollbarColor: "#000 #f1f1f1",
                      scrollbarWidth: "thin",
                      msOverflowStyle: "auto",
                    }}
                  >
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>Hey, how are you?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p>I am doing well! How about you?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>I'm great! Thanks for asking!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p>I am doing well! How about you?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>I'm great! Thanks for asking!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p>I am doing well! How about you?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>I'm great! Thanks for asking!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p>I am doing well! How about you?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>I'm great! Thanks for asking!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p>I am doing well! How about you?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>I'm great! Thanks for asking!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p>I am doing well! How about you?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                        <p>I'm great! Thanks for asking!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Input className="text-white" placeholder="Send message" />
            </div>
          </div>
        </div>
      </ShineBorder>
    </div>
  );
};

export default Chat;
