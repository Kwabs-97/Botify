"use client";
import React from "react";
import Image from "next/image";
import { logo } from "@/assets/images";
import Header4 from "../typography/Header4";
import Link from "next/link";
import CustomButton from "../form-elements/CustomButton";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const links = ["Features", "Pricing", "contact"];
  const router = useRouter();
  return (
    <nav className="flex flex-row justify-between px-16 py-5">
      <div className="flex flex-row items-center justify-center">
        <Image src={logo} alt="logo" className="bg-transparent" />
        <Header4>Botify</Header4>
      </div>
      <div>
        <section className="flex flex-row gap-8">
          {links.map((link) => {
            <Link href={link.toLowerCase()}>{Link}</Link>;
          })}
        </section>
      </div>
      <div>
        <section className="flex flex-row gap-8 justify-center items-center">
          <Link href="/signIn">Sign in</Link>
          <CustomButton
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign up
          </CustomButton>
        </section>
      </div>
    </nav>
  );
}
