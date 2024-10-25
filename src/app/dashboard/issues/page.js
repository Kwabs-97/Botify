import React from "react";
import { Avatar } from "@/assets/icons";
import { DataTable } from "./data-table";
import FilterIcon from "@/components/misc/filter";
import SearchIcon from "@/components/misc/search";
import CustomInput from "@/components/form-elements/CustomInput";
import { Search } from "lucide-react";

function page() {
  async function getIssues() {
    return [
      {
        Name: "Samuel Yeboah",
        Email: "kwabs@test.com",
        BotSource: "",
      },
    ];
  }
  return (
    <div className="flex flex-col gap-5 ">
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
        <div className="flex flex-row gap-6">
          <FilterIcon />
          <SearchIcon />
        </div>
        <div>{/* <DataTable /> */}</div>
      </div>
    </div>
  );
}

export default page;
