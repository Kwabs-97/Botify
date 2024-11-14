"use client";
import { Avatar } from "@/assets/icons";
import CustomButton from "@/components/form-elements/CustomButton";
import { Search, Plus } from "@/assets/icons";
import AddChatbotCard from "@/components/misc/AddChatbotCard";
import QueryContainer from "@/components/misc/QueryContainer";
import Image from "next/image";
import { AIAssitant } from "@/assets/icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/input";
import axios from "axios";
import ChatbotCard from "@/components/misc/ChatbotCard";
import { useRouter } from "next/navigation";

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [chatbots, setChatbots] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchBots = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("api/routes/chatbots");
        console.log(res.data.chatbots);
        setChatbots(res.data.chatbots);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchBots();
  }, [setChatbots]); // Re-run the effect when setChatbots changes
  const displayChatbots = chatbots.map((chatbot) => (
    <ChatbotCard key={chatbot.id}>{chatbot.name}</ChatbotCard>
  ));

  const hanldeAddChatbot = () => {
    router.push("/dashboard/new");
  };
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
            <Input type="search" placeholder="Search..." iconSrc={Search} />
            <CustomButton onClick={hanldeAddChatbot} iconSrc={Plus}>
              Add Chatbot
            </CustomButton>
          </div>

          {/* Add chatbot */}
          {chatbots ? (
            displayChatbots
          ) : (
            <div className="add-chatbot w-full items-start">
              <AddChatbotCard />
            </div>
          )}
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
