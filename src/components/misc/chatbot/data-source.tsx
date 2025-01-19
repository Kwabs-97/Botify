import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Input from "@/components/ui/input";
import CustomDropzone from "../CustomDropzone";
import { search_right } from "@/assets/icons";

interface ChatbotDataInterface {
  files?: String;
  website_url?: String;
}
function DataSource({ chatbotData }: { chatbotData: ChatbotDataInterface }) {
  const [detectedFiles, setDetectedFiles] = useState<number | null>(null);

  const handleFileUpload = (file: File) => {
    if (file) {
      setDetectedFiles(1);
    } else setDetectedFiles(0);
  };
  const handleFileDelete = (file: File) => {
    setDetectedFiles(0);
  };
  return (
    <>
      <div className="flex flex-col gap-6 flex-1">
        <section className="flex flex-col gap-1">
          <h3 className="text-gray-900 text-lg leading-8 font-bold">
            Data sources
          </h3>
          <p className="text-gray-600 text-sm">Train your chatbot with data</p>
        </section>
        <section>
          <p className="text-gray-600">Upload files</p>
          <CustomDropzone />
          <section className="flex flex-row gap-1 items-center">
            <Separator
              orientation="horizontal"
              className="w-[222.5px] h-[1px] bg-gray-200"
            />
            <p className="text-nowrap text-gray-500">or train from</p>
            <Separator
              orientation="horizontal"
              className="w-[222.5px] h-[1px] bg-gray-200"
            />
          </section>
          <section className="flex flex-col gap-2">
            <Input
              label="Website link"
              name="website_url"
              className="min-h-[50px]"
              placeholder="Enter website url"
              iconSrc={search_right}
            />
          </section>
        </section>
      </div>
    </>
  );
}

export default DataSource;
