import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

function DashbordLayout({ children }) {
  return (
    <div class="flex flex-row w-screen h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

export default DashbordLayout;
