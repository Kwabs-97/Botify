"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { chatIcon, ellipse } from "@/assets/icons";
import QueryContainer from "@/components/misc/QueryContainer";
import { motion } from "framer-motion";

import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

interface stepProps {
  errors?: { [key: string]: { message: string } | undefined };
  register: (name: string) => object;
}
function Step2({ register, errors }: stepProps) {
  const [collectUsersEmail, setCollectUsersEmail] = React.useState(false);

  function handleSwitch(checked: boolean) {
    setCollectUsersEmail(checked);
  }

  useEffect(() => {
    register("collectUsersEmail");
  });

  return (
    <motion.div
      className="flex flex-row overflow-hidden gap-5"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-900 font-bold text-2xl">Chatbot Details</h3>
          <p className="text-gray-600">Fine tune your chatbot</p>
        </div>
        <div className="flex flex-col gap-2 ">
          {/* <CustomInput
            name="chatbot_name"
            register={register}
            placeholder="Enter the name of your chatbot"
            label="Chatbot Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
              dispatch(setChatbotName(e.target.value));
            }}
          /> */}

          <Input
            name="chatbot_name"
            errors={{ chatbot_name: errors?.chatbot_name }}
            register={register}
            label="Chatbot Name"
            placeholder="Enter the name of your chatbot"
          />

          <Textarea
            register={register}
            errors={{ welcome_message: errors?.welcome_message }}
            name="welcome_message"
            label="Customize your welcome message"
            labelWithAutogenerate
            placeholder="Enter your welcome message"
          />
          <Textarea
            register={register}
            name="fallback_message"
            errors={{ fallback_message: errors?.fallback_message }}
            label="Customize your fallback message"
            labelWithAutogenerate
            placeholder="Enter your fallback message"
          />

          <div className="flex flex-row justify-between w-full p-3 border border-gray-200 rounded-lg">
            <Label htmlFor="collectUsersEmail">Collect users email</Label>
            <Switch
              {...register("collectUsersEmail")}
              id="collectUsersEmail"
              name="collectUsersEmail"
              checked={collectUsersEmail}
              onCheckedChange={handleSwitch}
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 flex-col gap-6">
        <div>
          <h3 className="text-gray-900 font-bold text-2xl">Preview</h3>
        </div>
        <div className="flex items-center justify-center px-8 pt-16 bg-gray-50 rounded-2xl ">
          <div className="flex flex-col  shadow-lg min-w-[472px] min-h-[350px]">
            <div className="p-6 flex flex-row gap-4 rounded-tl-2xl rounded-tr-2xl border-b border-b-gray-200 bg-white">
              <div>
                <Image src={chatIcon} alt="chatIcon" />
              </div>
              <div className="flex flex-col ">
                <h5 className="font-bold text-xl text-gray-900">
                  Chatbot Name
                </h5>
                <div className="flex flex-row gap-2.5 items-center">
                  <Image src={ellipse} alt="onlineEllipseIcon" />
                  <p className="text-sm text-gray-900">Online</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-6">
              <div>
                <p className="text-base text-[#64748A] text-center">Today</p>
              </div>
              <QueryContainer
                className="bg-white text-black shadow-lg"
                type="user"
              >
                Welcome Message
              </QueryContainer>
              <QueryContainer
                className="bg-white text-black shadow-lg "
                type="user"
              >
                No response message
              </QueryContainer>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step2;
