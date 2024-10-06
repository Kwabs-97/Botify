import Sidebar from "@/components/layouts/sidebar";
import React from "react";

function layout({ children }) {
  return (
    <div class="flex flex-row w-screen h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

export default layout;
