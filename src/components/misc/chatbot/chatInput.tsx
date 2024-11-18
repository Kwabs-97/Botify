import Input from "@/components/ui/input";
import React from "react";

function ChatInput() {
  return (
    <div className="flex items-center justify-center p-6">
      <Input
        name="chat"
        placeholder="Ask Boti anything..."
        className="w-full min-h-[72px] bg-white "
      />
    </div>
  );
}

export default ChatInput;
