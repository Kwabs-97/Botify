import Sidebar from "@/components/layouts/sidebar";

function DashbordLayout({ children }) {
  return (
    <div class="flex flex-row w-screen h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

export default DashbordLayout;
