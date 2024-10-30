import { NextResponse } from "next/server";
import pool from "../config/db";

export interface ChatbotDataInterface {
  chatbot_name: string;
  welcome_message: string;
  fallback_message: string;
  lastTrained?: string;
  isVisible?: string;
}

export const getChatbotById = async (id: string) => {
  const res = await pool.query(
    "SELECT * FROM chatbot_details WHERE id === $1",
    [id]
  );
  if (!res.rows) return null;
  return res.rows;
};

export const getAllChatbots = async () => {
  const res = await pool.query("SELECT * FROM chatbot_details");
  const chatbots = res.rows;
  if (!chatbots) return null;
  return chatbots;
};

export const createChatbot = async (chatbotData: ChatbotDataInterface) => {
  try {
    if (!chatbotData) {
      throw new Error("Chatbot data is required");
    }

    const { chatbot_name, fallback_message, welcome_message } = chatbotData;
    const result = await pool.query(
      "INSERT INTO chatbot_details (chatbot_name, welcome_message, fallback_message) VALUES ($1, $2, $3) RETURNING *",
      [chatbot_name, welcome_message, fallback_message]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error creating chatbot:", error);
    throw new Error("Failed to create chatbot");
  }
};
