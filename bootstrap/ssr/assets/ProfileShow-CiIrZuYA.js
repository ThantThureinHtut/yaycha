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
import { ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import "./badge-DxHmjrsV.js";
import "class-variance-authority";
import "./alert-dialog-B8EfxA5Z.js";
import "@radix-ui/react-alert-dialog";
import "nprogress";
import "./usePostInteractions-sCa8Rnqa.js";
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
function AccountInformation({
  posts: initialPosts,
  followingUser = null
}) {
  const [posts, setPosts] = useState(initialPosts);
  const { auth } = usePage().props;
  const [isFollow, setIsFollow] = useState(() => {
    return auth.user.followings.some(
      (following) => following.id === followingUser.id
    );
  });
  usePostEcho(setPosts);
  const followingMutation = useMutation({
    mutationFn: () => {
      return axios.post(route("account.follow.store", followingUser.id));
    },
    onMutate: () => {
      setIsFollow((prev) => !prev);
    }
  });
  const followSubmitHandler = () => {
    followingUser.followers_count = isFollow ? followingUser.followers_count - 1 : followingUser.followers_count + 1;
    followingMutation.mutate();
  };
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(Header, {}) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "bg-secondary p-4 shadow-sm block sm:hidden", children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(ArrowLeft, {}) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Card, { className: "rounded-none sm:my-6 shadow-none border-none dark:bg-transparent", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center justify-between ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col  sm:flex-row sm:items-center gap-3 sm:gap-7", children: [
          /* @__PURE__ */ jsx(Avatar, { className: " w-24 h-24", children: /* @__PURE__ */ jsx(
            AvatarImage,
            {
              src: followingUser == null ? void 0 : followingUser.avatar_url
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl sm:text-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "@",
                  followingUser == null ? void 0 : followingUser.username
                ] }),
                (followingUser == null ? void 0 : followingUser.bluemark_boolean) && /* @__PURE__ */ jsx(BlueMark, {})
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: isFollow ? "outline" : "default",
                  onClick: followSubmitHandler,
                  children: isFollow ? "Unfollow" : "Follow"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-sm sm:text-md", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  followingUser.followers_count || 0,
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
                  (followingUser == null ? void 0 : followingUser.followings_count) || 0,
                  " ",
                  "followings"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { children: followingUser == null ? void 0 : followingUser.bio })
            ] }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(Separator, { className: "mb-8" }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { children: [
            followingUser == null ? void 0 : followingUser.name,
            "'s Posts"
          ] }),
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
