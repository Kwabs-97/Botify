import Logo from "../misc/Logo";
import Link from "next/link";
import { Columns2, Users, Database, CircleHelp, Layers } from "lucide-react";
import { Chatbot } from "@/assets/icons";

function Sidebar({ children }) {
  const navItems = [
    {
      link: "Chatbots",
      icon: <Chatbot />,
    },
    {
      link: "Issues",
      icon: <Database />,
    },
    {
      link: "Users",
      icon: <Users />,
    },
    {
      link: "Integrations",
      icon: <Layers />,
    },
    {
      link: "Help",
      icon: <CircleHelp />,
    },
  ];
  return (
    <div className="h-full flex flex-row ">
      <div className=" bg-basic flex flex-col justify-between items-center  min-w-[240px]">
        <section className="links flex flex-col gap-4">
          <header>
            <Logo className="px-4 py-2.5" />
          </header>
          <main className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              {navItems.slice(0, 3).map((navItem, i) => (
                <Link
                  href={navItem.link.toLowerCase()}
                  key={i}
                  className="flex flex-row gap-4 px-4 py-2.5"
                >
                  <div>{navItem.icon}</div>
                  <div>
                    <p>{navItem.link}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <header className="px-4 py-2.5">Settings</header>
              {navItems.slice(3).map((navItem, i) => (
                <Link
                  key={i}
                  className="flex flex-row gap-4 px-4 py-2.5"
                  href={navItem.link.toLowerCase()}
                >
                  <div>{navItem.icon}</div>
                  <div>
                    <p>{navItem.link}</p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </section>
        <section className="collapsible py-3.5 px-4">
          <div className="flex flex-row gap-4 justify-center">
            <div>
              <Columns2 />
            </div>
            <div>
              <p>Collapse Menu</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
