import { jsx, jsxs } from "react/jsx-runtime";
import { H as Header } from "./Header-4WNhlEWS.js";
import { A as Alert, a as AlertTitle, b as AlertDescription } from "./alert-y9KJTqyC.js";
import { c as cn, B as Button } from "./input-DS2-RFXY.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-CYRifSsD.js";
import * as React from "react";
import { useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, OctagonAlert } from "lucide-react";
import { I as InputGroup, b as InputGroupInput, a as InputGroupAddon } from "./input-group-rYvaTNbT.js";
import { S as Separator } from "./separator-C8hBBIqD.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { toast } from "sonner";
import "vaul";
import "@radix-ui/react-accordion";
import "./label-BKXq-SpB.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-radio-group";
import "./avatar-Ce7QGdrq.js";
import "@radix-ui/react-avatar";
import "@radix-ui/react-switch";
import "../app.js";
import "axios";
import "laravel-echo";
import "pusher-js";
import "react-dom/client";
import "@tanstack/react-query";
import "./SearchBox-d9iEQKJG.js";
import "./item-Bb6BQ4G4.js";
import "clsx";
import "tailwind-merge";
import "react-textarea-autosize";
import "@radix-ui/react-separator";
const Breadcrumb = React.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props })
);
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
function ProfileEdit() {
  var _a, _b, _c;
  const { auth } = usePage().props;
  const {
    data,
    setData,
    errors,
    post,
    recentlySuccessful,
    processing,
    isDirty
  } = useForm({
    name: (_a = auth.user) == null ? void 0 : _a.name,
    email: (_b = auth.user) == null ? void 0 : _b.email,
    password: "",
    bio: (_c = auth.user) == null ? void 0 : _c.bio
  });
  useEffect(() => {
    if (recentlySuccessful) {
      toast.success("Yaycha", {
        description: "Success! Your changes have been saved",
        variant: "success"
      });
    }
  }, [recentlySuccessful]);
  const submitHandler = (e) => {
    e.preventDefault();
    post(route("profile.edit"));
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    post(route("account.delete"));
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: submitHandler,
        className: "flex flex-col items-center justify-center overflow-auto my-4 ",
        children: /* @__PURE__ */ jsxs(Card, { className: "container rounded-none sm:rounded-lg", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "gap-2", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
              /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: route(
                    "account.dashboard"
                  ),
                  children: "Account"
                }
              ) }),
              /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
              /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Edit" })
            ] }) }) }) }),
            /* @__PURE__ */ jsxs(CardTitle, { children: [
              "Profile Edit ",
              errors.email
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  value: (data == null ? void 0 : data.bio) ?? "",
                  onChange: (e) => setData("bio", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Bio" })
            ] }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  value: data.name,
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Name" })
            ] }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  value: data.email,
                  onChange: (e) => setData("email", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Email" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing || !isDirty, children: "update" }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("form", { onSubmit: deleteHandler, className: "container mx-auto", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(OctagonAlert, {}) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(AlertTitle, { children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Delete Account" }) }),
          /* @__PURE__ */ jsx(AlertDescription, { children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Are you sure you want to delete your account? Once your account is deleted, all of your resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        errors.password && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsx(AlertTitle, { children: errors.password }) }),
        /* @__PURE__ */ jsxs(InputGroup, { children: [
          /* @__PURE__ */ jsxs(InputGroupAddon, { children: [
            auth.user.has_password ? "Enter your Current Password" : "Type 'DELETE ACCOUNT' to confirm ",
            /* @__PURE__ */ jsx(
              Separator,
              {
                orientation: "vertical",
                className: "h-5"
              }
            ),
            " "
          ] }),
          /* @__PURE__ */ jsx(
            InputGroupInput,
            {
              onChange: (e) => setData("password", e.target.value),
              placeholder: "Enter"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "destructive", children: "Delete Account" }) })
    ] }) })
  ] });
}
export {
  ProfileEdit as default
};
