"use client";
import { Send } from "@/assets/icons";
import Attachement from "@/assets/icons/Attachement";
import React, { useEffect } from "react";
import { Smile } from "lucide-react";
import { useState, useRef } from "react";

function ChatInput() {
  const [onFocus, setOnFocus] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const adjustContainerHeight = () => {
    if (textareaRef.current && containerRef.current) {
      containerRef.current.style.height = "auto";
      containerRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustContainerHeight();
  }, []);
  return (
    <div
      className={`rounded-2xl border-2 ${onFocus ? "border-blue-600 transit duration-200" : "#cbd5e0"} p-4 flex flex-row min-h-[60px] max-h-[250px] overflow-y-auto justify-between items-center`}
      ref={containerRef}
    >
      <textarea
        className=" border-none bg-transparent w-full  focus:outline-none focus:border-none text-gray-900"
        placeholder="Ask Boti Anything"
        onBlur={() => setOnFocus(false)}
        onFocus={() => setOnFocus(true)}
        ref={textareaRef}
        onInput={adjustContainerHeight}
      />
      <div className="flex flex-row gap-4 items-center">
        <Smile color="#94A3B7" size={13} />
        <Attachement />
        <Send />
      </div>
    </div>
  );
}

export default ChatInput;
