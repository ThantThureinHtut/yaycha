import { jsx } from "react/jsx-runtime";
import axios from "axios";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { createContext, useState, useEffect, useContext, StrictMode } from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
window.Pusher = Pusher;
window.Echo = new Echo({
  broadcaster: "reverb",
  key: "hj2qwkfhr1rvfwltj8en",
  wsHost: "yaycha.blog",
  wsPort: "6001",
  wssPort: "6001",
  forceTLS: false,
  enabledTransports: ["ws", "wss"]
});
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);
function ThemeProvider({ children }) {
  const queryClient = new QueryClient();
  const savedTheme = localStorage.getItem("theme");
  const mediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState(() => savedTheme || "system");
  const [isAi, setAi] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const darkMode = (root) => {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };
  const lightMode = (root) => {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };
  const systemMode = (root) => {
    const systemTheme = mediaQuery ? "dark" : "light";
    root.classList.add(systemTheme);
    localStorage.setItem("theme", "system");
  };
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    if (theme == "system") {
      systemMode(root);
      return;
    } else if (theme == "dark") {
      darkMode(root);
    } else if (theme == "light") {
      lightMode(root);
    }
  }, [theme]);
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, setTheme, isAi, setAi, isOpen, setOpen }, children }) });
}
createInertiaApp({
  title: () => `Yaycha`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AdminAllUser.jsx": () => import("./assets/AdminAllUser-CmqFdkU0.js"), "./Pages/Admin/AdminDashboard.jsx": () => import("./assets/AdminDashboard-D3aD8pkO.js"), "./Pages/Admin/AdminSettings.jsx": () => import("./assets/AdminSettings-CVpE9pvT.js"), "./Pages/Admin/AdminVerifications.jsx": () => import("./assets/AdminVerifications-BiyLtjO2.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-Co4Xnq1s.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-DQOEudp3.js"), "./Pages/Home.jsx": () => import("./assets/Home-BzqQwDIN.js"), "./Pages/User/Blog/CommentPage.jsx": () => import("./assets/CommentPage-1rBZByRo.js"), "./Pages/User/Blog/PostCreatePage.jsx": () => import("./assets/PostCreatePage-BUqEQYPe.js"), "./Pages/User/SearchPage.jsx": () => import("./assets/SearchPage-DhRayM4C.js"), "./Pages/User/UserAccount/Account.jsx": () => import("./assets/Account-Cmt6BsWa.js"), "./Pages/User/UserAccount/BluemarkVerified.jsx": () => import("./assets/BluemarkVerified-3T62bz76.js"), "./Pages/User/UserAccount/LikedPost.jsx": () => import("./assets/LikedPost-VAUNjBO3.js"), "./Pages/User/UserAccount/ProfileEdit.jsx": () => import("./assets/ProfileEdit-BH1zyb0D.js"), "./Pages/User/UserAccount/ProfileShow.jsx": () => import("./assets/ProfileShow-CiIrZuYA.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) }) })
    );
  },
  progress: {
    color: "#FFFF00"
  }
});
export {
  useTheme as u
};
