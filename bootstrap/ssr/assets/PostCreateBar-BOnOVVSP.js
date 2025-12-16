import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputGroup, b as InputGroupInput } from "./input-group-rYvaTNbT.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-cwtjHFXb.js";
import "./alert-dialog-B8EfxA5Z.js";
import "./input-DS2-RFXY.js";
import "./label-BKXq-SpB.js";
import { usePage, Link } from "@inertiajs/react";
import { FilePlus } from "lucide-react";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
import { useState, useEffect } from "react";
import { S as Separator } from "./separator-C8hBBIqD.js";
import "./badge-DxHmjrsV.js";
import "sonner";
import "nprogress";
import { P as PostCreate } from "./PostCreate-Ce7qLEaA.js";
import { u as useTheme } from "../app.js";
function PostCreateBar({ setPosts }) {
  var _a;
  const [isMobile, setMobile] = useState(false);
  const { auth } = usePage().props;
  const { isAi, isOpen, setOpen } = useTheme();
  useEffect(() => {
    const checkSize = () => {
      setMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 lg:w-1/2 container mx-auto my-4 px-4 sm:px-0", children: [
    /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarImage, { src: (_a = auth.user) == null ? void 0 : _a.avatar_url }) }),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: isMobile ? route("post.dashboard") : "/",
        className: isMobile ? "block w-full" : "hidden",
        children: /* @__PURE__ */ jsx(InputGroup, { children: /* @__PURE__ */ jsx(InputGroupInput, { placeholder: "What's on your mind?..." }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block w-full", children: /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: isOpen,
        onOpenChange: (event) => {
          if (event) {
            setOpen(true);
          } else {
            setOpen(false);
          }
        },
        children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(InputGroup, { children: /* @__PURE__ */ jsx(InputGroupInput, { placeholder: "What's on your mind?..." }) }),
            /* @__PURE__ */ jsx(FilePlus, { className: "bg-primary w-10 h-10 p-2 rounded-md" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            DialogContent,
            {
              onInteractOutside: (e) => {
                if (isAi) {
                  e.preventDefault();
                }
              },
              onEscapeKeyDown: (e) => {
                if (isAi) {
                  e.preventDefault();
                }
              },
              children: [
                /* @__PURE__ */ jsxs(DialogHeader, { className: "flex justify-center items-center text-xl", children: [
                  /* @__PURE__ */ jsx(DialogTitle, { className: "mb-2", children: "Create Post" }),
                  /* @__PURE__ */ jsx(DialogDescription, {}),
                  /* @__PURE__ */ jsx(Separator, {})
                ] }),
                /* @__PURE__ */ jsx(PostCreate, { setPosts })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        href: isMobile ? route("post.dashboard") : "/",
        className: isMobile ? "block" : "hidden",
        children: [
          " ",
          /* @__PURE__ */ jsx(FilePlus, { className: "bg-primary w-10 h-10 p-2 rounded-md" }),
          " "
        ]
      }
    )
  ] });
}
export {
  PostCreateBar as P
};
