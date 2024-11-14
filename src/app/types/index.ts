export interface ChatbotDataInterface {
  chatbot_name: string;
  welcome_message?: string;
  fallback_message?: string;
  collect_user_email?: boolean;
  website_url?: string;
}
