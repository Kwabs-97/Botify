"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import CustomButton from "@/components/form-elements/CustomButton";
import Stepper from "@/components/misc/Stepper";
import Step1 from "@/components/misc/chatbot-steps/Step1";
import Step2 from "@/components/misc/chatbot-steps/Step2";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { chatbotSchema } from "@/lib/schema";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import SettingUpChatbot from "@/components/misc/setting-up";

function Page() {
  //handle navigation after successful adding c

  //step state
  const [step, setStep] = useState(1);

  const totalSteps = 2;

  //file state
  const [detectedFiles, setDetectedFiles] = useState(null);

  //form-handling
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(chatbotSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("/api/routes/new", data);
      console.log(res);
      if (res.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("error creating new chatbot", error);
    }
    console.log(data);
  };
  //handle steps
  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };
  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  //handle finish
  const handleFinish = () => {
    handleSubmit(onSubmit)();
  };

  //routing
  const router = useRouter();
  return (
    <>
      {isSubmitting ? (
        <div className="flex w-screen h-screen items-center justify-center">
          <SettingUpChatbot />
        </div>
      ) : (
        <div className="flex flex-col w-full h-full overflow-hidden gap-5">
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
          <div className="flex-grow px-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && <Step1 register={register} errors={errors} />}
              {step === 2 && <Step2 register={register} errors={errors} />}
            </form>
          </div>

          {/* Steps */}
          <div className="">
            <section className="flex flex-row justify-between px-12 py-6">
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-sm">step {step} of 2</div>
                <Stepper totalSteps={totalSteps} currentStep={step} />
              </div>
              <div className="flex flex-row gap-4">
                <CustomButton
                  className={`bg-white text-blue-600 border border-blue-600 ${
                    step === 1
                      ? "bg-gray-200 border-none text-white cursor-not-allowed"
                      : "bg-white"
                  }`}
                  onClick={handlePrevStep}
                  disabled={step === 1}
                >
                  Go back
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    handleNextStep();
                    step === 2 && handleFinish();
                  }}
                  disabled={step === totalSteps || isSubmitting}
                  className={`${step === 2 && "px-6"} ${
                    isSubmitting
                      ? "bg-gray-200 border-none text-white cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isSubmitting && <LoadingSpinner />}
                  {step === 2 ? "Finish" : "Continue"}
                </CustomButton>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
