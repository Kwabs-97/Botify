"use client";
import { Send } from "@/assets/icons";
import Attachement from "@/assets/icons/Attachement";
import React, { useEffect } from "react";
import { Smile } from "lucide-react";
import Textarea from "../../misc/forminput/textarea";
function ChatInput() {
  return (
    <div className="border rounded-md border-gray-300">

    <div className="flex flex-row gap-2 items-center pr-4">
      <Textarea className="w-full min-h-10 max-h-36 text-gray-900 border-none" />
      <div className="flex flex-row gap-2 items-center">
        <Attachement />
        <Smile color="gray"/>
        <Send />
      </div>
    </div>
    </div>
  );
}

export default ChatInput;
