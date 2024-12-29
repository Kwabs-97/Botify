export interface ChatbotDataInterface {
  name?: string;
  welcome_message?: string;
  isLive?: boolean;
  isPublic?: boolean;
  lastTrained?: Date;
  fallback_message?: string;
  collect_user_email?: boolean;
  website_url?: string;
}
