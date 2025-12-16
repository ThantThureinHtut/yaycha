import { jsxs, jsx } from "react/jsx-runtime";
import { a as BlueMark, B as Blog } from "./Blog-DhzGPmYD.js";
import { H as Header } from "./Header-4WNhlEWS.js";
import { u as usePostEcho } from "./usePostEcho-Dk3NqFCD.js";
import { P as PostCreateBar } from "./PostCreateBar-BOnOVVSP.js";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
import { B as Button } from "./input-DS2-RFXY.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-CYRifSsD.js";
import { S as Separator } from "./separator-C8hBBIqD.js";
import { usePage, Link } from "@inertiajs/react";
import { ArrowLeft, Edit } from "lucide-react";
import { useState } from "react";
import "./badge-DxHmjrsV.js";
import "class-variance-authority";
import "./alert-dialog-B8EfxA5Z.js";
import "@radix-ui/react-alert-dialog";
import "nprogress";
import "./usePostInteractions-sCa8Rnqa.js";
import "@tanstack/react-query";
import "vaul";
import "@radix-ui/react-accordion";
import "./label-BKXq-SpB.js";
import "@radix-ui/react-label";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-switch";
import "../app.js";
import "axios";
import "laravel-echo";
import "pusher-js";
import "react-dom/client";
import "./SearchBox-d9iEQKJG.js";
import "./input-group-rYvaTNbT.js";
import "react-textarea-autosize";
import "./item-Bb6BQ4G4.js";
import "@radix-ui/react-slot";
import "react-hot-toast";
import "./dialog-cwtjHFXb.js";
import "@radix-ui/react-dialog";
import "sonner";
import "./PostCreate-Ce7qLEaA.js";
import "./alert-y9KJTqyC.js";
import "@radix-ui/react-avatar";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
function AccountInformation({ posts: initialPosts }) {
  var _a, _b, _c, _d, _e;
  const [posts, setPosts] = useState(initialPosts);
  const { auth } = usePage().props;
  const [user, setUser] = useState(auth.user);
  usePostEcho(setPosts, user.id);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(Header, {}) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "bg-secondary p-4 shadow-sm block sm:hidden", children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(ArrowLeft, {}) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Card, { className: "rounded-none sm:my-6 shadow-none border-none dark:bg-transparent", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center justify-between ", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col  sm:flex-row sm:items-center gap-3 sm:gap-7", children: [
            /* @__PURE__ */ jsx(Avatar, { className: " w-24 h-24", children: /* @__PURE__ */ jsx(
              AvatarImage,
              {
                src: (_a = auth.user) == null ? void 0 : _a.avatar_url
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl sm:text-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "@",
                  (_b = auth.user) == null ? void 0 : _b.username
                ] }),
                ((_c = auth.user) == null ? void 0 : _c.bluemark_boolean) && /* @__PURE__ */ jsx(BlueMark, {})
              ] }) }),
              /* @__PURE__ */ jsx(CardDescription, { className: "text-sm sm:text-md", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    user.followers_count || 0,
                    " ",
                    "followers"
                  ] }),
                  /* @__PURE__ */ jsx(
                    Separator,
                    {
                      orientation: "vertical",
                      className: "h-4"
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { children: [
                    ((_d = auth.user) == null ? void 0 : _d.followings_count) || 0,
                    " ",
                    "followings"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: (_e = auth.user) == null ? void 0 : _e.bio })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { href: route("account.edit"), children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Edit, {}),
            "Edit profile"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(Separator, { className: "mb-8" }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-0 md:p-6", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "pl-4 md:pl-0", children: "Your Posts" }),
          /* @__PURE__ */ jsx("div", { className: "rounded mt-4 mx-auto", children: /* @__PURE__ */ jsx(PostCreateBar, {}) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: posts.map((post) => /* @__PURE__ */ jsx(Blog, { post }, post.id)) })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, {})
      ] }) })
    ] })
  ] });
}
export {
  AccountInformation as default
};
