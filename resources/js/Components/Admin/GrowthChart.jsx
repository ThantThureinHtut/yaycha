

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";

// 1. UPDATE CONFIG: Change 'desktop' to 'users' and set your Yellow color
const chartConfig = {
    users: {
        label: "New Users",
        color: "#EAB308", // Yaycha Yellow
    },
};


export function GrowthChart({ data: chartData, name }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name} Growth</CardTitle>
                <CardDescription>
                    {name === "User"
                        ? "New users joining per month"
                        : "Post creating per month"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="min-h-60 h-60 w-full "
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 50,
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />

                        {/* 2. UPDATE LINE: Change dataKey to "users" and color to var(--color-users) */}
                        <Line
                            dataKey="users"
                            type="natural"
                            stroke="var(--color-users)"
                            strokeWidth={2}
                            dot={false}

                        >

                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Growth is trending up! <TrendingUp className="h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    );
}
