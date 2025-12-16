import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { c as cn, b as buttonVariants } from "./input-DS2-RFXY.js";
import { MoreHorizontal, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { router } from "@inertiajs/react";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CzhD-hP3.js";
import { I as InputGroup, a as InputGroupAddon, b as InputGroupInput } from "./input-group-rYvaTNbT.js";
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const Pagination = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ jsx(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Previous" })
    ]
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { children: "Next" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
    ]
  }
);
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  "span",
  {
    "aria-hidden": true,
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";
function PaginationBar({ links, search, filter }) {
  const handlePageChange = (e, url) => {
    e.preventDefault();
    if (url) {
      router.get(
        url,
        { search, filter },
        { preserveState: true, preserveScroll: true }
      );
    }
  };
  return /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsx(PaginationContent, { children: links.map((link, index) => {
    const isPrevious = link.label.includes("Previous");
    const isNext = link.label.includes("Next");
    const isEllipsis = link.label == "...";
    if (link.url == null && isEllipsis) {
      return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationEllipsis, {}) }, index);
    }
    if (isPrevious) {
      return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
        PaginationPrevious,
        {
          href: link.url || "#",
          onClick: (e) => handlePageChange(e, link.url),
          className: !link.url ? "pointer-events-none opacity-50" : "cursor-pointer"
        }
      ) }, index);
    }
    if (isNext) {
      return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
        PaginationNext,
        {
          href: link.url || "#",
          onClick: (e) => handlePageChange(e, link.url),
          className: !link.url ? "pointer-events-none opacity-50" : "cursor-pointer"
        }
      ) }, index);
    }
    return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
      PaginationLink,
      {
        href: link.url || "#",
        isActive: link.active,
        onClick: (e) => handlePageChange(e, link.url),
        children: link.label
      }
    ) }, index);
  }) }) });
}
function useSearchFilter(routeName, filters, dataKey) {
  const [search, setSearch] = useState(filters.search || []);
  const [filter, setFilter] = useState(filters.filter || []);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.get(
        route(routeName),
        {
          search,
          filter
        },
        {
          preserveState: true,
          // Don't clear the search box while typing
          preserveScroll: true,
          // Don't jump to the top
          replace: true,
          // Don't fill the browser history with every letter typed
          only: [dataKey]
        }
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [search, filter]);
  return { search, setSearch, filter, setFilter };
}
function UserSearchBar({
  search,
  setSearch,
  filter,
  setFilter,
  pageName
}) {
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex gap-2", children: [
    /* @__PURE__ */ jsxs(InputGroup, { children: [
      /* @__PURE__ */ jsx(InputGroupAddon, { children: /* @__PURE__ */ jsx(Search, {}) }),
      /* @__PURE__ */ jsx(
        InputGroupInput,
        {
          name: "search",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Seach..."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      Select,
      {
        defaultValue: (filter == null ? void 0 : filter.length) <= 0 ? "default" : filter,
        onValueChange: (value) => setFilter(value),
        children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Filter" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "default", children: "Default" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "sortAToZ", children: "Sort A-Z" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "oldUser", children: "Old users" }),
            pageName == "user" && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "Status is Pending" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "success", children: "Status is Success" })
            ] }),
            /* @__PURE__ */ jsx(SelectItem, { value: "loginByGoogle", children: "Login by Google" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "loginByManual", children: "Login by Manual" })
          ] })
        ]
      }
    )
  ] });
}
export {
  PaginationBar as P,
  Table as T,
  UserSearchBar as U,
  TableCaption as a,
  TableHeader as b,
  TableRow as c,
  TableHead as d,
  TableBody as e,
  TableCell as f,
  useSearchFilter as u
};
