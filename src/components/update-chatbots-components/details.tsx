"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";
import { ChatbotDataInterface } from "@/app/types";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useForm } from "react-hook-form";
import CustomButton from "../form-elements/CustomButton";
import axios from "axios";
interface DetailsProps {
  chatbotData?: ChatbotDataInterface;
}
function Chatbot({ chatbotData }: DetailsProps) {
  // handling loading state
  const [isUpdating, setIsUpdating] = useState<Boolean>(false);

  //form-handling
  const { register, handleSubmit, setValue } = useForm({
    defaultValues:{
      name: chatbotData && chatbotData?.name,
      welcome_message: chatbotData?.welcome_message,
      fallback_message: chatbotData?.fallback_message
    }
  });

  const updateDetails = handleSubmit(async (data: ChatbotDataInterface) => {
    setIsUpdating(true)
    const chatbotDetails = {
      ...data,
      id: chatbotData?.id,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/api/routes/chatbots/update/${chatbotData?.id}`,
        chatbotDetails
      );
      console.log(response);
      setIsUpdating(false)
    } catch (error) {
      console.log("error");
    }
  });

  return (
    <>
      {!chatbotData && (
        <div className="h-screen w-screen">
          <LoadingSpinner />
        </div>
      )}

      <div className="text-gray-900 gap-6 flex flex-col">
        <div>
          <div className="flex flex-row gap-2 ">
            <div className="p-4 rounded-2xl bg-gray-50 flex flex-col">
              <h4 className="font-semibold text-gray-900">Last Trained</h4>
              <p className="text-gray-700">June 16, 2023</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 flex flex-col">
              <h4 className="font-semibold text-gray-900">Visibility</h4>
              <p className="text-gray-700">Public</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 flex flex-col">
              <h4 className="font-semibold text-gray-900">Status</h4>
              <p className="text-gray-700">Live</p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-100" />
        <form action="" onSubmit={updateDetails}>
          <div className="">
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  // defaultValue={chatbotData && chatbotData.name}
                  placeholder="Chatbot name"
                  className="w-full h-11 border px-4 py-3 bg-gray-50 border-lightGray rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none duration-150 transition-all"
                  {...register?.("name")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="welcome_message">Welcome message</label>
                <textarea
                  {...register?.("welcome_message")}
                  id="welcome_message"
                  name="welcome_message"
                  className="w-full border px-4 py-3 bg-gray-50 border-lightGray rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none duration-150 transition-all"
                  // defaultValue={chatbotData && chatbotData.welcome_message}
                  placeholder="Enter your welcome message"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="fallback_message">Fallback message</label>
                <textarea
                  {...register?.("fallback_message")}
                  id="fallback_message"
                  name="fallback_message"
                  className="w-full border px-4 py-3 bg-gray-50 border-lightGray rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none duration-150 transition-all"
                  // defaultValue={chatbotData && chatbotData.fallback_message}
                  placeholder="Enter your welcome message"
                />
              </div>

              {/* <div className="flex flex-row justify-between w-full p-3 border border-gray-200 rounded-lg">
              <Label htmlFor="collectUsersEmail">Collect users email</Label>
              <Switch id="collectUsersEmail" name="collectUsersEmail"    {...register?.("collect_user_email")}
              defaultChecked={chatbotData?.collect_user_email}
              />
            </div> */}
              <div className="flex flex-row gap-4 items-center justify-start text-white">
                <CustomButton type="submit" disabled={!isUpdating}>{
                  isUpdating ? <LoadingSpinner /> : "Save"
                  }</CustomButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chatbot;
