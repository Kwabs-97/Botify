"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar } from "@/assets/icons";

export type Users = {
  id?: string;
  name: string;
  email: string;
  botSource: string;
  lastSeen: Date;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-gray-800 font-medium text-xs leading-4 p-3">
        Name
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="p-3">
          <div className="flex flex-row gap-3 items-center">
            <Avatar />
            {row.getValue("name")}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="text-gray-800 font-medium text-xs leading-4 p-3">
        Email
      </div>
    ),
    cell: ({ row }) => {
      return <div className="p-3">{row.getValue("email")}</div>;
    },
  },
  {
    accessorKey: "botSource",
    header: () => (
      <div className="text-gray-800 font-medium text-xs leading-4 p-3">
        Bot Source
      </div>
    ),
    cell: ({ row }) => {
      return <div className="p-3">{row.getValue("botSource")}</div>;
    },
  },
  {
    accessorKey: "lastSeen",
    header: () => (
      <div className="text-gray-800 font-medium text-xs leading-4 p-3">
        Last Seen
      </div>
    ),
    cell: ({ row }) => {
      return <div className="p-3">{row.getValue("lastSeen")}</div>;
    },
  },
];
