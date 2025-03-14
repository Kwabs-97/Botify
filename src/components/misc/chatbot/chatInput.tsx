"use client";
import { Send } from "@/assets/icons";
import { Paperclip } from "lucide-react";
import { SendHorizonal } from "lucide-react";
import Attachement from "@/assets/icons/Attachement";
import React, { useEffect } from "react";
import { Smile } from "lucide-react";
import Textarea from "../../misc/forminput/textarea";
function ChatInput() {
  return (
    <div className="border rounded-md border-gray-300" contentEditable>
      <div className="flex flex-row gap-2 items-center pr-4">
        <Textarea className="w-full min-h-24 text-gray-900 border-none" contentEditable  />
        <div className="flex flex-row gap-2 items-center">
          <div>
            <label htmlFor="attachment">
              <Paperclip color="gray" />
            </label>
            <input type="file" className="hidden" id="attachment" />
          </div>
          <Smile color="gray" className="hover:cursor-pointer" />
          <SendHorizonal color="blue" className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
