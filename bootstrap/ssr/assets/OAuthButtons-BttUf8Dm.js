import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { c as cn, B as Button } from "./input-DS2-RFXY.js";
import "./label-BKXq-SpB.js";
import { usePage, Link } from "@inertiajs/react";
import { Github } from "lucide-react";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
function AuthLayout({ children }) {
  const location = usePage().url;
  const activeTab = location.includes("/register") ? "signup" : "login";
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen overflow-auto p-4", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, className: "w-[400px]", children: [
    /* @__PURE__ */ jsx("div", { className: " flex justify-center items-center", children: /* @__PURE__ */ jsxs(TabsList, { children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "login", children: /* @__PURE__ */ jsx(Link, { href: "/login", children: "Login" }) }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", children: /* @__PURE__ */ jsx(Link, { href: "/register", children: "Signup" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children })
  ] }) });
}
const Google = "/build/assets/googe-BUWGlcPK.svg";
function GoogleIcon() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: Google, alt: "Logo", className: " size-6" }) });
}
function OAuthButtons() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mt-4", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "w-full",
        onClick: () => window.location.href = "/auth/github/redirect",
        children: /* @__PURE__ */ jsx(Github, { size: 60 })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "w-full",
        onClick: () => window.location.href = "/auth/google/redirect",
        children: /* @__PURE__ */ jsx(GoogleIcon, {})
      }
    )
  ] });
}
export {
  AuthLayout as A,
  OAuthButtons as O,
  TabsContent as T
};
