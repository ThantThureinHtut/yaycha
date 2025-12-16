import { jsx, jsxs } from "react/jsx-runtime";
import { B as Badge } from "./badge-DxHmjrsV.js";
import { u as useSearchFilter, U as UserSearchBar, T as Table, a as TableCaption, P as PaginationBar, b as TableHeader, c as TableRow, d as TableHead, e as TableBody, f as TableCell } from "./UserSearchBar-COhib427.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-cwtjHFXb.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CzhD-hP3.js";
import { f as formatDate } from "./formatDate-D-MiTQQl.js";
import { A as AdminLayout } from "./AdminLayout-Cye9rADK.js";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { B as Button } from "./input-DS2-RFXY.js";
import { S as Separator } from "./separator-C8hBBIqD.js";
import "class-variance-authority";
import "lucide-react";
import "./input-group-rYvaTNbT.js";
import "react-textarea-autosize";
import "@radix-ui/react-dialog";
import "@radix-ui/react-select";
import "date-fns";
import "@radix-ui/react-slot";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
function AdminVerifications({ users, filters = null }) {
  const [select, setSelect] = useState();
  const { search, setSearch, filter, setFilter } = useSearchFilter(
    "admin.verifications",
    filters,
    "users"
  );
  const statusChangeSubmitHandler = (e, user_id) => {
    router.post(
      route("account.bluemark.verified.update"),
      {
        status: e,
        user_id
      },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true
      }
    );
  };
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
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#Verification" }),
    /* @__PURE__ */ jsx(
      UserSearchBar,
      {
        search,
        setSearch,
        filter,
        setFilter,
        pageName: "verifications"
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableCaption, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h1", { children: "A list of Users." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          PaginationBar,
          {
            links: users.links,
            search,
            filter
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "User id" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Username" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Login type" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Verification Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Created Time" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Check" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: users.data.map((user) => {
        if (user.verified_status != "unverified") {
          return /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: user.id }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              "@",
              user.username
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: user.email }),
            /* @__PURE__ */ jsx(TableCell, { children: user.provider_method }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: " w-24",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-0.5", children: [
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
                ] })
              }
            ) }),
            /* @__PURE__ */ jsx(TableCell, { children: formatDate(user.created_at) }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Dialog, { children: [
              /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Check" }) }),
              /* @__PURE__ */ jsx(DialogContent, { className: "min-h-screen h-full overflow-auto custom-scrollbar", children: /* @__PURE__ */ jsxs(DialogHeader, { className: "my-4", children: [
                /* @__PURE__ */ jsx(DialogTitle, { className: "mb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-blue-500 font-bold", children: /* @__PURE__ */ jsxs("span", { children: [
                    "@",
                    user.username
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { children: formatDate(
                    user.created_at
                  ) })
                ] }) }),
                /* @__PURE__ */ jsx(Separator, {}),
                /* @__PURE__ */ jsx(
                  DialogDescription,
                  {
                    asChild: true,
                    children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 bg-yellow-100 border border-yellow-400 p-2 rounded ", children: [
                      /* @__PURE__ */ jsx("span", { children: "⚠️ Admin Warning" }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        " ",
                        "You are reviewing sensitive user identity information (Government ID, Selfie ID, Date of Birth)."
                      ] }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        " ",
                        "Please check carefully and make sure all details are clear, valid, and belong to the same person before approving."
                      ] }),
                      /* @__PURE__ */ jsx("span", { children: "Incorrect approval may cause security or legal issues." })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 ", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold underline", children: "Government Id" }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: user.verifiedacountinfo.government_image ? `/storage/${user.verifiedacountinfo.government_image}` : "https://placehold.co/600x400",
                        alt: "",
                        className: "border border-black w-full object-cover"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold underline", children: "Salfie Id" }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: user.verifiedacountinfo.selfie_image ? `/storage/${user.verifiedacountinfo.selfie_image}` : "https://placehold.co/600x400",
                        alt: "",
                        className: "border border-black w-full object-cover"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(
              Select,
              {
                defaultValue: user.verified_status,
                onValueChange: (e) => statusChangeSubmitHandler(
                  e,
                  user.id
                ),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[100px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Action" }) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "pending" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "success", children: "success" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "rejected", children: "rejected" })
                  ] })
                ]
              }
            ) }) })
          ] }, user.id);
        }
      }) })
    ] }) })
  ] }) });
}
export {
  AdminVerifications as default
};
