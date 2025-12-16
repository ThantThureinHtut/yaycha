import { jsx, jsxs } from "react/jsx-runtime";
import { I as Item, a as ItemContent, b as ItemTitle, c as ItemDescription } from "./item-Bb6BQ4G4.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CzhD-hP3.js";
import { A as AdminLayout } from "./AdminLayout-Cye9rADK.js";
import { u as useTheme } from "../app.js";
import { Sun, Moon, Settings } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./input-DS2-RFXY.js";
import "clsx";
import "tailwind-merge";
import "./separator-C8hBBIqD.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-select";
import "@inertiajs/react";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "axios";
import "laravel-echo";
import "pusher-js";
import "react-dom/client";
import "@tanstack/react-query";
function AdminSettings() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#Settings" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Item, { variant: "outline", children: /* @__PURE__ */ jsx(ItemContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(ItemTitle, { children: "Dark Mode" }),
        /* @__PURE__ */ jsx(ItemDescription, { children: "Dark | Light | System" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Select, { defaultValue: theme, onValueChange: setTheme, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[120px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "System" }) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "light", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Sun, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "Light" })
          ] }) }),
          /* @__PURE__ */ jsx(SelectItem, { value: "dark", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Moon, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "Dark" })
          ] }) }),
          /* @__PURE__ */ jsx(SelectItem, { value: "system", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Settings, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "System" })
          ] }) })
        ] })
      ] }) })
    ] }) }) }) })
  ] }) });
}
export {
  AdminSettings as default
};
