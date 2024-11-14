import * as z from "zod";

export const chatbotSchema = z.object({
  chatbot_name: z.string().min(1, { message: "Name is required" }),
  welcome_message: z
    .string()
    .min(1, { message: "Welcome message is required" }),
  fallback_message: z.string().optional(),
  website_link: z.string().url().optional(),
});
