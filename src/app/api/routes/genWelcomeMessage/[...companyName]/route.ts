import { generateWelcomeMessage } from "@/app/api/models/groq.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const pathSegments = pathname.split("/");
  const companyName = pathSegments.at(-1);
  try {
    const res = await generateWelcomeMessage(companyName!);
    console.log(res);
    return NextResponse.json(
      {
        message: "generate welcome message request succes",
        welcomeMessage: res,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
