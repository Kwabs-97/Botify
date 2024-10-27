import * as React from "react";

import { cn } from "@/lib/utils";

interface TableProps {
  className?: string;
  children: React.ReactNode;
}

const Table = React.forwardRef(
  (
    { className, children, ...props }: TableProps,
    ref: React.Ref<HTMLTableElement> | undefined
  ) => (
    <div className="relative w-full overflow-auto max-h-[400px]">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm ", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
);
Table.displayName = "Table";

interface TableHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const TableHeader = React.forwardRef(
  (
    { className, ...props }: TableHeaderProps,
    ref: React.Ref<HTMLTableSectionElement> | undefined
  ) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  )
);
TableHeader.displayName = "TableHeader";

interface TableBodyProps {
  className?: string;
  children?: React.ReactNode;
}

const TableBody = React.forwardRef(
  (
    { className, children, ...props }: TableBodyProps,
    ref: React.Ref<HTMLTableSectionElement> | undefined
  ) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    >
      {children}
    </tbody>
  )
);
TableBody.displayName = "TableBody";

interface TableFooterProps {
  className?: string;
}

const TableFooter = React.forwardRef(
  (
    { className, ...props }: TableFooterProps,
    ref: React.Ref<HTMLTableSectionElement> | undefined
  ) => (
    <tfoot
      ref={ref}
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
);
TableFooter.displayName = "TableFooter";

interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
}

const TableRow = React.forwardRef(
  (
    { className, ...props }: TableRowProps,
    ref: React.Ref<HTMLTableRowElement> | undefined
  ) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

interface TableHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const TableHead = React.forwardRef(
  (
    { className, ...props }: TableHeadProps,
    ref: React.Ref<HTMLTableHeaderCellElement> | undefined
  ) => (
    <th
      ref={ref}
      className={cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

interface TableCellProps {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
}

const TableCell = React.forwardRef(
  (
    { className, ...props }: TableCellProps,
    ref: React.Ref<HTMLTableDataCellElement> | undefined
  ) => (
    <td
      ref={ref}
      className={cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-sm font-normal text-gray-500",
        className
      )}
      {...props}
    />
  )
);
TableCell.displayName = "TableCell";

interface TableCaptionProps {
  className?: string;
}

const TableCaption = React.forwardRef(
  (
    { className, ...props }: TableCaptionProps,
    ref: React.Ref<HTMLTableCaptionElement> | undefined
  ) => (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
