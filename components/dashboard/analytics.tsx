import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp } from "lucide-react";

const analytics = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Customer Acquisition</CardTitle>
            <CardDescription>New vs returning customers</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[240px] flex items-center justify-center">
              {/* Pie chart visualization */}
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-full border-8 border-primary/20"></div>
                <div
                  className="absolute inset-0 rounded-full border-8 border-primary"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">70%</div>
                    <div className="text-xs text-muted-foreground">New</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">New</span>
                </div>
                <div className="text-2xl font-bold">875</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-primary/20"></div>
                  <span className="text-sm font-medium">Returning</span>
                </div>
                <div className="text-2xl font-bold">375</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where customers find you</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ul className="space-y-4">
              {[
                {
                  source: "Direct",
                  percentage: 42,
                  count: 520,
                },
                {
                  source: "Social Media",
                  percentage: 28,
                  count: 345,
                },
                {
                  source: "Search Engines",
                  percentage: 18,
                  count: 222,
                },
                {
                  source: "Referrals",
                  percentage: 12,
                  count: 148,
                },
              ].map((item) => (
                <li key={item.source} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.source}</span>
                    <span className="text-sm">{item.count} visitors</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Conversion Rate</CardTitle>
            <CardDescription>Visitors who place an order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center py-4">
              <div className="relative h-36 w-36 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    className="text-muted stroke-2 opacity-20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="251.2"
                    strokeDashoffset="65"
                    className="text-primary stroke-2 transform -rotate-90 origin-center"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-bold">28.5%</div>
                  <div className="text-xs text-muted-foreground">
                    Conversion
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span>+2.4% from last week</span>
                </div>
                <span className="text-muted-foreground">Target: 30%</span>
              </div>
              <div className="flex flex-col text-xs text-muted-foreground gap-1">
                <div className="flex justify-between">
                  <span>Mobile</span>
                  <span>32.1%</span>
                </div>
                <div className="flex justify-between">
                  <span>Desktop</span>
                  <span>26.3%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Engagement</CardTitle>
          <CardDescription>30-day rolling activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <div className="relative h-full w-full">
              {/* Line chart */}
              <svg className="w-full h-full" viewBox="0 0 1000 300">
                <path
                  d="M0,240 Q100,180 150,200 T300,150 T450,190 T600,120 T750,180 T900,90 T1000,120"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                />
                <path
                  d="M0,240 Q100,180 150,200 T300,150 T450,190 T600,120 T750,180 T900,90 T1000,120 L1000,300 L0,300 Z"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.1"
                />

                {/* X-axis labels (simplified) */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <text
                    key={i}
                    x={i * 140 + 30}
                    y="295"
                    fontSize="12"
                    textAnchor="middle"
                    fill="currentColor"
                    className="text-muted-foreground"
                  >
                    {new Date(2023, 3, i * 4 + 1).toLocaleDateString(
                      undefined,
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default analytics;
