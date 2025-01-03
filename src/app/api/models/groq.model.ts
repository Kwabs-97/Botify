import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
const model = new ChatGroq({
  temperature: 0,
  model: "mixtral-8x7b-32768",
});

export async function generateWelcomeMessage(companyName: string) {
  const messages = [
    new SystemMessage(
      "Generate a two-line welcome message for the company named below"
    ),
    new HumanMessage(companyName),
  ];

  const response = await model.invoke(messages);
  return response.content;
}
