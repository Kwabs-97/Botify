"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import CustomInput from "@/components/form-elements/CustomInput";
import CustomButton from "@/components/form-elements/CustomButton";
import Stepper from "@/components/misc/Stepper";
import Step1 from "@/components/misc/chatbot-steps/Step1";
import Step2 from "@/components/misc/chatbot-steps/Step2";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Page() {
  const [step, setStep] = useState(1);
  const totalSteps = 2;
  const [detectedFiles, setDetectedFiles] = useState(null);

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };
  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  //form-handling
  const { formState, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //routing
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      {/* Header */}
      <div className="header py-6 px-12 border-b border-b-gray-200">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 items-center">
            <ArrowLeft
              className="text-gray-500 hover:cursor-pointer"
              onClick={() => router.back()}
            />
            <h3 className="text-gray-900 text-lg leading-8 font-bold">
              Create a new chatbot
            </h3>
          </div>
        </div>
      </div>
      {/* Preview*/}
      {/* <Step1 /> */}
      {/* <Step2 /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 register={register} />}
        {step === 2 && <Step2 register={register} />}

        <button type="submit">submit</button>
      </form>

      {/* Steps */}
      <div className="">
        <section className="flex flex-row justify-between px-12 py-6">
          <div className="flex flex-col gap-2">
            <div className="text-gray-500 text-sm">step {step} of 2</div>
            <Stepper totalSteps={totalSteps} currentStep={step} />
          </div>
          <div className="flex flex-row gap-4">
            <CustomButton
              className="bg-white text-blue-600 border border-blue-600"
              onClick={handlePrevStep}
              disabled={step === 1}
            >
              Go back
            </CustomButton>
            <CustomButton
              onClick={handleNextStep}
              disabled={step === totalSteps}
              className={`${step === 2 && "px-6"}`}
            >
              {step === 2 ? "Finish" : "Continue"}
            </CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
