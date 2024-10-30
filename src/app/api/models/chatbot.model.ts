import pool from "../config/db";

interface ChatbotDataInterface {
  welcome_message: string;
  fallback_message: string;
  name: string;
  lastTrained: string;
  isVisible: boolean;
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

export const createChatbot = async (chatbotData: ChatbotDataInterface) => {};
