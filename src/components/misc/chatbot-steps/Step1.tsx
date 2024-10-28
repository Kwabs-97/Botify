"use client";
import React from "react";
import CustomDropzone from "../CustomDropzone";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { search_right } from "@/assets/icons";
import CustomInput from "@/components/form-elements/CustomInput";
function Step1() {
  const [detectedFiles, setDetectedFiles] = useState<number | null>(null);
  const [step, setStep] = useState<number | null>(1);

  const handleFileUpload = (file: File) => {
    if (file) {
      setDetectedFiles(1);
    } else setDetectedFiles(0);
  };
  const handleFileDelete = (file: File) => {
    setDetectedFiles(0);
  };
  return (
    <div className="flex flex-row gap-8 px-12 flex-grow">
      {/* Data sources */}
      <div className="flex flex-col gap-6 flex-1">
        <section className="flex flex-col gap-1">
          <h3 className="text-gray-900 text-lg leading-8 font-bold">
            Data sources
          </h3>
          <p className="text-gray-600 text-sm">Train your chatbot with data</p>
        </section>
        <section>
          <p className="text-gray-600">Upload files</p>
          <CustomDropzone
            onFileUpload={handleFileUpload}
            onFileDelete={handleFileDelete}
          />
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
            <h3 className="text-gray-900 text-lg leading-8 font-bold">
              Website link
            </h3>
            <CustomInput
              type="url"
              iconSrc={search_right}
              className="w-full bg-gray-100 h-14"
              placeholder="Enter website url"
            />
          </section>
        </section>
      </div>

      {/* Preview */}
      <div className="flex-1 flex flex-col gap-6">
        <section className="flex flex-col gap-1">
          <h3 className="text-gray-900 text-lg leading-8 font-bold">Preview</h3>
        </section>
        <section className="flex flex-col gap-6 p-6 bg-gray-50 rounded-lg">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold text-black">
              Dectected files or links
            </h4>
            <p className="font-normal text-gray-600 text-xs">
              {detectedFiles ? detectedFiles : "None"}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className=" text-sm font-bold text-black">
              Dectected characters
            </h4>
            <p className="text-xs font-normal text-gray-600">0</p>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
}

export default Step1;
