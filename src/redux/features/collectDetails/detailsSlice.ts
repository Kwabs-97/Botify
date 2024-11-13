import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChatbotDataInterface {
  chatbotName: string;
  chatbotWelcomeMessage: string;
}

const initialState: ChatbotDataInterface = {
  chatbotName: "",
  chatbotWelcomeMessage: "",
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setChatbotName: (state, action: PayloadAction<string>) => {
      state.chatbotName = action.payload;
    },
    setChatbotWelcomeMessage: (state, action: PayloadAction<string>) => {
      state.chatbotWelcomeMessage = action.payload;
    },
  },
});

export const {
  setChatbotName,

  setChatbotWelcomeMessage,
} = detailsSlice.actions;

export default detailsSlice.reducer;
export const selectChatbotName = (state: RootState) =>
  state.details.chatbotName;
export const selectChatbotWelcomeMessage = (state: RootState) =>
  state.details.chatbotWelcomeMessage;
