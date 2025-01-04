import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import Input from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Textarea from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const nameInputRef = useRef(null);

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
          <Input
            name="chatbot_name"
            register={register}
            ref={nameInputRef}
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
            <Switch />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Step2;
