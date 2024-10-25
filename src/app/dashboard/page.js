"use client";
import { Avatar } from "@/assets/icons";
import CustomInput from "@/components/form-elements/CustomInput";
import CustomButton from "@/components/form-elements/CustomButton";
import { Search, Plus } from "@/assets/icons";
import AddChatbotCard from "@/components/misc/AddChatbotCard";
import QueryContainer from "@/components/misc/QueryContainer";
import Image from "next/image";
import { AIAssitant } from "@/assets/icons";
import { useState } from "react";
import Link from "next/link";

function Page() {
  const [start, setStart] = useState(false);
  return (
    <div className="flex flex-col gap-6 w-full min-h-screen bg-gray-50">
      <div className="header py-8 px-12 border-b border-b-gray-200">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-2xl leading-8 font-bold">
              Chatbots
            </h3>
            <p className="text-gray-600">Train your chatbot with data</p>
          </div>
          <div className="avatar">
            <Avatar />
          </div>
        </div>
      </div>
      <div className="flex-grow px-12">
        <div className="flex flex-col gap-6">
          {/* Search box */}
          <div className="search flex flex-row justify-between">
            <CustomInput
              type="search"
              placeholder="Search..."
              iconSrc={Search}
            />
            <CustomButton iconSrc={Plus}>Add Chatbot</CustomButton>
          </div>
          {/* Add chatbot */}
          <div className="add-chatbot w-full items-start">
            <AddChatbotCard />
          </div>
        </div>
      </div>

      {/* Flexbox positioning for bottom-right */}
      <div className="flex flex-col items-center gap-4 self-end px-12 pb-8">
        <QueryContainer type="chatbot">
          👋 Hello I am Boti, ask me anything about Botify!
        </QueryContainer>
        <QueryContainer type="chatbot">
          I will assist you create a chatbox like me
        </QueryContainer>
        <Link className="self-end hover:cursor-pointer" href="/dashboard/boti">
          <Image src={AIAssitant} alt="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Page;
