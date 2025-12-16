import { jsxs, jsx } from "react/jsx-runtime";
import { B as Blog } from "./Blog-DhzGPmYD.js";
import { H as Header } from "./Header-4WNhlEWS.js";
import "@inertiajs/react";
import "./card-CYRifSsD.js";
import "react";
import "./input-DS2-RFXY.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "./badge-DxHmjrsV.js";
import "./alert-dialog-B8EfxA5Z.js";
import "@radix-ui/react-alert-dialog";
import "./separator-C8hBBIqD.js";
import "@radix-ui/react-separator";
import "./avatar-Ce7QGdrq.js";
import "@radix-ui/react-avatar";
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
function LikedPost({ posts }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "p-0 md:p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-center gap-4 mx-auto lg:w-1/2 px-6 py-4 md:px-0 md:py-0", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Your Liked Posts" }),
        /* @__PURE__ */ jsxs("p", { children: [
          posts.length < 1 ? `${posts.length} Post` : `${posts.length} Posts`,
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: posts.map((post) => /* @__PURE__ */ jsx(Blog, { post }, post.id)) })
    ] })
  ] });
}
export {
  LikedPost as default
};
