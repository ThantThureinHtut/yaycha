import { jsxs, jsx } from "react/jsx-runtime";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
import { useState, useEffect } from "react";
import { f as formatDate } from "./formatDate-D-MiTQQl.js";
import { B as Button } from "./input-DS2-RFXY.js";
import "./card-CYRifSsD.js";
import { B as Badge } from "./badge-DxHmjrsV.js";
import { I as InputGroup, b as InputGroupInput } from "./input-group-rYvaTNbT.js";
import "./separator-C8hBBIqD.js";
import { usePage, Link } from "@inertiajs/react";
import { ChevronLeft, Eye, Heart, MessageSquare, X, Send } from "lucide-react";
import axios from "axios";
import { u as usePostInteractions } from "./usePostInteractions-sCa8Rnqa.js";
import { u as usePostEcho } from "./usePostEcho-Dk3NqFCD.js";
import "@radix-ui/react-avatar";
import "date-fns";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "react-textarea-autosize";
import "@radix-ui/react-separator";
import "@tanstack/react-query";
import "react-hot-toast";
function Comments({ comment, repyIdSubmitHandler, depth = 0 }) {
  var _a, _b;
  const hasReplies = comment.replies && comment.replies.length > 0;
  const MAX_LIMIT = 2;
  return /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 ", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Avatar, { className: "size-9 ", children: /* @__PURE__ */ jsx(AvatarImage, { src: (_a = comment == null ? void 0 : comment.user) == null ? void 0 : _a.avatar_url }) }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-secondary px-3 py-2 rounded-2xl", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-sm", children: (_b = comment == null ? void 0 : comment.user) == null ? void 0 : _b.username }),
          comment.parent && depth > 2 ? /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsxs("b", { className: "text-blue-500", children: [
              "@",
              comment.parent.user.username
            ] }),
            " ",
            comment == null ? void 0 : comment.comment
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm", children: comment == null ? void 0 : comment.comment })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs my-0.5 mx-4", children: [
          /* @__PURE__ */ jsx("span", { children: formatDate(comment.created_at) }),
          /* @__PURE__ */ jsx(
            "span",
            {
              onClick: () => repyIdSubmitHandler({
                post_id: comment.post_id,
                parent_id: comment.id,
                replyName: comment.user.username,
                comments: comment
              }),
              children: "reply"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: depth < MAX_LIMIT ? "mx-10" : "mx-0", children: hasReplies && comment.replies.map((comment2) => (
      // Do this rerun the coments again
      /* @__PURE__ */ jsx(
        Comments,
        {
          comment: comment2,
          repyIdSubmitHandler,
          depth: depth + 1
        },
        comment2.id
      )
    )) })
  ] }, comment.id);
}
function addReplyToTree(nodes, parentId, comment) {
  return nodes.map((node) => {
    if (node.id == parentId) {
      return {
        ...node,
        replies: [...node.replies || [], comment]
      };
    }
    if (node.replies && node.replies.length > 0) {
      return {
        ...node,
        replies: addReplyToTree(node.replies, parentId, comment)
      };
    }
    return node;
  });
}
function CommentPage({ post: initialPost, comments }) {
  const { auth } = usePage().props;
  const [post, setPost] = useState(initialPost);
  const [isPressed, setPressed] = useState(
    post.likes.some(
      (like) => like.post_id === post.id && like.like_id === auth.user.id
    )
  );
  const { viewIn, likeIn } = usePostInteractions(
    post,
    auth,
    isPressed,
    setPressed
  );
  const [localComments, setLocalComments] = useState(comments);
  const [reply, setReply] = useState({
    post_id: post.id,
    parent_id: null,
    replyName: null,
    comments: null
  });
  const [comment, setComment] = useState("");
  useEffect(() => {
    setLocalComments(comments);
  }, [comments]);
  const repyIdSubmitHandler = (id) => {
    setReply(id);
  };
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
  const commentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      const temp_reply = {
        id: Math.random(),
        // Temporary ID (so React keys don't break)
        post_id: reply.post_id,
        parent_id: reply.parent_id,
        // Important: keep track of who we are replying to
        comment,
        parent: reply.comments && {
          user: {
            id: reply.comments.id,
            username: reply.comments.user.username
          }
        },
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        // Current time
        user: {
          username: auth.user.username,
          avatar_url: auth.user.avatar_url
        },
        replies: []
      };
      if (reply.parent_id) {
        setLocalComments((prevComment) => {
          return addReplyToTree(
            prevComment,
            reply.parent_id,
            temp_reply
          );
        });
      } else {
        setLocalComments([...localComments, temp_reply]);
      }
      axios.post(
        route("post.comments.store"),
        {
          post_id: reply.post_id,
          parent_id: reply.parent_id,
          comment
        },
        {
          preserveScroll: true
        }
      );
      setReply({
        post_id: post.id,
        parent_id: null,
        replyName: null
      });
      setComment("");
    }
  };
  usePostEcho(setPost);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto md:w-full lg:w-1/2 px-3 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 bg-background rounded-b z-50 ", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx(Link, { href: "/home", className: "text-primary", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 30 }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarImage, { src: post.user.avatar_url }) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { children: post.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-500", children: [
            "written by",
            " ",
            /* @__PURE__ */ jsx("b", { className: "text-blue-500", children: post.user.username })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ", children: [
        /* @__PURE__ */ jsx("span", { children: post.views_count_formatted }),
        /* @__PURE__ */ jsx(Eye, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-1  text-justify whitespace-pre-wrap", onClick: viewSumbitHandler, children: post.description }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between m-2", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-1 text-gray-500",
          onClick: likeSubmitHandler,
          children: [
            /* @__PURE__ */ jsx("span", { children: post.likes_count_formatted }),
            " ",
            /* @__PURE__ */ jsx(
              Heart,
              {
                size: 20,
                className: isPressed && "fill-red-500 stroke-red-500"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-gray-500", children: [
        /* @__PURE__ */ jsx("span", { children: post.comments_count_formatted }),
        " ",
        /* @__PURE__ */ jsx(MessageSquare, { size: 20 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 z-10", children: [
      /* @__PURE__ */ jsx("h1", { children: "comments" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: localComments == null ? void 0 : localComments.map((comment2) => /* @__PURE__ */ jsx(
        Comments,
        {
          comment: comment2,
          repyIdSubmitHandler,
          depth: 0
        },
        comment2.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky bottom-0 bg-background p-3", children: [
      reply.replyName && /* @__PURE__ */ jsx(Badge, { className: "my-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1", children: [
        /* @__PURE__ */ jsx(
          X,
          {
            size: 15,
            onClick: () => setReply({
              post_id: 1,
              parent_id: null,
              replyName: null
            })
          }
        ),
        /* @__PURE__ */ jsx("span", { children: reply.replyName })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: commentSubmit,
          className: "flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsx(InputGroup, { children: /* @__PURE__ */ jsx(
              InputGroupInput,
              {
                placeholder: "Comments",
                value: comment,
                onChange: (e) => setComment(e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                disabled: comment ? false : true,
                type: "submit",
                className: "flex items-center justify-center",
                children: /* @__PURE__ */ jsx(Send, { size: 20 })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  CommentPage as default
};
