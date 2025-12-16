import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Drawer as Drawer$1 } from "vaul";
import { c as cn, B as Button } from "./input-DS2-RFXY.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Circle, Rabbit, Search, X, Eclipse, UserCog, ThumbsUp, Verified, ShieldUser, LogOut } from "lucide-react";
import { usePage, Link } from "@inertiajs/react";
import { L as Label } from "./label-BKXq-SpB.js";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import "./card-CYRifSsD.js";
import { A as Avatar, a as AvatarImage } from "./avatar-Ce7QGdrq.js";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { S as Separator } from "./separator-C8hBBIqD.js";
import { u as useTheme } from "../app.js";
import { S as SearchBox } from "./SearchBox-d9iEQKJG.js";
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(Drawer$1.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
const DrawerTrigger = Drawer$1.Trigger;
const DrawerPortal = Drawer$1.Portal;
const DrawerClose = Drawer$1.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsx(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props });
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
function Header() {
  var _a, _b, _c, _d;
  const { auth } = usePage().props;
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto ", children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-between shadow-sm dark:shadow-md py-3 px-6 rounded-sm", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(Rabbit, { size: 35, color: "#facc13" }) }) }),
    /* @__PURE__ */ jsx("li", { className: "hidden md:block sm:w-1/2", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center ", children: /* @__PURE__ */ jsx(SearchBox, { className: "w-full" }) }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx(Link, { href: "/search/", className: "md:hidden", children: /* @__PURE__ */ jsx(Search, {}) }),
      /* @__PURE__ */ jsxs(Drawer, { direction: "right", children: [
        /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(
          AvatarImage,
          {
            src: (_a = auth.user) == null ? void 0 : _a.avatar_url,
            className: "w-10 h-10"
          }
        ) }) }),
        /* @__PURE__ */ jsxs(DrawerContent, { className: "right-0 left-auto w-full sm:w-80 rounded-none h-full min-h-screen overflow-scroll overflow-x-hidden", children: [
          /* @__PURE__ */ jsxs(DrawerHeader, { children: [
            /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(X, { color: "#facc13" }) }) }) }),
            /* @__PURE__ */ jsx(DrawerTitle, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-5", children: [
              /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16", children: /* @__PURE__ */ jsx(
                AvatarImage,
                {
                  src: (_b = auth.user) == null ? void 0 : _b.avatar_url
                }
              ) }),
              /* @__PURE__ */ jsx("p", { children: (_c = auth.user) == null ? void 0 : _c.username })
            ] }) }),
            /* @__PURE__ */ jsx(DrawerDescription, { className: "flex items-center justify-center", children: ((_d = auth.user) == null ? void 0 : _d.bio) ?? "Bio" })
          ] }),
          /* @__PURE__ */ jsx(Separator, { className: "my-2 " }),
          /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-5 sm:gap-4 items-center sm:items-start", children: [
            /* @__PURE__ */ jsx("li", { className: "w-full", children: /* @__PURE__ */ jsx(
              Accordion,
              {
                type: "single",
                collapsible: true,
                children: /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxs("div", { className: " flex items-center justify-center sm:justify-start gap-2 font-bold", children: [
                    /* @__PURE__ */ jsx(Eclipse, {}),
                    /* @__PURE__ */ jsx("span", { className: " font-bold", children: "Mode" })
                  ] }) }),
                  /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                    RadioGroup,
                    {
                      className: "flex h-4 items-center space-x-2 text-sm",
                      value: theme,
                      onValueChange: setTheme,
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Label, { htmlFor: "dark", children: "Dark" }),
                          /* @__PURE__ */ jsx(
                            RadioGroupItem,
                            {
                              value: "dark",
                              id: "dark"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Label, { htmlFor: "light", children: "Light" }),
                          /* @__PURE__ */ jsx(
                            RadioGroupItem,
                            {
                              value: "light",
                              id: "light"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Label, { htmlFor: "system", children: "System" }),
                          /* @__PURE__ */ jsx(
                            RadioGroupItem,
                            {
                              value: "system",
                              id: "system"
                            }
                          )
                        ] })
                      ]
                    }
                  ) }) })
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxs("li", { className: "w-full", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route(
                    "account.dashboard"
                  ),
                  className: "flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded ",
                  children: [
                    /* @__PURE__ */ jsx(UserCog, {}),
                    /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-sm", children: "Account information" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Separator, {})
            ] }),
            /* @__PURE__ */ jsx("li", { className: "w-full", children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route(
                  "acccount.liked.posts.show"
                ),
                className: "flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded",
                children: [
                  /* @__PURE__ */ jsx(ThumbsUp, {}),
                  /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-sm", children: "Liked Posts" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "w-full", children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route(
                  "account.bluemark.verified.dashboard",
                  { id: auth.user.id }
                ),
                className: "flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded",
                children: [
                  /* @__PURE__ */ jsx(Verified, {}),
                  /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-sm", children: "Bluemark Verification" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "w-full", children: auth.user.role === "superadmin" && /* @__PURE__ */ jsxs(
              Link,
              {
                href: route(
                  "admin.dashboard"
                ),
                className: "flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded",
                children: [
                  /* @__PURE__ */ jsx(ShieldUser, {}),
                  /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-sm", children: "Admin Dashboard" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxs(DrawerFooter, { children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/logout",
                method: "post",
                as: "button",
                className: "flex items-center justify-center gap-2 bg-primary p-2 rounded-sm",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Logout" }),
                  " ",
                  /* @__PURE__ */ jsx(LogOut, { size: 20 })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { children: "@copyright by yaycha" })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Header as H
};
