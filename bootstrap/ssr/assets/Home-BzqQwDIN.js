import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "@inertiajs/react";
import { Toaster } from "react-hot-toast";
import { H as Header } from "./Header-4WNhlEWS.js";
import "./input-group-rYvaTNbT.js";
import "./dialog-cwtjHFXb.js";
import "./alert-dialog-B8EfxA5Z.js";
import "./input-DS2-RFXY.js";
import "./label-BKXq-SpB.js";
import "./avatar-Ce7QGdrq.js";
import "./separator-C8hBBIqD.js";
import "./badge-DxHmjrsV.js";
import "sonner";
import "nprogress";
import "./PostCreate-Ce7qLEaA.js";
import "./alert-y9KJTqyC.js";
import "../app.js";
import "next-themes";
import { B as Blog } from "./Blog-DhzGPmYD.js";
import { u as usePostEcho } from "./usePostEcho-Dk3NqFCD.js";
import { P as PostCreateBar } from "./PostCreateBar-BOnOVVSP.js";
import "vaul";
import "@radix-ui/react-accordion";
import "lucide-react";
import "@radix-ui/react-radio-group";
import "./card-CYRifSsD.js";
import "@radix-ui/react-switch";
import "./SearchBox-d9iEQKJG.js";
import "./item-Bb6BQ4G4.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react-textarea-autosize";
import "@radix-ui/react-dialog";
import "@radix-ui/react-alert-dialog";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-avatar";
import "@radix-ui/react-separator";
import "@tanstack/react-query";
import "axios";
import "laravel-echo";
import "pusher-js";
import "react-dom/client";
import "./usePostInteractions-sCa8Rnqa.js";
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { children }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", reverseOrder: false })
  ] });
}
function Home({ posts: initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  usePostEcho(setPosts);
  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);
  return /* @__PURE__ */ jsx(GuestLayout, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PostCreateBar, { setPosts }),
    /* @__PURE__ */ jsx("div", { children: posts.map((post) => /* @__PURE__ */ jsx(Blog, { post }, post.id)) })
  ] }) });
}
export {
  Home as default
};
