import { jsx, jsxs } from "react/jsx-runtime";
import { I as InputGroup, b as InputGroupInput, c as InputGroupButton, d as InputGroupTextarea } from "./input-group-rYvaTNbT.js";
import { A as Alert, a as AlertTitle, b as AlertDescription } from "./alert-y9KJTqyC.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-B8EfxA5Z.js";
import { B as Button } from "./input-DS2-RFXY.js";
import "./label-BKXq-SpB.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { ArrowLeft, Earth, AlertCircleIcon, Brain, BadgeCheck } from "lucide-react";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
import { useState, useEffect } from "react";
import "./separator-C8hBBIqD.js";
import { B as Badge } from "./badge-DxHmjrsV.js";
import { toast } from "sonner";
import { u as useTheme } from "../app.js";
import { useMutation } from "@tanstack/react-query";
import NProgress from "nprogress";
function useAiGengerateTitle(setAi, setAiErrorMessage, setData, setError) {
  return useMutation({
    mutationFn: async (bodyText) => {
      if (!bodyText || bodyText.length < 5) {
        setAiErrorMessage("Please write content first!");
      } else {
        NProgress.configure({ showSpinner: false });
        NProgress.start();
        setAiErrorMessage("");
        setError("body", "");
        setData("title", "Title is generating");
        setAi(true);
        const response = await axios.post(
          route("post.generate-title"),
          {
            body: bodyText
          }
        );
        return response.data;
      }
    },
    onSuccess: (e) => {
      NProgress.done();
      if (e) {
        setAi(false);
        setData("title", e.title);
      }
    },
    onError: (e) => {
      console.log(e);
    }
  });
}
function PostCreate({ setPosts = null }) {
  var _a, _b, _c;
  const { auth } = usePage().props;
  const { setAi, setOpen } = useTheme();
  const [isMobile, setMobile] = useState(false);
  const blueMarkCheck = ((_a = auth.user) == null ? void 0 : _a.bluemark_boolean) === true;
  const [isAiErrorMessage, setAiErrorMessage] = useState("");
  const {
    data,
    setData,
    errors,
    setError,
    post,
    processing,
    isPending,
    progress,
    reset
  } = useForm({ title: "", body: "" });
  useEffect(() => {
    const checkSize = () => {
      setMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  const aiMutation = useAiGengerateTitle(
    setAi,
    setAiErrorMessage,
    setData,
    setError
  );
  const createPostHandler = (e) => {
    e.preventDefault();
    if (!isMobile) {
      const fakeData = {
        id: Date.now(),
        // this fake id for a while until real data is reach from databse
        title: data.title,
        description: data.body,
        user_id: auth.user.id,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        // this fake id for a while until real data is reach from databse
        user: {
          id: auth.user.id,
          username: auth.user.username,
          email: auth.user.email,
          bluemark: auth.user.bluemark,
          avatar_url: auth.user.avatar_url
        },
        likes: [],
        comments: [],
        views: [],
        likes_count_formatted: "0",
        // Blog.jsx needs this!
        views_count_formatted: "0",
        // Blog.jsx needs this!
        comments_count_formatted: "0"
      };
      setPosts(
        (prevPost) => [
          fakeData,
          ...prevPost
        ]
      );
    }
    post(route("post.create"), {
      onSuccess: () => {
        reset();
        if (!isMobile) {
          setOpen(false);
        }
        toast("Post created successfully!");
      }
    });
  };
  return /* @__PURE__ */ jsx(
    "form",
    {
      onSubmit: createPostHandler,
      className: `sm:max-w-xl w-full flex items-center justify-center gap-2 ${aiMutation.isPending ? "[&>button]:hidden cursor-wait" : ""}`,
      children: /* @__PURE__ */ jsxs("div", { className: "grid flex-1 gap-2", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/home", className: "md:hidden", children: /* @__PURE__ */ jsx(ArrowLeft, {}) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarImage, { src: (_b = auth.user) == null ? void 0 : _b.avatar_url }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: " font-bold", children: (_c = auth.user) == null ? void 0 : _c.username }),
              /* @__PURE__ */ jsxs(Badge, { className: "gap-1 mt-1", children: [
                /* @__PURE__ */ jsx(Earth, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "public" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              disabled: aiMutation.isPending || (data.body && data.title ? false : true),
              className: isMobile ? "" : "hidden",
              children: "Post"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-red-500", children: isAiErrorMessage }),
        !errors.title && !errors.body || (errors.title || errors.body) && /* @__PURE__ */ jsxs(Alert, { variant: "destructive", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, {}),
          /* @__PURE__ */ jsx(AlertTitle, { children: "Unable to process Data." }),
          /* @__PURE__ */ jsx(AlertDescription, { children: /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc text-sm", children: [
            /* @__PURE__ */ jsx(
              "li",
              {
                className: errors.title ? "" : "hidden",
                children: errors.title
              }
            ),
            /* @__PURE__ */ jsx("li", { className: errors.body ? "" : "hidden", children: errors.body })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(InputGroup, { children: [
          /* @__PURE__ */ jsx(
            InputGroupInput,
            {
              value: data.title,
              onChange: (e) => setData("title", e.target.value),
              placeholder: "Title",
              disabled: aiMutation.isPending
            }
          ),
          blueMarkCheck ? /* @__PURE__ */ jsx(
            InputGroupButton,
            {
              className: aiMutation.isPending && " cursor-wait",
              onClick: () => aiMutation.mutate(data.body),
              children: aiMutation.isPending ? /* @__PURE__ */ jsx(
                "div",
                {
                  className: "\n                                    font-extrabold\n                                    text-transparent\n                                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500\n                                    animate-gradient\n                                    drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]\n                                                            ",
                  children: "AI Magic ✨"
                }
              ) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                " ",
                "AI ",
                /* @__PURE__ */ jsx(Brain, {})
              ] })
            }
          ) : /* @__PURE__ */ jsx(InputGroupButton, { asChild: true, children: /* @__PURE__ */ jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(InputGroupButton, { children: [
              "AI ",
              /* @__PURE__ */ jsx(Brain, {})
            ] }) }) }),
            /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsx(AlertDialogTitle, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-blue-500", children: [
                  /* @__PURE__ */ jsx(BadgeCheck, {}),
                  /* @__PURE__ */ jsx("span", { children: "Warning" })
                ] }) }),
                /* @__PURE__ */ jsx(AlertDialogDescription, { className: "text-md", children: "This AI feature is exclusive to BlueMark verified users" })
              ] }),
              /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
                /* @__PURE__ */ jsx(AlertDialogAction, { className: "bg-blue-500 text-white hover:bg-blue-600", children: /* @__PURE__ */ jsx(Link, { href: route("account.bluemark.verified.dashboard", { id: auth.user.id }), children: "verified now" }) })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(InputGroup, { className: " !border-none !shadow-none !ring-0 has-[textarea]:!ring-0 dark:!border-none dark:!ring-0 dark:!bg-transparent ", children: /* @__PURE__ */ jsx(
          InputGroupTextarea,
          {
            onChange: (e) => setData("body", e.target.value),
            name: "textarea",
            disabled: aiMutation.isPending,
            placeholder: `What's on your mind, ${auth.user.name}`
          }
        ) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            className: isMobile ? "hidden" : "",
            disabled: data.body && data.title ? false : true,
            children: "Post"
          }
        )
      ] })
    }
  );
}
export {
  PostCreate as P
};
