import { jsx, jsxs } from "react/jsx-runtime";
import { u as useSearchFilter, U as UserSearchBar, T as Table, a as TableCaption, P as PaginationBar, b as TableHeader, c as TableRow, d as TableHead, e as TableBody, f as TableCell } from "./UserSearchBar-COhib427.js";
import { B as Badge } from "./badge-DxHmjrsV.js";
import { A as AdminLayout } from "./AdminLayout-Cye9rADK.js";
import { MoreHorizontalIcon } from "lucide-react";
import "react";
import { f as formatDate } from "./formatDate-D-MiTQQl.js";
import "@inertiajs/react";
import "./input-DS2-RFXY.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./select-CzhD-hP3.js";
import "@radix-ui/react-select";
import "./input-group-rYvaTNbT.js";
import "react-textarea-autosize";
import "./separator-C8hBBIqD.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "date-fns";
function AdminAllUser({ userData, filters = null }) {
  const { search, setSearch, filter, setFilter } = useSearchFilter("admin.allUser", filters, "userData");
  const statusColorChangeFn = (data) => {
    switch (data) {
      case "success":
        return "bg-green-400";
      case "pending":
        return "bg-orange-400";
      case "rejected":
        return "bg-red-400";
      default:
        return "bg-slate-400";
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#All User" }),
    /* @__PURE__ */ jsx(UserSearchBar, { search, setSearch, filter, setFilter, pageName: "user" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableCaption, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h1", { children: "A list of Users." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PaginationBar, { links: userData.links, search, filter }) })
      ] }) }),
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "User id" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Username" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Login type" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Verification Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Created Time" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: userData.data.map((user) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: user.id }),
        /* @__PURE__ */ jsxs(TableCell, { children: [
          "@",
          user.username
        ] }),
        /* @__PURE__ */ jsx(TableCell, { children: user.email }),
        /* @__PURE__ */ jsx(TableCell, { children: user.provider_method }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: " w-24", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-0.5", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex size-4 items-center justify-center", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `absolute inline-flex size-2 animate-ping rounded-full ${statusColorChangeFn(
                  user.verified_status
                )} opacity-75`
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `relative inline-flex items-center justify-center size-2 p-1 rounded-full ${statusColorChangeFn(
                  user.verified_status
                )} text-white`
              }
            )
          ] }),
          /* @__PURE__ */ jsx("span", { children: user.verified_status })
        ] }) }) }),
        /* @__PURE__ */ jsx(TableCell, { children: formatDate(user.created_at) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(MoreHorizontalIcon, {}) }) })
      ] }, user.id)) })
    ] }) })
  ] }) });
}
export {
  AdminAllUser as default
};
