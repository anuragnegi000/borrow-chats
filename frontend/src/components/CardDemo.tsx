import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <div
      className="flex flex-col gap-6 absolute h-[500px] z-10 left-20 top-[8rem] overflow-y-scroll"
      style={{
        scrollbarColor: "#000 #f1f1f1",
        scrollbarWidth: "thin",
        msOverflowStyle: "auto",
      }}
    >
      <Card className="w-[70rem] h-[auto] bg-transparent">
        <CardHeader className="">
          <CardTitle className="text-neutral-50">Toronto</CardTitle>
          <CardDescription className="text-neutral-50">
            Chit chat
          </CardDescription>
          <div className="flex shrink-0 w-10 absolute right-10 justify-end">
            <Button>Join</Button>
          </div>
        </CardHeader>
      </Card>

      <Card className="w-[70rem] h-[auto] bg-transparent">
        <CardHeader className="">
          <CardTitle className="text-neutral-50">Developers community</CardTitle>
          <CardDescription className="text-neutral-50">
            Deploy your new project in one-click.
          </CardDescription>
          <div className="flex shrink-0 w-10 absolute right-10 justify-end">
            <Button>Join</Button>
          </div>
        </CardHeader>
      </Card>

      <Card className="w-[70rem] h-[auto] bg-transparent">
        <CardHeader className="">
          <CardTitle className="text-neutral-50">Berkley</CardTitle>
          <CardDescription className="text-neutral-50">
            Deploy your new project in one-click.
          </CardDescription>
          <div className="flex shrink-0 w-10 absolute right-10 justify-end">
            <Button>Join</Button>
          </div>
        </CardHeader>
      </Card>
      <Card className="w-[70rem] h-[auto] bg-transparent">
        <CardHeader className="">
          <CardTitle className="text-neutral-50">Boston</CardTitle>
          <CardDescription className="text-neutral-50">
            Deploy your new project in one-click.
          </CardDescription>
          <div className="flex shrink-0 w-10 absolute right-10 justify-end">
            <Button>Join</Button>
          </div>
        </CardHeader>
      </Card>
      <Card className="w-[70rem] h-[auto] bg-transparent">
        <CardHeader className="">
          <CardTitle className="text-neutral-50">Mumbai</CardTitle>
          <CardDescription className="text-neutral-50">
            Deploy your new project in one-click.
          </CardDescription>
          <div className="flex shrink-0 w-10 absolute right-10 justify-end">
            <Button>Join</Button>
          </div>
        </CardHeader>
      </Card>
      <Card className="w-[70rem] h-[auto] bg-transparent">
        <CardHeader className="">
          <CardTitle className="text-neutral-50">Shibuya</CardTitle>
          <CardDescription className="text-neutral-50">
            Deploy your new project in one-click.
          </CardDescription>
          <div className="flex shrink-0 w-10 absolute right-10 justify-end">
            <Button>Join</Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
