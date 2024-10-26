import React from "react";
import { Avatar } from "@/assets/icons";
import { DataTable } from "@/components/misc/data-table";
import { exportIcon } from "@/assets/icons";
import SearchIcon from "@/components/misc/search";
import { columns, Users } from "./columns";
import CustomButton from "@/components/form-elements/CustomButton";

async function getUsers(): Promise<Users[]> {
  return [
    {
      name: "Samuel Yeboah",
      email: "kwabs@test.com",
      botSource: "Jobmanor",
      lastSeen: new Date().getDate(),
    },
    {
      name: "Samuel Yeboah",
      email: "kwabs@test.com",
      botSource: "Jobmanor",
      lastSeen: new Date().getDate(),
    },
    {
      name: "Samuel Yeboah",
      email: "kwabs@test.com",
      botSource: "Jobmanor",
      lastSeen: new Date().getDate(),
    },
    {
      name: "Samuel Yeboah",
      email: "kwabs@test.com",
      botSource: "Jobmanor",
      lastSeen: new Date().getDate(),
    },
    {
      name: "Samuel Yeboah",
      email: "kwabs@test.com",
      botSource: "Jobmanor",
      lastSeen: new Date().getDate(),
    },
  ];
}
async function page() {
  const data = await getUsers();
  return (
    <div className="flex flex-col gap-5 overflow-hidden ">
      <div className="header py-8 px-12 border-b border-b-gray-200">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-2xl leading-8 font-bold">
              Users
            </h3>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate{" "}
            </p>
          </div>
          <div className="avatar">
            <Avatar />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-12">
        <div className="flex flex-row w-full justify-between">
          <SearchIcon />
          <CustomButton iconSrc={exportIcon}>Export</CustomButton>
        </div>

        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}

export default page;
