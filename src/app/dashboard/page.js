import Sidebar from "@/components/layouts/Sidebar";
import { Avatar } from "@/assets/icons";
import CustomInput from "@/components/form-elements/CustomInput";
import CustomButton from "@/components/form-elements/CustomButton";
import { Search, Plus } from "@/assets/icons";
import AddChatbotCard from "@/components/misc/AddChatbotCard";

function page() {
  return (
    <div className="flex flex-col gap-6 w-full min-h-screen bg-white relative">
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
      <div className="px-12">
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
      <div className=""></div>
    </div>
  );
}

export default page;
