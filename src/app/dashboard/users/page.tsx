import React from "react";
import { Avatar } from "@/assets/icons";
import { DataTable } from "./data-table";
import { exportIcon } from "@/assets/icons";
import SearchIcon from "@/components/misc/search";
import { columns } from "./columns";
import CustomButton from "@/components/form-elements/CustomButton";
import getUsers from "@/data/users";

async function page() {
  const data = await getUsers();
  return (
    <div className="flex flex-col gap-5 overflow-hidden h-full ">
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
      <div className="flex flex-col gap-6 px-12 h-full py-6">
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
