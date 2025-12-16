import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-CYRifSsD.js";
import { BadgeCheckIcon, Eye, Heart, MessageSquare } from "lucide-react";
import { B as Badge } from "./badge-DxHmjrsV.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-B8EfxA5Z.js";
import "./input-DS2-RFXY.js";
import { usePage, Link } from "@inertiajs/react";
import { S as Separator } from "./separator-C8hBBIqD.js";
import { useState } from "react";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
import "nprogress";
import { u as usePostInteractions } from "./usePostInteractions-sCa8Rnqa.js";
function BlueMark() {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Badge,
      {
        variant: "secondary",
        className: "bg-blue-500 text-white dark:bg-blue-600 gap-1 p-1",
        children: /* @__PURE__ */ jsx(BadgeCheckIcon, { size: 14 })
      }
    ) }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "Verified Account" }),
          /* @__PURE__ */ jsx(BadgeCheckIcon, { className: "bg-blue-500 text-white dark:bg-blue-600 gap-1 p-1 rounded-full" })
        ] }) }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "This account has successfully completed our identity verification process. The Bluemarks badge confirms that this profile is authentic and trustworthy." })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { className: " flex gap-2 w-full", children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { className: "", children: "Cancel" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { className: " bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-700 w-full", children: /* @__PURE__ */ jsx(Link, { href: route("account.bluemark.verified.dashboard", { id: auth.user.id }), children: "verified now" }) })
      ] })
    ] })
  ] });
}
function ExpandableText({ blog, viewSumbitHandler }) {
  const isShortText = blog.description.length < 150;
  const [isExpand, setExpand] = useState(false);
  return /* @__PURE__ */ jsx("div", { children: isShortText ? /* @__PURE__ */ jsx("div", { className: "text-sm sm:text-md text-gray-700 dark:text-gray-300 text-justify", onClick: () => viewSumbitHandler(), children: blog.description }) : /* @__PURE__ */ jsx(
    "div",
    {
      className: "text-sm sm:text-md text-gray-700 dark:text-gray-300 text-justify",
      onClick: () => viewSumbitHandler(),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `whitespace-pre-wrap`,
          onClick: () => {
            const selection = window.getSelection();
            if (selection.toString().length === 0) {
              setExpand(!isExpand);
            }
          },
          children: [
            isExpand ? `${blog.description}` : ` ${blog.description.substring(
              0,
              blog.description.length * 1 / 10
            )}...`,
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 underline text-md", children: isExpand ? "Show less" : "See more" })
          ]
        }
      )
    }
  ) });
}
function Blog({ post }) {
  var _a, _b;
  const { auth } = usePage().props;
  const [isPressed, setPressed] = useState(post.likes.some((like) => like.post_id === post.id && like.like_id === auth.user.id));
  const { viewIn, likeIn } = usePostInteractions(post, auth, isPressed, setPressed);
  const viewSumbitHandler = () => {
    const currentView = post.views || [];
    const alreadyViewed = currentView.some(
      (view) => view.user_id === auth.user.id
    );
    if (alreadyViewed) return;
    viewIn.mutate();
  };
  const likeSubmitHandler = () => {
    likeIn.mutate();
    viewSumbitHandler();
  };
  return /* @__PURE__ */ jsx("div", { className: "container flex flex-col gap-8 mx-auto my-3  md:w-full lg:w-1/2", children: /* @__PURE__ */ jsxs(Card, { className: "rounded-none md:rounded-xl", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: post.user.id === auth.user.id ? /* @__PURE__ */ jsx(
          Link,
          {
            href: route("account.dashboard"),
            children: /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(
              AvatarImage,
              {
                src: (_a = post.user) == null ? void 0 : _a.avatar_url
              }
            ) })
          }
        ) : /* @__PURE__ */ jsx(
          Link,
          {
            href: route("account.show", {
              id: post.user.id
            }),
            children: /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(
              AvatarImage,
              {
                src: (_b = post.user) == null ? void 0 : _b.avatar_url
              }
            ) })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: post.title }),
          /* @__PURE__ */ jsx(CardDescription, { className: "flex justify-between", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-xs sm:text-base", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              " written by",
              " "
            ] }),
            /* @__PURE__ */ jsx("b", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "text-blue-500", children: [
              "@",
              post.user.username
            ] }) }),
            post.user.bluemark_boolean === true && /* @__PURE__ */ jsx(BlueMark, {})
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        post.views_count_formatted,
        /* @__PURE__ */ jsx(Eye, { size: 20 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "mb-4" }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
      ExpandableText,
      {
        blog: post,
        viewSumbitHandler
      }
    ) }),
    /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Card, { className: "w-full", children: /* @__PURE__ */ jsx(CardContent, { className: "p-3", children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-between items-center  w-full text-gray-500 ", children: [
      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
        post.likes_count_formatted,
        /* @__PURE__ */ jsx("div", { onClick: likeSubmitHandler, children: /* @__PURE__ */ jsx(
          Heart,
          {
            size: 20,
            className: isPressed && "fill-red-500 stroke-red-500"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("post.comments.dashboard", { id: post.id }), className: "flex items-center gap-1", children: [
        post.comments_count_formatted,
        /* @__PURE__ */ jsx(MessageSquare, { size: 20 })
      ] }) })
    ] }) }) }) })
  ] }) });
}
export {
  Blog as B,
  BlueMark as a
};
