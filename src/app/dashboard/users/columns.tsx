"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Users = {
  id?: string;
  name: string;
  email: string;
  botSource: string;
  lastSeen: number;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-gray-800 font-medium text-xs leading-4 p-3">
        User Query
      </div>
    ),
    cell: ({ row }) => {
      return <div className="p-3">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="text-gray-800 font-medium text-xs leading-4 p-3">
        Bot Source
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
        Date
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
        Actions
      </div>
    ),
    cell: ({ row }) => {
      return <div className="p-3">{row.getValue("lastSeen")}</div>;
    },
  },
];
