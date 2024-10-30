import { NextResponse, NextRequest } from "next/server";
import {
  ChatbotDataInterface,
  createChatbot,
} from "../../models/chatbot.model";

export async function POST(req: NextRequest) {
  try {
    // const formData = await req.formData(); // Use formData to handle URL-encoded data
    // const body = Object.fromEntries(formData); // Convert form data to an object
    const body = await req.json();
    console.log(body);

    const chatbotData: ChatbotDataInterface = {
      chatbot_name: body.chatbot_name as string,
      welcome_message: body.welcome_message as string,
      fallback_message: body.fallback_message as string,
      lastTrained: body.lastTrained as string,
      isVisible: body.isVisible as string,
      // Add other properties as needed
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
