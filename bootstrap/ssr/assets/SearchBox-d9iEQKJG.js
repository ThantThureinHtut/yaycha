import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputGroup, b as InputGroupInput, a as InputGroupAddon } from "./input-group-rYvaTNbT.js";
import { I as Item, d as ItemMedia, a as ItemContent, b as ItemTitle, c as ItemDescription, e as ItemActions } from "./item-Bb6BQ4G4.js";
import { usePage, Link } from "@inertiajs/react";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
function SearchBox() {
  const { auth } = usePage().props;
  const [query, setQuery] = useState();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const SearchTimeSet = setTimeout(() => {
      if (query) {
        axios.post(route("user.search"), { query }).then((res) => {
          setUsers(res.data.users);
          setOpen(true);
        });
      } else {
        setUsers([]);
        setOpen(false);
      }
    }, 300);
    return () => {
      clearTimeout(SearchTimeSet);
    };
  }, [query]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full relative z-50", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(InputGroup, { children: [
      /* @__PURE__ */ jsx(
        InputGroupInput,
        {
          placeholder: "Search...",
          onChange: (e) => setQuery(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputGroupAddon, { children: /* @__PURE__ */ jsx(Search, {}) }),
      /* @__PURE__ */ jsxs(InputGroupAddon, { align: "inline-end", children: [
        users && users.length,
        " Result"
      ] })
    ] }) }),
    open && /* @__PURE__ */ jsxs("div", { className: " absolute mt-2 w-full p-3 bg-white/60 dark:bg-secondary/60 shadow-sm backdrop-blur-sm rounded-b-lg flex flex-col gap-3 max-h-96 overflow-y-auto custom-scrollbar ", children: [
      users && users.map((user) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: user.id !== auth.user.id ? route("account.show", { id: user.id }) : route("account.dashboard"), children: /* @__PURE__ */ jsxs(Item, { variant: "outline", className: "hover:bg-slate-300/10", children: [
        /* @__PURE__ */ jsx(ItemMedia, {}),
        /* @__PURE__ */ jsx(ItemContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(
            AvatarImage,
            {
              src: user.avatar_url
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ItemTitle, { children: user.name }),
            /* @__PURE__ */ jsx(ItemDescription, { children: user.username })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(ItemActions, {})
      ] }) }) }, user.id)),
      users.length === 0 && /* @__PURE__ */ jsx("h1", { className: "text-center text-lg ", children: "Not Found" })
    ] })
  ] });
}
export {
  SearchBox as S
};
