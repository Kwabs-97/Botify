import pool from "../config/db";
import { ChatbotDataInterface } from "@/app/types";

export const getChatbotById = async (id: string) => {
  const res = await pool.query("SELECT * FROM details WHERE id = $1", [id]);
  if (!res.rows) return null;
  return res.rows[0];
};

export const getAllChatbots = async () => {
  try {
    const res = await pool.query("SELECT * FROM details");
    const chatbots = res.rows;
    if (!chatbots) return null;
    return chatbots;
  } catch (error) {
    console.log(error, "Error fetching all chatbots");
  }
};

export const createChatbot = async (chatbotData: ChatbotDataInterface) => {
  try {
    if (!chatbotData) {
      throw new Error("Chatbot data is required");
    }

    const { chatbot_name, fallback_message, welcome_message, website_url } =
      chatbotData;
    const result1 = await pool.query(
      "INSERT INTO details (name, welcome_message, fallback_message) VALUES ($1, $2, $3) RETURNING *",
      [chatbot_name, welcome_message, fallback_message]
    );

    const id: string = result1.rows[0].id;

    const result2 = await pool.query(
      "INSERT INTO data_source (chatbot_id, website_url) VALUES ($1, $2) RETURNING *",
      [id, website_url]
    );

    console.log(result2);
    return { details: result1.rows[0], data_source: result2.rows[0] };
  } catch (error) {
    console.error("Error creating chatbot:", error);
    throw new Error("Failed to create chatbot");
  }
};
