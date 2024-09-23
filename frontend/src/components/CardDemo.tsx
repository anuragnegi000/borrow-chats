import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[70rem] h-[5rem] top-[10rem] absolute z-10 bg-transparent">
      <CardHeader>
        <CardTitle className="text-neutral-50">Create project</CardTitle>
        <CardDescription className="text-neutral-50">Deploy your new project in one-click.</CardDescription>
      </CardHeader>
    </Card>
    
  )
}
