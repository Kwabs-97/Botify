import React from "react";
import { Separator } from "@/components/ui/separator";
import { Upload } from "@/assets/icons";
import Input from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

function Settings() {
  return (
    <div className="text-gray-900 overflow-y-scroll max-h-[500px] gap-6 flex flex-col">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="h4 ">Appearance</h3>
        </div>
        <div className="flex flex-col gap-4">
          <h5>Chatbot Color</h5>
          <div className="flex flex-row gap-4 max-w-[536px] flex-wrap">
            <div className="w-24 h-[53px] bg-blue-600"></div>
            <div className="w-24 h-[53px] bg-[#049BE5]"></div>
            <div className="w-24 h-[53px] bg-[#4CAF50]"></div>
            <div className="w-24 h-[53px] bg-[#F47D02]"></div>
            <div className="w-24 h-[53px] bg-[#9C27B0]"></div>
            <div className="w-24 h-[53px] bg-[#E91E63]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5>Chatbot Icon</h5>
          <div className="flex flex-row gap-4">
            <div className="border rounded-lg border-dashed border-blue-600 py-5 flex items-center justify-center flex-1">
              <p>None</p>
            </div>
            <div className="border rounded-lg border-dashed border-blue-600 flex flex-row py-5 flex-1 items-center justify-center">
              <p>Upload</p>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-50" />
      <div>
        <div className="flex flex-col gap-4">
          <h4 className="h4">Notification</h4>
          <div>
            <p>Send offline fallback message email notification to</p>
            <Input name="email" placeholder="Enter email address" />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <div className="flex flex-col gap-4">
          <h4 className="h4">Branding</h4>
          <div className="flex flex-row items-center gap-6">
            <p>{`Display "Powered By" badge`}</p>
            <Switch />
          </div>
        </div>
      </div>
      <Separator className="" />
      <div>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="h4">Danger Zone</h4>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="h5">Delete chatbot</h5>
            <p>This action will permanently delete this chatbot</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Confirm by typing delete chatbot below</p>
            <div>
              <Input name="delete" placeholder="delete chatbot" />
            </div>
            <div className="self-end">
              <Button className="bg-red-500 text-white">Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
