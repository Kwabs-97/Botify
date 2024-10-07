import React from "react";
import Image from "next/image";
import { Plus } from "@/assets/icons";
function AddChatbotCard() {
  return (
    <div className="flex flex-col items-center justify-center w-[350px] h-[200px] rounded-lg gap-2.5 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 duration-300">
      <div className="rounded-full bg-blue-400 p-3 flex items-center justify-center">
        <Image src={Plus} alt="icon" className="" />
      </div>
      <h5 className="text-white text-xl leading-7 space-x-2 space-y-2 font-bold">
        Create a new chatbot
      </h5>
    </div>
  );
}

export default AddChatbotCard;
