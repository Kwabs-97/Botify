import React from "react";
import ChatInput from "./chatInput";
import QueryContainer from "../QueryContainer";
import { ChatbotDataInterface } from "@/app/types";

function Playground({ chatbotData }: { chatbotData: ChatbotDataInterface }) {
  return (
    <div className="flex flex-col gap-2.5 bg-gray-50 h-screen py-4 px-6">
      <header className=" bg-white">
        <h4 className="h5">Chatbot Playground</h4>
      </header>
      <div className="py-4 gap-6 flex-grow">
        <div className="flex justify-center items-center">
          <p>Today</p>
        </div>
        {/* <div className="pr-12 pl-6">
          <p className="regular">
            Hi, thanks for visiting! How can I assist you with questions about
            Jobmanor?
          </p>
        </div> */}
        <QueryContainer>{chatbotData.welcome_message}</QueryContainer>
      </div>
      <div className="sticky bottom-0 bg-gray-50 py-4">
        <ChatInput />
      </div>
    </div>
  );
}

export default Playground;
