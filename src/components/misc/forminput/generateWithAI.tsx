import React from "react";
import Image from "next/image";
import { sparksIcon } from "@/assets/icons";

// Define the props interface with an optional genWithAI prop
interface GenerateWithAIProps {
  genWithAI?: () => Promise<void>; // The ? makes this prop optional
  error?: string;
}

function GenerateWithAI({ genWithAI = () => Promise.resolve(), error }: GenerateWithAIProps) {
    return (
      <button
        type="button"
        className="flex flex-row gap-3 hover:cursor-pointer"
        onClick={async () => {
          console.log("clicked");
          await genWithAI(); // Safe to call because genWithAI is always a function
        }}
      >
        <Image alt="sparks" src={sparksIcon} />
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-blue-500">Let Boti Generate</p>

      </button>
    );
  }

export default GenerateWithAI;