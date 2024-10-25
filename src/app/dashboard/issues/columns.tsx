"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Issue = {
  id: string;
  userQuery: string;
  botSource: string;
  date: Date;
  actions: string;
};

export const columns: ColumnDef<Issue>[] = [
  {
    accessorKey: "userQuery",
    header: "User Query",
  },
  {
    accessorKey: "botSource",
    header: "Bot Source",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
