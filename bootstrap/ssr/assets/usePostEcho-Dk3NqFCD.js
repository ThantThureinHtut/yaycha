import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { f as formatNumber } from "./usePostInteractions-sCa8Rnqa.js";
function usePostEcho(setPosts, filterUserId = null) {
  const { auth } = usePage().props;
  let channel = null;
  let followChannel = null;
  let likeChannel = null;
  let channelName = null;
  let followChannelName = null;
  let likeChannelName = null;
  let statusChannel = null;
  let statusChannelName = null;
  useEffect(() => {
    if (filterUserId) {
      channelName = `user.${filterUserId}`;
      followChannelName = `follower.${filterUserId}`;
      likeChannelName = `like.${filterUserId}`;
      statusChannelName = `verifiedStatus.${filterUserId}`;
      channel = window.Echo.private(channelName);
      followChannel = window.Echo.private(followChannelName);
      likeChannel = window.Echo.private(likeChannelName);
      statusChannel = window.Echo.private(statusChannelName);
    } else {
      channelName = "feed";
      followChannelName = `follower.${auth.user.id}`;
      likeChannelName = `like.${auth.user.id}`;
      statusChannelName = `verifiedStatus.${auth.user.id}`;
      channel = window.Echo.channel(channelName);
      followChannel = window.Echo.private(followChannelName);
      likeChannel = window.Echo.private(likeChannelName);
      statusChannel = window.Echo.private(statusChannelName);
    }
    channel.listen("PostCreatedEvent", (e) => {
      setPosts((prevPosts) => {
        const alreadyExists = prevPosts.some(
          (post) => post.id === e.post.id
        );
        if (alreadyExists) {
          return prevPosts;
        }
        return [e.post, ...prevPosts];
      });
    });
    channel.listen("PostViewEvent", (e) => {
      setPosts((prevPosts) => {
        if (prevPosts.length >= 1) {
          return prevPosts.map((post) => {
            if (post.id == e.view.post_id) {
              const currentView = post.views || [];
              const alreadyViewed = currentView.some(
                (viewItem) => viewItem.user_id === e.view.user_id
              );
              if (!alreadyViewed) {
                return {
                  ...post,
                  views: [...post.views, e.view],
                  views_count: e.view_count,
                  views_count_formatted: formatNumber(
                    e.view_count
                  )
                };
              } else {
                return post;
              }
            }
            return post;
          });
        } else {
          const currentView = prevPosts.views || [];
          const alreadyViewed = currentView.some(
            (viewItem) => viewItem.user_id === e.view.user_id
          );
          if (!alreadyViewed) {
            return {
              ...prevPosts,
              views: [...prevPosts.views, e.view],
              views_count: e.view_count,
              views_count_formatted: formatNumber(e.view_count)
            };
          } else {
            return prevPosts;
          }
        }
      });
    });
    channel.listen("PostLikeEvent", (e) => {
      setPosts((prevPost) => {
        if (prevPost.length >= 1) {
          return prevPost.map((post) => {
            if (post.id === e.post_id) {
              return {
                ...post,
                likes_count: e.likes_count,
                likes_count_formatted: formatNumber(
                  e.likes_count
                )
              };
            }
            return post;
          });
        } else {
          return {
            ...prevPost,
            likes_count: e.likes_count,
            likes_count_formatted: formatNumber(e.likes_count)
          };
        }
      });
    });
    likeChannel.listen("PostLikePrivateNotification", (e) => {
      toast.custom((t) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${t.visible ? "animate-toast-enter" : "animate-toast-leave"} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 w-0 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 pt-0.5", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-10 w-10 rounded-full",
                  src: e.avatar_url,
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "ml-3 flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-md font-bold text-primary", children: "Yaycha" }),
                /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-800", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-blue-500 font-bold", children: [
                    "@",
                    e.username
                  ] }),
                  " is liked your post!!"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "flex border-l border-gray-200", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toast.dismiss(t.id),
                className: "w-full border border-transparent rounded-none rounded-r-lg py-2 px-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary",
                children: "Close"
              }
            ) })
          ]
        }
      ));
    });
    followChannel.listen("FollowPrivateNotification", (e) => {
      toast.custom((t) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${t.visible ? "animate-toast-enter" : "animate-toast-leave"} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 w-0 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 pt-0.5", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-10 w-10 rounded-full",
                  src: e.avatar_url,
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "ml-3 flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-md font-bold text-primary", children: "Yaycha" }),
                /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-800", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-blue-500 font-bold", children: [
                    "@",
                    e.username
                  ] }),
                  " is following you!!"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "flex border-l border-gray-200", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toast.dismiss(t.id),
                className: "w-full border border-transparent rounded-none rounded-r-lg py-2 px-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary",
                children: "Close"
              }
            ) })
          ]
        }
      ));
    });
    statusChannel.listen("VerifiedStatusPrivateNotification", (e) => {
      const iconCheck = () => {
        if (e.verifiedStatus.status == "success") {
          return "👍";
        } else if (e.verifiedStatus.status == "rejected") {
          return "🖕";
        }
      };
      const themeChangeFn = () => {
        const mediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (localStorage.getItem("theme") == "system") {
          return mediaQuery;
        } else if (localStorage.getItem("theme") == "dark") {
          return true;
        } else if (localStorage.getItem("theme") == "light") {
          return false;
        }
      };
      toast(`Your verification is ${e.verifiedStatus.status}`, {
        icon: iconCheck(),
        style: {
          borderRadius: "10px",
          background: themeChangeFn() ? "#333" : "#fff",
          color: themeChangeFn() ? "#fff" : "#333",
          border: "1px solid",
          // Define thickness and type
          borderColor: e.verifiedStatus.status == "success" ? "#4ade80" : "#f87171"
        }
      });
    });
    return () => {
      if (channel) {
        channel.stopListening("PostViewEvent");
        channel.stopListening("PostCreatedEvent");
        channel.stopListening("PostLikeEvent");
      }
      if (followChannel)
        followChannel.stopListening("FollowPrivateNotification");
      if (likeChannel)
        likeChannel.stopListening("PostLikePrivateNotification");
      if (statusChannel)
        statusChannel.stopListening(
          "VerifiedStatusPrivateNotification"
        );
      if (channelName) window.Echo.leave(channelName);
      if (followChannelName) window.Echo.leave(followChannelName);
      if (likeChannelName) window.Echo.leave(likeChannelName);
      if (statusChannelName) window.Echo.leave(likeChannelName);
    };
  }, [filterUserId]);
}
export {
  usePostEcho as u
};
