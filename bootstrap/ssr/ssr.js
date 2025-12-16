import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, createContext, useContext, StrictMode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { X, PanelLeft, Rabbit, BookDashedIcon, Verified, User, Settings, Home as Home$1, LogOut, MoreHorizontal, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check, Search, MoreHorizontalIcon, TrendingUp, ClockAlert, Sun, Moon, Github, AlertCircleIcon, Circle, Eclipse, UserCog, ThumbsUp, ShieldUser, ArrowLeft, Earth, Brain, BadgeCheck, FilePlus, BadgeCheckIcon, Eye, Heart, MessageSquare, Send, Edit, Hourglass, UserCheck, OctagonAlert } from "lucide-react";
import { Link, router, usePage, useForm, createInertiaApp } from "@inertiajs/react";
import { Slot } from "@radix-ui/react-slot";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { formatDistanceToNow } from "date-fns";
import * as SelectPrimitive from "@radix-ui/react-select";
import TextareaAutosize from "react-textarea-autosize";
import * as RechartsPrimitive from "recharts";
import { LineChart, CartesianGrid, XAxis, Line } from "recharts";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as LabelPrimitive from "@radix-ui/react-label";
import toast$1, { Toaster } from "react-hot-toast";
import { Drawer as Drawer$1 } from "vaul";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { toast } from "sonner";
import NProgress from "nprogress";
import "next-themes";
import axios$1 from "axios";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Input.displayName = "Input";
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Sheet = SheetPrimitive.Root;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Close,
      {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
        children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ]
      }
    ),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = React.forwardRef(({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
        className
      ),
      ref,
      ...props,
      children
    }
  ) }) });
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React.forwardRef(({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          className
        ),
        ref,
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children
              }
            )
          }
        )
      ]
    }
  );
});
Sidebar.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7 ", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(PanelLeft, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  }
));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  }
));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className),
    ...props
  }
));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = React.forwardRef(({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef(
  ({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(
          "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          className
        ),
        ...props
      }
    );
  }
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const items = [
  { title: "Dashboard", url: "admin.dashboard", icon: BookDashedIcon },
  { title: "Verifications", url: "admin.verifications", icon: Verified },
  { title: "All Users", url: "admin.allUser", icon: User },
  { title: "Settings", url: "admin.settings", icon: Settings },
  { title: "User Home", url: "home", icon: Home$1 }
];
function AppSidebar() {
  return /* @__PURE__ */ jsx(Sidebar, { children: /* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsxs(SidebarGroup, { children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "text-primary flex items-center gap-1 ", children: [
      /* @__PURE__ */ jsx(Rabbit, {}),
      /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Yaycha" })
    ] }) }),
    /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxs(SidebarMenu, { children: [
      items.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: route(item.url),
          className: "flex items-center",
          children: [
            /* @__PURE__ */ jsx(item.icon, {}),
            /* @__PURE__ */ jsx("span", { children: item.title })
          ]
        }
      ) }) }, item.title)),
      /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "/logout", method: "POST", children: [
        /* @__PURE__ */ jsx(LogOut, {}),
        /* @__PURE__ */ jsx("span", { children: "Logout" })
      ] }) }) })
    ] }) })
  ] }) }) });
}
function AdminLayout({ children, verifiedUserCounts }) {
  return /* @__PURE__ */ jsx(SidebarProvider, { children: /* @__PURE__ */ jsxs("div", { className: "flex  w-full min-h-screen overflow-auto p-2", children: [
    /* @__PURE__ */ jsx(AppSidebar, { verifiedUserCounts }),
    /* @__PURE__ */ jsxs("main", { className: "flex gap-3 w-full m-1", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 shadow rounded-lg", children: /* @__PURE__ */ jsx(SidebarTrigger, {}) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 p-4 mx-auto  shadow w-full h-full rounded-xl", children: /* @__PURE__ */ jsx("div", { children }) })
    ] })
  ] }) });
}
function formatDate(input_data) {
  if (!input_data) return "";
  return formatDistanceToNow(new Date(input_data), {
    addSuffix: true
  }).replace("about ", "").replace("less than a minute", "just now").replace("just now ago", "just_now").replace(" ", "").replace("minutes ago", "m ago").replace("minute ago", "m ago").replace("hour ago", "h ago").replace("hours ago", "h ago");
}
const Pagination = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ jsx(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Previous" })
    ]
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { children: "Next" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
    ]
  }
);
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  "span",
  {
    "aria-hidden": true,
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";
function PaginationBar({ links, search, filter }) {
  const handlePageChange = (e, url) => {
    e.preventDefault();
    if (url) {
      router.get(
        url,
        { search, filter },
        { preserveState: true, preserveScroll: true }
      );
    }
  };
  return /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsx(PaginationContent, { children: links.map((link, index) => {
    const isPrevious = link.label.includes("Previous");
    const isNext = link.label.includes("Next");
    const isEllipsis = link.label == "...";
    if (link.url == null && isEllipsis) {
      return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationEllipsis, {}) }, index);
    }
    if (isPrevious) {
      return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
        PaginationPrevious,
        {
          href: link.url || "#",
          onClick: (e) => handlePageChange(e, link.url),
          className: !link.url ? "pointer-events-none opacity-50" : "cursor-pointer"
        }
      ) }, index);
    }
    if (isNext) {
      return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
        PaginationNext,
        {
          href: link.url || "#",
          onClick: (e) => handlePageChange(e, link.url),
          className: !link.url ? "pointer-events-none opacity-50" : "cursor-pointer"
        }
      ) }, index);
    }
    return /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
      PaginationLink,
      {
        href: link.url || "#",
        isActive: link.active,
        onClick: (e) => handlePageChange(e, link.url),
        children: link.label
      }
    ) }, index);
  }) }) });
}
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
function InputGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group border-input dark:bg-input/30 shadow-xs relative flex w-full items-center rounded-md border outline-none transition-[color,box-shadow]",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-1",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        var _a, _b;
        if (e.target.closest("button")) {
          return;
        }
        (_b = (_a = e.currentTarget.parentElement) == null ? void 0 : _a.querySelector("input")) == null ? void 0 : _b.focus();
      },
      ...props
    }
  );
}
const inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function InputGroupTextarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TextareaAutosize,
    {
      "data-slot": "input-group-control",
      minRows: 5,
      className: cn(
        "flex-1 max-h-80 resize-none custom-scrollbar rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function useSearchFilter(routeName, filters, dataKey) {
  const [search, setSearch] = useState(filters.search || []);
  const [filter, setFilter] = useState(filters.filter || []);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.get(
        route(routeName),
        {
          search,
          filter
        },
        {
          preserveState: true,
          // Don't clear the search box while typing
          preserveScroll: true,
          // Don't jump to the top
          replace: true,
          // Don't fill the browser history with every letter typed
          only: [dataKey]
        }
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [search, filter]);
  return { search, setSearch, filter, setFilter };
}
function UserSearchBar({
  search,
  setSearch,
  filter,
  setFilter,
  pageName
}) {
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex gap-2", children: [
    /* @__PURE__ */ jsxs(InputGroup, { children: [
      /* @__PURE__ */ jsx(InputGroupAddon, { children: /* @__PURE__ */ jsx(Search, {}) }),
      /* @__PURE__ */ jsx(
        InputGroupInput,
        {
          name: "search",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Seach..."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      Select,
      {
        defaultValue: (filter == null ? void 0 : filter.length) <= 0 ? "default" : filter,
        onValueChange: (value) => setFilter(value),
        children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Filter" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "default", children: "Default" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "sortAToZ", children: "Sort A-Z" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "oldUser", children: "Old users" }),
            pageName == "user" && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "Status is Pending" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "success", children: "Status is Success" })
            ] }),
            /* @__PURE__ */ jsx(SelectItem, { value: "loginByGoogle", children: "Login by Google" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "loginByManual", children: "Login by Manual" })
          ] })
        ]
      }
    )
  ] });
}
function AdminAllUser({ userData, filters = null }) {
  const { search, setSearch, filter, setFilter } = useSearchFilter("admin.allUser", filters, "userData");
  const statusColorChangeFn = (data) => {
    switch (data) {
      case "success":
        return "bg-green-400";
      case "pending":
        return "bg-orange-400";
      case "rejected":
        return "bg-red-400";
      default:
        return "bg-slate-400";
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#All User" }),
    /* @__PURE__ */ jsx(UserSearchBar, { search, setSearch, filter, setFilter, pageName: "user" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableCaption, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h1", { children: "A list of Users." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PaginationBar, { links: userData.links, search, filter }) })
      ] }) }),
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "User id" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Username" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Login type" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Verification Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Created Time" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: userData.data.map((user) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: user.id }),
        /* @__PURE__ */ jsxs(TableCell, { children: [
          "@",
          user.username
        ] }),
        /* @__PURE__ */ jsx(TableCell, { children: user.email }),
        /* @__PURE__ */ jsx(TableCell, { children: user.provider_method }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: " w-24", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-0.5", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex size-4 items-center justify-center", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `absolute inline-flex size-2 animate-ping rounded-full ${statusColorChangeFn(
                  user.verified_status
                )} opacity-75`
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `relative inline-flex items-center justify-center size-2 p-1 rounded-full ${statusColorChangeFn(
                  user.verified_status
                )} text-white`
              }
            )
          ] }),
          /* @__PURE__ */ jsx("span", { children: user.verified_status })
        ] }) }) }),
        /* @__PURE__ */ jsx(TableCell, { children: formatDate(user.created_at) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(MoreHorizontalIcon, {}) }) })
      ] }, user.id)) })
    ] }) })
  ] }) });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminAllUser
}, Symbol.toStringTag, { value: "Module" }));
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const THEMES = {
  light: "",
  dark: ".dark"
};
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "flex aspect-auto justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({
  id,
  config
}) => {
  const colorConfig = Object.entries(config).filter(([, config2]) => config2.theme || config2.color);
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
          var _a;
          const color = ((_a = itemConfig.theme) == null ? void 0 : _a[theme]) || itemConfig.color;
          return color ? `  --color-${key}: ${color};` : null;
        }).join("\n")}
}
`).join("\n")
      }
    }
  );
};
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forwardRef(({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}, ref) => {
  const { config } = useChart();
  const tooltipLabel = React.useMemo(() => {
    var _a;
    if (hideLabel || !(payload == null ? void 0 : payload.length)) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || (item == null ? void 0 : item.dataKey) || (item == null ? void 0 : item.name) || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? ((_a = config[label]) == null ? void 0 : _a.label) || label : itemConfig == null ? void 0 : itemConfig.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !(payload == null ? void 0 : payload.length)) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              ),
              children: formatter && (item == null ? void 0 : item.value) !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                (itemConfig == null ? void 0 : itemConfig.icon) ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                      "h-2.5 w-2.5": indicator === "dot",
                      "w-1": indicator === "line",
                      "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                      "my-0.5": nestLabel && indicator === "dashed"
                    }),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: (itemConfig == null ? void 0 : itemConfig.label) || item.name })
                      ] }),
                      item.value && /* @__PURE__ */ jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            item.dataKey
          );
        }) })
      ]
    }
  );
});
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegendContent = React.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!(payload == null ? void 0 : payload.length)) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      ),
      children: payload.filter((item) => item.type !== "none").map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              (itemConfig == null ? void 0 : itemConfig.icon) && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig == null ? void 0 : itemConfig.label
            ]
          },
          item.value
        );
      })
    }
  );
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
const chartConfig = {
  users: {
    label: "New Users",
    color: "#EAB308"
    // Yaycha Yellow
  }
};
function GrowthChart({ data: chartData, name }) {
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardTitle, { children: [
        name,
        " Growth"
      ] }),
      /* @__PURE__ */ jsx(CardDescription, { children: name === "User" ? "New users joining per month" : "Post creating per month" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
      ChartContainer,
      {
        config: chartConfig,
        className: "min-h-60 h-60 w-full ",
        children: /* @__PURE__ */ jsxs(
          LineChart,
          {
            accessibilityLayer: true,
            data: chartData,
            margin: {
              top: 50,
              left: 12,
              right: 12
            },
            children: [
              /* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
              /* @__PURE__ */ jsx(
                XAxis,
                {
                  dataKey: "month",
                  tickLine: false,
                  axisLine: false,
                  tickMargin: 8,
                  tickFormatter: (value) => value.slice(0, 3)
                }
              ),
              /* @__PURE__ */ jsx(
                ChartTooltip,
                {
                  cursor: false,
                  content: /* @__PURE__ */ jsx(ChartTooltipContent, { hideLabel: true })
                }
              ),
              /* @__PURE__ */ jsx(
                Line,
                {
                  dataKey: "users",
                  type: "natural",
                  stroke: "var(--color-users)",
                  strokeWidth: 2,
                  dot: false
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-start gap-2 text-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 leading-none font-medium", children: [
      "Growth is trending up! ",
      /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" })
    ] }) })
  ] });
}
function AdminDashboard({ userChartData, postChartData, userCounts, bluemarkUserCounts, verifiedUserCounts }) {
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#Dashboard" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col lg:flex-row  gap-3", children: [
      /* @__PURE__ */ jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-1 items-center p-4 bg-green-200 border border-green-500 rounded-md text-green-600", children: [
        /* @__PURE__ */ jsx(User, { className: "size-8" }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: userCounts }),
        /* @__PURE__ */ jsx("h1", { className: "text-sm ", children: " Users" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-1 items-center p-4 bg-orange-200 border border-yellow-500 rounded-md text-yellow-600", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex size-8 items-center justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inline-flex size-9 animate-ping rounded-full bg-orange-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex items-center justify-center size-10 p-2 rounded-full bg-orange-400 text-white", children: /* @__PURE__ */ jsx(ClockAlert, { className: "" }) })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: verifiedUserCounts }),
        /* @__PURE__ */ jsxs("h1", { className: "text-sm ", children: [
          " ",
          "Users left to approve!!"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-1 items-center p-4 bg-blue-200 border border-blue-500 rounded-md text-blue-600", children: [
        /* @__PURE__ */ jsx(Verified, { className: "size-8" }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: bluemarkUserCounts }),
        /* @__PURE__ */ jsx("h1", { className: "text-sm ", children: "Bluemark users" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 ", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(GrowthChart, { data: userChartData, name: "User" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(GrowthChart, { data: postChartData, name: "Post" }) })
    ] })
  ] }) });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminDashboard
}, Symbol.toStringTag, { value: "Module" }));
const itemVariants = cva(
  "group/item [a]:hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "gap-4 p-4 ",
        sm: "gap-2.5 px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "item",
      "data-variant": variant,
      "data-size": size,
      className: cn(itemVariants({ variant, size, className })),
      ...props
    }
  );
}
const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted size-8 rounded-sm border [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ItemMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": variant,
      className: cn(itemMediaVariants({ variant, className })),
      ...props
    }
  );
}
function ItemContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "item-content",
      className: cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      ),
      ...props
    }
  );
}
function ItemTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "item-title",
      className: cn(
        "flex w-fit items-center gap-2 text-sm font-medium leading-snug",
        className
      ),
      ...props
    }
  );
}
function ItemDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "item-description",
      className: cn(
        "text-muted-foreground line-clamp-2 text-balance text-sm font-normal leading-normal",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function ItemActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "item-actions",
      className: cn("flex items-center gap-2", className),
      ...props
    }
  );
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
function AdminSettings() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#Settings" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Item, { variant: "outline", children: /* @__PURE__ */ jsx(ItemContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(ItemTitle, { children: "Dark Mode" }),
        /* @__PURE__ */ jsx(ItemDescription, { children: "Dark | Light | System" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Select, { defaultValue: theme, onValueChange: setTheme, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[120px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "System" }) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "light", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Sun, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "Light" })
          ] }) }),
          /* @__PURE__ */ jsx(SelectItem, { value: "dark", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Moon, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "Dark" })
          ] }) }),
          /* @__PURE__ */ jsx(SelectItem, { value: "system", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Settings, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "System" })
          ] }) })
        ] })
      ] }) })
    ] }) }) }) })
  ] }) });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminSettings
}, Symbol.toStringTag, { value: "Module" }));
const Dialog = SheetPrimitive.Root;
const DialogTrigger = SheetPrimitive.Trigger;
const DialogPortal = SheetPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(
          SheetPrimitive.Close,
          {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
function AdminVerifications({ users, filters = null }) {
  const [select, setSelect] = useState();
  const { search, setSearch, filter, setFilter } = useSearchFilter(
    "admin.verifications",
    filters,
    "users"
  );
  const statusChangeSubmitHandler = (e, user_id) => {
    router.post(
      route("account.bluemark.verified.update"),
      {
        status: e,
        user_id
      },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true
      }
    );
  };
  const statusColorChangeFn = (data) => {
    switch (data) {
      case "success":
        return "bg-green-400";
      case "pending":
        return "bg-orange-400";
      case "rejected":
        return "bg-red-400";
      default:
        return "bg-slate-400";
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "#Verification" }),
    /* @__PURE__ */ jsx(
      UserSearchBar,
      {
        search,
        setSearch,
        filter,
        setFilter,
        pageName: "verifications"
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableCaption, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h1", { children: "A list of Users." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          PaginationBar,
          {
            links: users.links,
            search,
            filter
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "User id" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Username" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Login type" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Verification Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Created Time" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Check" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: users.data.map((user) => {
        if (user.verified_status != "unverified") {
          return /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: user.id }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              "@",
              user.username
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: user.email }),
            /* @__PURE__ */ jsx(TableCell, { children: user.provider_method }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: " w-24",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-0.5", children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex size-4 items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute inline-flex size-2 animate-ping rounded-full ${statusColorChangeFn(
                          user.verified_status
                        )} opacity-75`
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `relative inline-flex items-center justify-center size-2 p-1 rounded-full ${statusColorChangeFn(
                          user.verified_status
                        )} text-white`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: user.verified_status })
                ] })
              }
            ) }),
            /* @__PURE__ */ jsx(TableCell, { children: formatDate(user.created_at) }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Dialog, { children: [
              /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Check" }) }),
              /* @__PURE__ */ jsx(DialogContent, { className: "min-h-screen h-full overflow-auto custom-scrollbar", children: /* @__PURE__ */ jsxs(DialogHeader, { className: "my-4", children: [
                /* @__PURE__ */ jsx(DialogTitle, { className: "mb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-blue-500 font-bold", children: /* @__PURE__ */ jsxs("span", { children: [
                    "@",
                    user.username
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { children: formatDate(
                    user.created_at
                  ) })
                ] }) }),
                /* @__PURE__ */ jsx(Separator, {}),
                /* @__PURE__ */ jsx(
                  DialogDescription,
                  {
                    asChild: true,
                    children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 bg-yellow-100 border border-yellow-400 p-2 rounded ", children: [
                      /* @__PURE__ */ jsx("span", { children: "⚠️ Admin Warning" }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        " ",
                        "You are reviewing sensitive user identity information (Government ID, Selfie ID, Date of Birth)."
                      ] }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        " ",
                        "Please check carefully and make sure all details are clear, valid, and belong to the same person before approving."
                      ] }),
                      /* @__PURE__ */ jsx("span", { children: "Incorrect approval may cause security or legal issues." })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 ", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold underline", children: "Government Id" }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: user.verifiedacountinfo.government_image ? `/storage/${user.verifiedacountinfo.government_image}` : "https://placehold.co/600x400",
                        alt: "",
                        className: "border border-black w-full object-cover"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold underline", children: "Salfie Id" }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: user.verifiedacountinfo.selfie_image ? `/storage/${user.verifiedacountinfo.selfie_image}` : "https://placehold.co/600x400",
                        alt: "",
                        className: "border border-black w-full object-cover"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(
              Select,
              {
                defaultValue: user.verified_status,
                onValueChange: (e) => statusChangeSubmitHandler(
                  e,
                  user.id
                ),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[100px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Action" }) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "pending" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "success", children: "success" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "rejected", children: "rejected" })
                  ] })
                ]
              }
            ) }) })
          ] }, user.id);
        }
      }) })
    ] }) })
  ] }) });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminVerifications
}, Symbol.toStringTag, { value: "Module" }));
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
function AuthLayout({ children }) {
  const location = usePage().url;
  const activeTab = location.includes("/register") ? "signup" : "login";
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen overflow-auto p-4", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, className: "w-[400px]", children: [
    /* @__PURE__ */ jsx("div", { className: " flex justify-center items-center", children: /* @__PURE__ */ jsxs(TabsList, { children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "login", children: /* @__PURE__ */ jsx(Link, { href: "/login", children: "Login" }) }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", children: /* @__PURE__ */ jsx(Link, { href: "/register", children: "Signup" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children })
  ] }) });
}
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
const Google = "/build/assets/googe-BUWGlcPK.svg";
function GoogleIcon() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: Google, alt: "Logo", className: " size-6" }) });
}
function OAuthButtons() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mt-4", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "w-full",
        onClick: () => window.location.href = "/auth/github/redirect",
        children: /* @__PURE__ */ jsx(Github, { size: 60 })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "w-full",
        onClick: () => window.location.href = "/auth/google/redirect",
        children: /* @__PURE__ */ jsx(GoogleIcon, {})
      }
    )
  ] });
}
function Login() {
  const { errors: pageErrors } = usePage().props;
  const { data, setData, reset, post, errors } = useForm({
    email: "",
    password: ""
  });
  const loginSubmit = () => {
    post("/login", {
      onSuccess: () => reset()
    });
  };
  const emailError = errors.email || (pageErrors == null ? void 0 : pageErrors.email);
  return /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center my-4 text-primary", children: /* @__PURE__ */ jsx(Rabbit, { size: 50 }) }),
      /* @__PURE__ */ jsx(CardTitle, { children: "Login to your account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email below to login to your account" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "m@example.com",
            required: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        emailError && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: emailError })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "ml-auto inline-block text-sm underline-offset-4 hover:underline",
              children: "Forgot your password?"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            placeholder: "Enter your Password",
            onChange: (e) => setData("password", e.target.value),
            required: true
          }
        ),
        errors.password && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.password })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          onClick: loginSubmit,
          className: "w-full",
          children: "Login"
        }
      ),
      /* @__PURE__ */ jsx(OAuthButtons, {})
    ] })
  ] }) }) });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, reset, post, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const registerSubmit = () => {
    post("/register");
  };
  return /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(TabsContent, { value: "signup", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center my-4 text-primary", children: /* @__PURE__ */ jsx(Rabbit, { size: 50 }) }),
      /* @__PURE__ */ jsx(CardTitle, { children: "Signup your account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your Name , Email and Password" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "name",
            type: "test",
            placeholder: "Name",
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        errors.name && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.name })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "m@example.com",
            onChange: (e) => setData("email", e.target.value),
            required: true
          }
        ),
        errors.email && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.email })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }) }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            placeholder: "Enter your Password",
            onChange: (e) => setData("password", e.target.value),
            required: true
          }
        ),
        errors.password && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { size: 18 }),
          /* @__PURE__ */ jsx(AlertTitle, { className: "m-0 text-sm", children: errors.password })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }) }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password_confirmation",
            type: "password",
            placeholder: "Confirm Password",
            onChange: (e) => setData(
              "password_confirmation",
              e.target.value
            ),
            required: true
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          onClick: registerSubmit,
          className: "w-full",
          children: "Create"
        }
      ),
      /* @__PURE__ */ jsx(OAuthButtons, {})
    ] })
  ] }) }) });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
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
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
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
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
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
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { children }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", reverseOrder: false })
  ] });
}
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
const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short"
  }).format(number);
};
const usePostInteractions = (post, auth, isPressed, setPressed) => {
  const viewMutation = useMutation({
    mutationFn: () => {
      axios.post(route("post.viewStore"), {
        user_id: auth.user.id,
        post_id: post.id
      });
    },
    onMutate: async () => {
      post.views_count += 1;
      post.views_count_formatted = formatNumber(post.views_count);
      post.views = [
        ...post.views || [],
        { post_id: post.id, user_id: auth.user.id }
      ];
    }
  });
  const likeMutation = useMutation({
    mutationFn: () => {
      axios.post(route("post.likeStore"), {
        like_id: auth.user.id,
        user_id: post.user_id,
        post_id: post.id
      });
    },
    onMutate: () => {
      setPressed((prev) => !prev);
      isPressed ? post.likes_count -= 1 : post.likes_count += 1;
      post.likes_count_formatted = formatNumber(post.likes_count);
    }
  });
  return {
    viewIn: viewMutation,
    likeIn: likeMutation
  };
};
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
      toast$1.custom((t) => /* @__PURE__ */ jsxs(
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
                onClick: () => toast$1.dismiss(t.id),
                className: "w-full border border-transparent rounded-none rounded-r-lg py-2 px-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary",
                children: "Close"
              }
            ) })
          ]
        }
      ));
    });
    followChannel.listen("FollowPrivateNotification", (e) => {
      toast$1.custom((t) => /* @__PURE__ */ jsxs(
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
                onClick: () => toast$1.dismiss(t.id),
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
      toast$1(`Your verification is ${e.verifiedStatus.status}`, {
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
function PostCreatePage() {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex  justify-center m-5", children: /* @__PURE__ */ jsx(PostCreate, {}) }) });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PostCreatePage
}, Symbol.toStringTag, { value: "Module" }));
function Home({ posts: initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  usePostEcho(setPosts);
  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);
  return /* @__PURE__ */ jsx(GuestLayout, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PostCreateBar, { setPosts }),
    /* @__PURE__ */ jsx("div", { children: posts.map((post) => /* @__PURE__ */ jsx(Blog, { post }, post.id)) })
  ] }) });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
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
      axios$1.post(
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
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CommentPage
}, Symbol.toStringTag, { value: "Module" }));
function SearchPage() {
  return /* @__PURE__ */ jsx("div", { className: "p-6 ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 lg:w-1/2 container mx-auto ", children: [
    /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(
      ArrowLeft,
      {
        size: 30,
        className: "dark:bg-white dark:text-black bg-primary text-white  p-1 rounded-full"
      }
    ) }),
    /* @__PURE__ */ jsx(SearchBox, {})
  ] }) });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SearchPage
}, Symbol.toStringTag, { value: "Module" }));
function AccountInformation$1({ posts: initialPosts }) {
  var _a, _b, _c, _d, _e;
  const [posts, setPosts] = useState(initialPosts);
  const { auth } = usePage().props;
  const [user, setUser] = useState(auth.user);
  usePostEcho(setPosts, user.id);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(Header, {}) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "bg-secondary p-4 shadow-sm block sm:hidden", children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(ArrowLeft, {}) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Card, { className: "rounded-none sm:my-6 shadow-none border-none dark:bg-transparent", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center justify-between ", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col  sm:flex-row sm:items-center gap-3 sm:gap-7", children: [
            /* @__PURE__ */ jsx(Avatar, { className: " w-24 h-24", children: /* @__PURE__ */ jsx(
              AvatarImage,
              {
                src: (_a = auth.user) == null ? void 0 : _a.avatar_url
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl sm:text-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "@",
                  (_b = auth.user) == null ? void 0 : _b.username
                ] }),
                ((_c = auth.user) == null ? void 0 : _c.bluemark_boolean) && /* @__PURE__ */ jsx(BlueMark, {})
              ] }) }),
              /* @__PURE__ */ jsx(CardDescription, { className: "text-sm sm:text-md", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    user.followers_count || 0,
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
                    ((_d = auth.user) == null ? void 0 : _d.followings_count) || 0,
                    " ",
                    "followings"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: (_e = auth.user) == null ? void 0 : _e.bio })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { href: route("account.edit"), children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Edit, {}),
            "Edit profile"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(Separator, { className: "mb-8" }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-0 md:p-6", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "pl-4 md:pl-0", children: "Your Posts" }),
          /* @__PURE__ */ jsx("div", { className: "rounded mt-4 mx-auto", children: /* @__PURE__ */ jsx(PostCreateBar, {}) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: posts.map((post) => /* @__PURE__ */ jsx(Blog, { post }, post.id)) })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, {})
      ] }) })
    ] })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AccountInformation$1
}, Symbol.toStringTag, { value: "Module" }));
function BluemarkVerified() {
  const { auth } = usePage().props;
  const [governmentPreview, setgovernmentPreview] = useState();
  const [errorGovernmentPreview, seterrorGovernmentPreview] = useState("");
  const [errorSelfiePreview, seterrorSelfiePreview] = useState("");
  const [errorName, setErrorName] = useState("");
  const [selfiePreview, setselfiePreview] = useState();
  const { data, setData, post, processing, errors } = useForm({
    username: auth.user.username,
    user_id: auth.user.id,
    email: auth.user.email,
    date_of_birth: "",
    legal_name: "",
    governmentImage: null,
    selfieImage: null
  });
  const handleFileChange = (e, fileName, setPreviewFun, setError) => {
    const file = e.target.files[0];
    if (file) {
      const fileSize = file.size;
      const maxSizeBytes = 1 * 1024 * 1024;
      if (fileSize > maxSizeBytes) {
        setError("File Size can't over 1mb");
      } else {
        setError("");
        seterrorGovernmentPreview("");
        seterrorSelfiePreview("");
        setData(fileName, file);
        setPreviewFun(URL.createObjectURL(file));
      }
    } else {
      setError("");
    }
  };
  const nameValidFunction = (data2) => {
    const hasNumber = /[0-9]/.test(data2);
    const hasSymbol = /[^\w\s]/.test(data2);
    if (hasNumber || hasSymbol) {
      setErrorName("Name can't have the [0-9] , @!#$%");
    } else {
      setErrorName();
    }
    setData("legal_name", data2);
  };
  const verifiedSubmitHandler = (e) => {
    e.preventDefault();
    if (!errorGovernmentPreview && !errorSelfiePreview && !errorName) {
      post(route("account.bluemark.verified.store"));
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    auth.user.verified_status === "unverified" && /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: verifiedSubmitHandler,
        className: "container mx-auto w-full md:w-1/2 flex justify-center items-center min-h-screen ",
        encType: "multipart/form-data",
        children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: " text-blue-500 text-xl font-bold", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center ju gap-1", children: [
            /* @__PURE__ */ jsx(Verified, {}),
            /* @__PURE__ */ jsx("span", { children: "Verified Account" })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: /* @__PURE__ */ jsx("div", { children: errorName }) }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Full Legal Name:" }),
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  placeholder: "Enter your full legal name: ",
                  required: true,
                  onChange: (e) => nameValidFunction(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Date of Birth" }),
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  type: "date",
                  required: true,
                  placeholder: "Enter your full legal name: ",
                  onChange: (e) => setData(
                    "date_of_birth",
                    e.target.value
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: /* @__PURE__ */ jsx("div", { children: errorGovernmentPreview }) }),
              /* @__PURE__ */ jsxs(InputGroup, { children: [
                /* @__PURE__ */ jsx(InputGroupAddon, { children: "Government-Issued ID" }),
                /* @__PURE__ */ jsx(
                  InputGroupInput,
                  {
                    type: "file",
                    required: true,
                    onChange: (e) => handleFileChange(
                      e,
                      "governmentImage",
                      setgovernmentPreview,
                      seterrorGovernmentPreview
                    )
                  }
                )
              ] }),
              governmentPreview && /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center border rounded-md", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: governmentPreview,
                  className: " size-1/2 ",
                  alt: "govermant_image"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: /* @__PURE__ */ jsx("div", { children: errorSelfiePreview }) }),
              /* @__PURE__ */ jsxs(InputGroup, { children: [
                /* @__PURE__ */ jsx(InputGroupAddon, { children: "Selfie with ID" }),
                /* @__PURE__ */ jsx(
                  InputGroupInput,
                  {
                    type: "file",
                    required: true,
                    onChange: (e) => handleFileChange(
                      e,
                      "selfieImage",
                      setselfiePreview,
                      seterrorSelfiePreview
                    )
                  }
                )
              ] }),
              selfiePreview && /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center border rounded-md", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selfiePreview,
                  className: " size-1/2 ",
                  alt: "selfie_image"
                }
              ) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: " bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-700 w-full",
              children: "verified"
            }
          ) })
        ] })
      }
    ),
    auth.user.verified_status === "pending" && /* @__PURE__ */ jsx("div", { className: "container mx-auto w-full md:w-1/2 flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col items-baseline rounded-none sm:rounded-lg", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 ", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-orange-400 p-2 rounded-full animate-spin", children: /* @__PURE__ */ jsx(Hourglass, { className: "text-white" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold text-orange-400", children: "Your verification is still pending" })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { children: /* @__PURE__ */ jsx("span", { className: " text-justify", children: "Your BlueMark verification request has been submitted.Please wait while an admin reviews and approves it. This may take some time." }) }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Go back" }) }) })
    ] }) }),
    auth.user.verified_status === "success" && /* @__PURE__ */ jsx("div", { className: "container mx-auto w-full md:w-1/2 flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col  rounded-none sm:rounded-lg", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex size-12 items-center justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inline-flex size-10 animate-ping rounded-full bg-green-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex items-center justify-center size-12 p-2 rounded-full bg-green-500 text-white", children: /* @__PURE__ */ jsx(UserCheck, {}) })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-green-500 text-2xl font-bold", children: "Verification is successfully" })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: "⚠️ Important Notice" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To maintain a respectful and safe community, all Bluemark users must follow our content guidelines. Posting",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "inappropriate, sexual, or offensive content" }),
          " ",
          "is strictly prohibited."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "If you violate these rules:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside mt-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Your",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Bluemark status" }),
            " may be removed"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Your ",
            /* @__PURE__ */ jsx("strong", { children: "account" }),
            " may be suspended or banned by the admin team"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Please post responsibly and help keep the platform safe for everyone." })
      ] }) }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Go back" }) }) })
    ] }) })
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BluemarkVerified
}, Symbol.toStringTag, { value: "Module" }));
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
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LikedPost
}, Symbol.toStringTag, { value: "Module" }));
const Breadcrumb = React.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props })
);
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
function ProfileEdit() {
  var _a, _b, _c;
  const { auth } = usePage().props;
  const {
    data,
    setData,
    errors,
    post,
    recentlySuccessful,
    processing,
    isDirty
  } = useForm({
    name: (_a = auth.user) == null ? void 0 : _a.name,
    email: (_b = auth.user) == null ? void 0 : _b.email,
    password: "",
    bio: (_c = auth.user) == null ? void 0 : _c.bio
  });
  useEffect(() => {
    if (recentlySuccessful) {
      toast.success("Yaycha", {
        description: "Success! Your changes have been saved",
        variant: "success"
      });
    }
  }, [recentlySuccessful]);
  const submitHandler = (e) => {
    e.preventDefault();
    post(route("profile.edit"));
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    post(route("account.delete"));
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: submitHandler,
        className: "flex flex-col items-center justify-center overflow-auto my-4 ",
        children: /* @__PURE__ */ jsxs(Card, { className: "container rounded-none sm:rounded-lg", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "gap-2", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
              /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: route(
                    "account.dashboard"
                  ),
                  children: "Account"
                }
              ) }),
              /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
              /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Edit" })
            ] }) }) }) }),
            /* @__PURE__ */ jsxs(CardTitle, { children: [
              "Profile Edit ",
              errors.email
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  value: (data == null ? void 0 : data.bio) ?? "",
                  onChange: (e) => setData("bio", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Bio" })
            ] }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  value: data.name,
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Name" })
            ] }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  value: data.email,
                  onChange: (e) => setData("email", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Email" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing || !isDirty, children: "update" }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("form", { onSubmit: deleteHandler, className: "container mx-auto", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(OctagonAlert, {}) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(AlertTitle, { children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Delete Account" }) }),
          /* @__PURE__ */ jsx(AlertDescription, { children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Are you sure you want to delete your account? Once your account is deleted, all of your resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        errors.password && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsx(AlertTitle, { children: errors.password }) }),
        /* @__PURE__ */ jsxs(InputGroup, { children: [
          /* @__PURE__ */ jsxs(InputGroupAddon, { children: [
            auth.user.has_password ? "Enter your Current Password" : "Type 'DELETE ACCOUNT' to confirm ",
            /* @__PURE__ */ jsx(
              Separator,
              {
                orientation: "vertical",
                className: "h-5"
              }
            ),
            " "
          ] }),
          /* @__PURE__ */ jsx(
            InputGroupInput,
            {
              onChange: (e) => setData("password", e.target.value),
              placeholder: "Enter"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "destructive", children: "Delete Account" }) })
    ] }) })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProfileEdit
}, Symbol.toStringTag, { value: "Module" }));
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
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AccountInformation
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: () => `Yaycha`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/AdminAllUser.jsx": __vite_glob_0_0, "./Pages/Admin/AdminDashboard.jsx": __vite_glob_0_1, "./Pages/Admin/AdminSettings.jsx": __vite_glob_0_2, "./Pages/Admin/AdminVerifications.jsx": __vite_glob_0_3, "./Pages/Auth/Login.jsx": __vite_glob_0_4, "./Pages/Auth/Register.jsx": __vite_glob_0_5, "./Pages/Home.jsx": __vite_glob_0_6, "./Pages/User/Blog/CommentPage.jsx": __vite_glob_0_7, "./Pages/User/Blog/PostCreatePage.jsx": __vite_glob_0_8, "./Pages/User/SearchPage.jsx": __vite_glob_0_9, "./Pages/User/UserAccount/Account.jsx": __vite_glob_0_10, "./Pages/User/UserAccount/BluemarkVerified.jsx": __vite_glob_0_11, "./Pages/User/UserAccount/LikedPost.jsx": __vite_glob_0_12, "./Pages/User/UserAccount/ProfileEdit.jsx": __vite_glob_0_13, "./Pages/User/UserAccount/ProfileShow.jsx": __vite_glob_0_14 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) }) })
  })
);
