// RootProvider.js
"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface RootProviderProps {
  children: React.ReactNode;
}
const RootProvider = ({ children }: RootProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
