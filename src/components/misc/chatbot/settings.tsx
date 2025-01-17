import React from "react";
import { Separator } from "@/components/ui/separator";
import { Upload } from "@/assets/icons";
import Input from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface SettingsProps {
  register?: UseFormRegister<FieldValues>;
}
function Settings({ register }: SettingsProps) {
  const chatbotColors = [
    "#2563EB",
    // "#049BE5",
    // "#4CAF50",
    // "#F47D02",
    // "#9C27B0",
    // "#E91E63",
  ];
  return (
    <>
      <div className="text-gray-900 gap-2 flex flex-col">
        <div className="flex flex-col">
          <div>
            <h3 className="text-gray-900 text-lg leading-8 font-bold">
              Appearance
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <h5>Chatbot Color</h5>
            <div className="flex flex-row gap-1 max-w-[536px] flex-wrap">
              <input
                name="chatbotColor"
                {...register}
                type="color"
                defaultValue="#2563EB"
                className="w-24 h-[50px]"
              />
            </div>
          </div>
          {/* <div className="flex flex-col gap-1">
            <h5>Chatbot Icon</h5>
            <div className="flex flex-row gap-4">
              <div className="border rounded-lg border-dashed border-blue-600 py-2 flex items-center justify-center flex-1">
                <p>None</p>
              </div>
              <div className="border rounded-lg border-dashed border-blue-600 flex flex-row py-2 flex-1 items-center justify-center">
                <p>Upload</p>
              </div>
            </div>
          </div> */}
        </div>
        <Separator className="bg-gray-50" />
        <div>
          <div className="flex flex-col ">
            <h4 className="text-gray-900 text-lg leading-8 font-bold">
              Notification
            </h4>
            <div>
              <p>Send offline fallback message email notification to</p>
              <Input name="email" placeholder="Enter email address" />
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <div className="flex flex-col">
            <h4 className="text-gray-900 text-lg leading-8 font-bold">
              Branding
            </h4>
            <div className="flex flex-row items-center gap-6">
              <p>{`Display "Powered By" badge`}</p>
              <Switch />
            </div>
          </div>
        </div>
        <Separator className="" />
        <div>
          <div className="flex flex-col">
            {/* <div>
              <h4 className="text-gray-900 text-lg leading-8 font-bold">
                Danger Zone
              </h4>
            </div> */}
            <div className="flex flex-col gap-0 ">
              <h5 className="text-gray-900 text-lg leading-8 font-bold">
                Delete chatbot
              </h5>
              <p>This action will permanently delete this chatbot</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                Confirm by typing
                <span className="text-red-500"> {`"delete chatbot"`} </span>
                below
              </p>
              <div>
                <Input name="delete" placeholder="delete chatbot" />
              </div>
              <div className="">
                <Button className="bg-red-500 text-white">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
