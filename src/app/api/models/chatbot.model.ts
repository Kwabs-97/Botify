import client from "../config/db";
import { ChatbotDataInterface } from "@/app/types";

// Get a chatbot by its ID
export const getChatbotById = async (id: string) => {
  const res = await client.query(
    `SELECT name, last_trained, isvisible, islive, welcome_message, fallback_message, website_url, color, offline_fallback_notification_email
     FROM details
     LEFT JOIN data_source ON details.id = data_source.chatbot_id
     LEFT JOIN settings ON details.id = settings.chatbot_id
     WHERE details.id = $1`,
    [id]
  );

  if (!res.rows) return null;
  return res.rows[0];
};

// Get all chatbots
export const getAllChatbots = async () => {
  try {
    const res = await client.query("SELECT * FROM details");
    const chatbots = res.rows;
    if (!chatbots) return null;
    return chatbots;
  } catch (error) {
    console.error("Error fetching all chatbots:", error);
    throw new Error("Failed to fetch all chatbots");
  }
};

// Create a new chatbot
export const createChatbot = async (chatbotData: ChatbotDataInterface) => {
  if (!chatbotData) {
    throw new Error("Chatbot data is missing");
  }

  try {
    const {
      name,
      fallback_message,
      welcome_message,
      website_url,
      color,
      offline_fallback_notification_email,
    } = chatbotData;

    // Insert into details table
    const result1 = await client.query(
      "INSERT INTO details (name, welcome_message, fallback_message) VALUES ($1, $2, $3) RETURNING *",
      [name, welcome_message, fallback_message]
    );

    const id: string = result1.rows[0].id;
    console.log("Created chatbot ID:", id);

    // Insert into data_source table
    const result2 = await client.query(
      "INSERT INTO data_source (chatbot_id, website_url) VALUES ($1, $2) RETURNING *",
      [id, website_url]
    );

    // Insert into settings table
    const result3 = await client.query(
      "INSERT INTO settings (chatbot_id, color, offline_fallback_notification_email) VALUES ($1, $2, $3) RETURNING *",
      [id, color, offline_fallback_notification_email]
    );

    return {
      details: result1.rows[0],
      data_source: result2.rows[0],
      settings: result3.rows[0],
    };
  } catch (error) {
    console.error("Error creating chatbot:", error);
    throw new Error("Failed to create chatbot");
  }
};

// Update an existing chatbot
export const updateChatbot = async (chatbotData: ChatbotDataInterface) => {
  const {
    color,
    offline_fallback_notification_email,
    fallback_message,
    website_url,
    welcome_message,
    name,
    id,
  } = chatbotData;
  if (!id) {
    throw new Error("Chatbot ID is missing");
  }

  try {
    // update details table
    const result2 = await client.query(
      "UPDATE details SET name = $1, welcome_message = $2, fallback_message = $3 WHERE id = $4 RETURNING *",
      [name, welcome_message, fallback_message, id]
    );

    // update data_source table
    const result3 = await client.query(
      "UPDATE data_source SET website_url = $1 WHERE id = $2 RETURNING *",
      [website_url, id]
    );
    
    // Update settings table
    const result1 = await client.query(
      "UPDATE settings SET color = $2, offline_fallback_notification_email = $3 WHERE id = $1 RETURNING *",
      [id, color, offline_fallback_notification_email?.trim()]
    );

    return {
      details: result2.rows[0],
      data_source: result3.rows[0],
      settings: result1.rows[0],
    };
  } catch (error) {
    console.error("Error updating chatbot:", error);
    throw new Error("Failed to update chatbot");
  }
};
