import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { TrendingUp, User, ClockAlert, Verified } from "lucide-react";
import * as RechartsPrimitive from "recharts";
import { LineChart, CartesianGrid, XAxis, Line } from "recharts";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-CYRifSsD.js";
import * as React from "react";
import { c as cn } from "./input-DS2-RFXY.js";
import { A as AdminLayout } from "./AdminLayout-Cye9rADK.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@inertiajs/react";
import "./separator-C8hBBIqD.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
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
export {
  AdminDashboard as default
};
