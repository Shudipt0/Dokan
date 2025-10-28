"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="font-semibold">Todo List</h1>
      {/* calendar */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full mt-3">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="h-[300px] 3xl:h-[400px] mt-4 rounded-md border">
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
        {/* list item */}
        <Card className="p-2 m-2 rounded-sm">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className="text-sm text-muted-foreground">
              Lkebdskb skdhfk isdhfk khsf kshfk
            </label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
