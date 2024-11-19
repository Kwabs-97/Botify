"use client";
import React, { useState, useEffect } from "react";
import Input from "../../ui/input";
import { Label } from "../../ui/label";
import Textarea from "../../ui/textarea";
import { Switch } from "../../ui/switch";
import { Separator } from "../../ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatbotSchema } from "@/lib/schema";
import axios from "axios";
import { ChatbotDataInterface } from "@/app/types";

function Chatbot() {
  //form-handling
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(chatbotSchema),
  });

  const [collectUsersEmail, setCollectUsersEmail] = useState(false);

  function handleSwitch(checked: boolean) {
    setCollectUsersEmail(checked);
  }

  useEffect(() => {
    register("collectUsersEmail");
  });

  const onSubmit = async (data: ChatbotDataInterface) => {
    console.log(data);
    try {
      const res = await axios.post("/api/routes/new", data);
      console.log(res);
    } catch (error) {
      console.log("error creating new chatbot", error);
    }
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-row gap-4 ">
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
      {/*Separator */}

      <Separator className="bg-gray-100" />
      <div className="">
        <form action="" className="">
          <div className="flex flex-col gap-2 ">
            <Input
              name="chatbot_name"
              register={register}
              label="Chatbot Name"
              placeholder="Enter the name of your chatbot"
            />

            <Textarea
              register={register}
              name="welcome_message"
              label="Customize your welcome message"
              labelWithAutogenerate
              placeholder="Enter your welcome message"
            />
            <Textarea
              register={register}
              name="fallback_message"
              label="Customize your fallback message"
              labelWithAutogenerate
              placeholder="Enter your fallback message"
            />

            <div className="flex flex-row justify-between w-full p-3 border border-gray-200 rounded-lg">
              <Label htmlFor="collectUsersEmail">Collect users email</Label>
              <Switch
                id="collectUsersEmail"
                name="collectUsersEmail"
                checked={collectUsersEmail}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
