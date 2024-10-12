import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const data=[
  {
    id:1,
    title:"Toronto",
    description:"Chit chat"   
  },
  {
    id:2,
    title:"Developers community",
    description:"Deploy your new project in one-click."   
  },
  {
    id:3,
    title:"Berkley",
    description:"Deploy your new project in one-click."   
  },
  {
    id:4,
    title:"Boston",
    description:"Deploy your new project in one-click."   
  },
  {
    id:5,
    title:"Mumbai",
    description:"Deploy your new project in one-click."   
  },
  {
    id:6,
    title:"Shibuya",
    description:"Deploy your new project in one-click."   
  }
]

export function CardWithForm() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-6 absolute h-[500px] z-10 left-20 top-[8rem] overflow-y-scroll"
      style={{
        scrollbarColor: "#000 #f1f1f1",
        scrollbarWidth: "thin",
        msOverflowStyle: "auto",
      }}
    >
      {data.map((item)=>(
        <Card className="w-[70rem] h-[auto] bg-transparent">
          <CardHeader className="">
            <CardTitle className="text-neutral-50">{item.title}</CardTitle>
            <CardDescription className="text-neutral-50">
              {item.description}
            </CardDescription>
            <div className="flex shrink-0 w-10 absolute right-10 justify-end">
              <Button onClick={()=>{
                  navigate("/chat")
              }}>Join</Button>
            </div>
          </CardHeader>
        </Card>
      ))}

      
    </div>
  );
}
