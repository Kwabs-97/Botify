"use client";

import React, { useEffect, useRef, useState } from "react";
import { MoveLeft } from "lucide-react";
import CustomButton from "@/components/form-elements/CustomButton";
import Chatbot from "@/components/misc/chatbot/chatbot";
const Page = ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
  } catch (error) {}

  const navItems = ["Chatbot", "Data Sources", "Settings"];
  const [activeStep, setActiveStep] = useState("Chatbot");
  const [dashStyles, setDashStyles] = useState({});

  const navRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = navItems.indexOf(activeStep);
    const activeNav = navRefs.current[activeIndex];

    if (activeNav) {
      const { offsetWidth, offsetLeft } = activeNav;
      setDashStyles({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  }, [activeStep]);
  return (
    <div className="flex flex-col overflow-hidden ">
      {/*Header*/}

      <div className="header py-8 px-12 border border-b-gray-200">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4 items-center">
            <MoveLeft color="#6B7280" />
            <p className="h4 font-bold text-gray-900">Jobmanor</p>
          </div>
          <div className="url flex flex-row gap-4">
            <div className="bg-blue-50 text-blue-500 p-2.5 rounded-lg text-sm">
              <p>https://www.botify.app.com/Jobmanor</p>
            </div>
            <CustomButton>Copy Link</CustomButton>
          </div>
        </div>
      </div>

      {/*Main */}
      <div className="flex flex-row gap-6">
        {/*Data */}
        <div className="flex flex-col px-8 flex-1">
          <div className="py-4">
            {/*Navigation*/}
            <nav className="flex flex-row gap-10 w-full relative border-b border-gray-200">
              {navItems.map((navItem, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    navRefs.current[i] = el;
                  }}
                  className="cursor-pointer"
                  onClick={() => setActiveStep(navItem)}
                >
                  <p
                    className={`py-2.5 text-sm ${
                      activeStep === navItem ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    {navItem}
                  </p>
                </div>
              ))}
              <span
                className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
                style={dashStyles}
              />
            </nav>
          </div>

          {activeStep === "Chatbot" && (
            <div>
              <Chatbot />
            </div>
          )}
        </div>

        {/*Chatbot playground */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Page;
