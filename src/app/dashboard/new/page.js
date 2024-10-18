"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import CustomDropzone from "@/components/misc/CustomDropzone";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import CustomInput from "@/components/form-elements/CustomInput";
import { search_right } from "@/assets/icons";
import CustomButton from "@/components/form-elements/CustomButton";
import Stepper from "@/components/misc/Stepper";

function Page() {
  const [step, setStep] = useState(1);
  const [detectedFiles, setDetectedFiles] = useState(null);
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrevStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleFileUpload = (file) => {
    if (file) {
      setDetectedFiles(1);
    }
  };

  useEffect(() => {
    console.log(detectedFiles);
  }, [detectedFiles]);

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      {/* Header */}
      <div className="header py-8 px-12 border-b border-b-gray-200">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 items-center">
            <ArrowLeft className="text-gray-500" />
            <h3 className="text-gray-900 text-lg leading-8 font-bold">
              Create a new chatbot
            </h3>
          </div>
        </div>
      </div>
      {/* Preview*/}
      <div className="flex flex-row gap-8 px-12 flex-grow">
        {/* Data sources */}
        <div className="flex flex-col gap-6 flex-1">
          <section className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-lg leading-8 font-bold">
              Data sources
            </h3>
            <p className="text-gray-600 text-sm">
              Train your chatbot with data
            </p>
          </section>
          <section>
            <p className="text-gray-600">Upload files</p>
            <CustomDropzone onFileUpload={handleFileUpload} />
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
                className="w-full bg-gray-200 h-14"
                placeholder="Enter website url"
              />
            </section>
          </section>
        </div>

        {/* Preview */}
        <div className="flex-1 flex flex-col gap-6">
          <section className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-lg leading-8 font-bold">
              Preview
            </h3>
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

      {/* Steps */}
      <div className="">
        <section className="flex flex-row justify-between px-12 py-6">
          <div className="flex flex-col gap-2">
            <div className="text-gray-500 text-sm">step 1 of 2</div>
            <Stepper totalSteps={2} currentStep={step} />
          </div>
          <div className="flex flex-row gap-4">
            <CustomButton
              className="bg-white text-blue-600 border border-blue-600"
              onClick={handlePrevStep}
            >
              Go back
            </CustomButton>
            <CustomButton onClick={handleNextStep}>Continue</CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
