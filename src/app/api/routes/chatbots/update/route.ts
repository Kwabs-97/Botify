import { updateChatbot } from "@/app/api/models/chatbot.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const chatbotData = body;
  try {
    if (!chatbotData) {
      return NextResponse.json(
        { message: "No chatbot data received" },
        { status: 400 }
      );
    }

    const res = await updateChatbot(chatbotData);
    return NextResponse.json(
      { message: "update success", data: res },
      { status: 201 }
    );
  } catch (error) {
    console.log("error updating chatbot data", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}