import Image from "next/image";
import { logo } from "@/assets/images";
import Header4 from "../typography/Header4";
import { cn } from "@/lib/utils";

function Logo({ className }) {
  return (
    <div className={cn("flex flex-row gap-2", className)}>
      <Image
        src={logo}
        alt="logo"
        className="bg-transparent aspect-square object-contain mix-blend-color-burn "
      />
      <Header4>Botify</Header4>
    </div>
  );
}

export default Logo;
