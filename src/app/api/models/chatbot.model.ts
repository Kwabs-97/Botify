import pool from "../config/db";
import { ChatbotDataInterface } from "@/app/types";

export const getChatbotById = async (id: string) => {
  const res = await pool.query(
    `SELECT name, last_trained, isvisible, islive, welcome_message, fallback_message, files, website_url, color, icon, display_brand_badge, offline_fallback_notification_email
   FROM details
   LEFT JOIN data_source ON details.id = data_source.chatbot_id
   LEFT JOIN settings ON details.id = settings.chatbot_id
   WHERE details.id = $1`,
    [id]
  );

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
      throw new Error("Chatbot data is missing");
    }

    console.log(
      "chatbot data at the chatbot model----------------",
      chatbotData
    );
    const { name, fallback_message, welcome_message, website_url } =
      chatbotData;
    const result1 = await pool.query(
      "INSERT INTO details (name, welcome_message, fallback_message) VALUES ($1, $2, $3) RETURNING *",
      [name, welcome_message, fallback_message]
    );

    const id: string = result1.rows[0].id;

    const result2 = await pool.query(
      "INSERT INTO data_source (chatbot_id, website_url) VALUES ($1, $2) RETURNING *",
      [id, website_url]
    );

    const result3 = await pool.query(
      "INSERT INTO settings (chatbot_id) VALUES ($1) RETURNING *",
      [id]
    );

    // const result3 = await pool.query("INSERT INTO settings (chatbot_id, color, display_brand_badge, offline_fallback_notification_email", [])
    console.log(result2);
    return { details: result1.rows[0], data_source: result2.rows[0] };
  } catch (error) {
    console.error("Error creating chatbot:", error);
    throw new Error("Failed to create chatbot");
  }
};

export const updateChatbot = async (chatbotData: ChatbotDataInterface) => {
  const id = chatbotData.id;
  if (!id) {
    throw new Error("chatbot id is missing");
  }
  try {
    const result1 = await pool.query(
      "UPDATE settings SET chatbot_id = $1, color = $2, offline_fallback_notification_email = $3 WHERE chatbot_id = $1 RETURNING *",
      [
        chatbotData.id,
        chatbotData.color,
        chatbotData.offline_fallback_notification_email,
      ]
    );
    return result1.rows[0];
  } catch (error) {
    console.log("Error updating chatbot", error);
  }
};
