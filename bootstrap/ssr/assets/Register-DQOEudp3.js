import { jsx, jsxs } from "react/jsx-runtime";
import { A as AuthLayout, T as TabsContent, O as OAuthButtons } from "./OAuthButtons-BttUf8Dm.js";
import { useForm } from "@inertiajs/react";
import { I as Input, B as Button } from "./input-DS2-RFXY.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-CYRifSsD.js";
import { Rabbit, AlertCircleIcon } from "lucide-react";
import { A as Alert, a as AlertTitle } from "./alert-y9KJTqyC.js";
import { L as Label } from "./label-BKXq-SpB.js";
import "react";
import "@radix-ui/react-tabs";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
function Register() {
  const { data, setData, reset, post, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const registerSubmit = () => {
    post("/register");
  };
  return /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(TabsContent, { value: "signup", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center my-4 text-primary", children: /* @__PURE__ */ jsx(Rabbit, { size: 50 }) }),
      /* @__PURE__ */ jsx(CardTitle, { children: "Signup your account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your Name , Email and Password" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "name",
            type: "test",
            placeholder: "Name",
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        errors.name && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.name })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "m@example.com",
            onChange: (e) => setData("email", e.target.value),
            required: true
          }
        ),
        errors.email && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.email })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }) }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            placeholder: "Enter your Password",
            onChange: (e) => setData("password", e.target.value),
            required: true
          }
        ),
        errors.password && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.password })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }) }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password_confirmation",
            type: "password",
            placeholder: "Confirm Password",
            onChange: (e) => setData(
              "password_confirmation",
              e.target.value
            ),
            required: true
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          onClick: registerSubmit,
          className: "w-full",
          children: "Create"
        }
      ),
      /* @__PURE__ */ jsx(OAuthButtons, {})
    ] })
  ] }) }) });
}
export {
  Register as default
};
