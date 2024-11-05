import { NextResponse, NextRequest } from "next/server";
import { createChatbot } from "../../models/chatbot.model";
import { ChatbotDataFields } from "@/types";

export async function POST(req: NextRequest) {
  try {
    // const formData = await req.formData(); // Use formData to handle URL-encoded data
    // const body = Object.fromEntries(formData); // Convert form data to an object
    // console.log(body);
    const body = await req.json();
    console.log(body);
    const { name, website, welcome_message, fallback_message } = body;

    const chatbotData: ChatbotDataFields = {
      name,
      welcome_message,
      fallback_message,
      website,
    };

    await createChatbot(chatbotData);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
