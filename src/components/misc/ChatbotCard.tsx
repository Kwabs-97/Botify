import React from "react";
import { Ellipsis } from "lucide-react";

const ChatbotCard = ({
  children,
  handleNavigation,
}: {
  children: React.ReactNode;
  handleNavigation: () => void;
}) => {
  return (
    <div
      className="w-[352px] h-[200px] border rounded-lg flex flex-col border-gray-200 bg-white gap-1 hover:cursor-pointer"
      onClick={handleNavigation}
    >
      <div className="self-end px-2.5 py-3">{<Ellipsis color="#6B7280" />}</div>
      <div className="flex flex-col">
        <div className="px-6">
          <h3 className="text-black font-bold text-xl">
            {children || "Chatbot One"}
          </h3>
        </div>
        <div className="skeleton py-3 flex items-center justify-center flex-col gap-2">
          <div className="animate-pulse space-y-4  p-4 bg-gray-100 w-[141px] h-[50px] rounded-lg flex-grow">
            {/* Paragraph skeleton */}
            <div className="space-y-2 ">
              <div className="h-1 bg-white rounded w-full" />
              <div className="h-1 bg-white rounded w-full" />
              <div className="h-1 bg-white rounded w-full" />
            </div>
          </div>
          <div className="animate-pulse space-y-4  p-4 bg-blue-50 w-[141px] h-[50px] rounded-lg justify-self-end ">
            {/* Paragraph skeleton */}
            <div className="space-y-2 ">
              <div className="h-1 bg-blue-100 rounded w-full" />
              <div className="h-1 bg-blue-100 rounded w-full" />
              <div className="h-1 bg-blue-100 rounded w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotCard;
