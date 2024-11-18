import React from "react";
import ChatInput from "./chatInput";
import QueryContainer from "../QueryContainer";

function Playground() {
  return (
    <div className="flex flex-col gap-2.5 bg-gray-50 h-screen">
      <header className="py-4 px-6 bg-white">
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
        <QueryContainer>
          Hi, thanks for visiting! How can I assist you with questions about
          Jobmanor?
        </QueryContainer>
      </div>
      <div className="sticky bottom-0 bg-gray-50">
        <ChatInput />
      </div>
    </div>
  );
}

export default Playground;
