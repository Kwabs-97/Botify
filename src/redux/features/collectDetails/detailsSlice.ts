import { RootState } from "@/redux/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChatbotDataInterface {
  collectUserEmail: boolean;
  chatbotName: string;
  chatbotWelcomeMessage: string;
  chatbotFallbackMessage: string;
  chatbotWebsiteLink: string;
}

const initialState: ChatbotDataInterface = {
  collectUserEmail: false,
  chatbotName: "",
  chatbotWebsiteLink: "",
  chatbotFallbackMessage: "",
  chatbotWelcomeMessage: "",
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setCollectUsersEmail: (state, action: PayloadAction<boolean>) => {
      state.collectUserEmail = action.payload;
    },
    setWebsiteLink: (state, action: PayloadAction<string>) => {
      state.chatbotWebsiteLink = action.payload;
    },
    setChatbotName: (state, action: PayloadAction<string>) => {
      state.chatbotName = action.payload;
    },
    setChatbotWelcomeMessage: (state, action: PayloadAction<string>) => {
      state.chatbotWelcomeMessage = action.payload;
    },
    setChatbotFallbackMessage: (state, action: PayloadAction<string>) => {
      state.chatbotFallbackMessage = action.payload;
    },
  },
});

export const {
  setCollectUsersEmail,
  setChatbotFallbackMessage,
  setChatbotName,
  setWebsiteLink,
  setChatbotWelcomeMessage,
} = detailsSlice.actions;

export default detailsSlice.reducer;

export const selectCollectUsersEmail = (state: RootState) =>
  state.details.collectUserEmail;
export const selectChatbotName = (state: RootState) =>
  state.details.chatbotName;
export const selectChatbotFallbackMessage = (state: RootState) =>
  state.details.chatbotFallbackMessage;
export const selectChatbotWelcomeMessage = (state: RootState) =>
  state.details.chatbotWelcomeMessage;
