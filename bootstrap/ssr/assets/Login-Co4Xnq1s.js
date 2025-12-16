import { jsx, jsxs } from "react/jsx-runtime";
import { A as AuthLayout, T as TabsContent, O as OAuthButtons } from "./OAuthButtons-BttUf8Dm.js";
import { usePage, useForm } from "@inertiajs/react";
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
function Login() {
  const { errors: pageErrors } = usePage().props;
  const { data, setData, reset, post, errors } = useForm({
    email: "",
    password: ""
  });
  const loginSubmit = () => {
    post("/login", {
      onSuccess: () => reset()
    });
  };
  const emailError = errors.email || (pageErrors == null ? void 0 : pageErrors.email);
  return /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center my-4 text-primary", children: /* @__PURE__ */ jsx(Rabbit, { size: 50 }) }),
      /* @__PURE__ */ jsx(CardTitle, { children: "Login to your account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email below to login to your account" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "m@example.com",
            required: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        emailError && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: emailError })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "ml-auto inline-block text-sm underline-offset-4 hover:underline",
              children: "Forgot your password?"
            }
          )
        ] }),
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
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          onClick: loginSubmit,
          className: "w-full",
          children: "Login"
        }
      ),
      /* @__PURE__ */ jsx(OAuthButtons, {})
    ] })
  ] }) }) });
}
export {
  Login as default
};
