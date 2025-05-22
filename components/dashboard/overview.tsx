import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Bike,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  MapPin,
  Pizza,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";

const Overview = () => {
  const [timeRange, setTimeRange] = useState("weekly");

  const topPizzas = [
    { name: "Pepperoni", orders: 342, percentage: 28 },
    { name: "Margherita", orders: 270, percentage: 22 },
    { name: "BBQ Chicken", orders: 190, percentage: 15 },
    { name: "Hawaiian", orders: 120, percentage: 10 },
  ];
  const recentOrders = [
    {
      id: "ORD-7263",
      customer: "Emily Chen",
      time: "2 mins ago",
      status: "Preparing",
      total: "$24.50",
    },
    {
      id: "ORD-7262",
      customer: "Mike Johnson",
      time: "15 mins ago",
      status: "Delivered",
      total: "$32.00",
    },
    {
      id: "ORD-7261",
      customer: "Sarah Williams",
      time: "34 mins ago",
      status: "Out for Delivery",
      total: "$18.75",
    },
    {
      id: "ORD-7260",
      customer: "David Lee",
      time: "1 hour ago",
      status: "Delivered",
      total: "$41.25",
    },
  ];

  // Add dummy data for monthly view
  const weeklyOrderData = [60, 45, 80, 75, 62, 87, 68];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const monthlyOrderData = [42, 58, 69, 53, 80, 45, 72, 91, 65, 55, 78, 82];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Determine which data to display based on current timeRange
  const displayData =
    timeRange === "weekly" ? weeklyOrderData : monthlyOrderData;
  const displayLabels = timeRange === "weekly" ? weekDays : months;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Summary Cards */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/30">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">$14,254.50</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ChevronUp className="h-4 w-4" />
              <span>+12.5% from last month</span>
            </div>
            <div className="h-1 w-full bg-muted mt-4 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[75%] rounded-full" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/30">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">+573</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ChevronUp className="h-4 w-4" />
              <span>+8.2% from last month</span>
            </div>
            <div className="h-1 w-full bg-muted mt-4 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[60%] rounded-full" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/30">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <Pizza className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center pt-1 text-xs text-red-500">
              <ChevronDown className="h-4 w-4" />
              <span>-2% from last hour</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-4">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span>Preparing (8)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Delivering (16)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/30">
            <CardTitle className="text-sm font-medium">
              Avg. Delivery Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">28m 14s</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ChevronUp className="h-4 w-4" />
              <span>Faster by 3m 5s</span>
            </div>
            <div className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[30%] rounded-full" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Orders Overview</CardTitle>
              <CardDescription>
                {timeRange === "weekly"
                  ? "Daily order volume for the past week"
                  : "Monthly order volume for the year"}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={timeRange === "weekly" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("weekly")}
              >
                Weekly
              </Button>
              <Button
                variant={timeRange === "monthly" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("monthly")}
              >
                Monthly
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Fixed chart container with explicit height */}
            <div className="h-[300px] w-full relative">
              <div className="absolute inset-x-0 bottom-8 flex items-end gap-1 h-[220px]">
                {/* Dynamic bar chart based on selected time range */}
                {displayData.map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div className="relative w-full group">
                      <div
                        className="w-full bg-primary/80 hover:bg-primary rounded-t transition-all cursor-pointer"
                        style={{
                          height: `${Math.min(height * 1.8, 220)}px`,
                        }}
                      />
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                        {timeRange === "weekly"
                          ? `${height} orders on ${displayLabels[i]}`
                          : `${height} orders in ${displayLabels[i]}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis labels below the chart */}
              <div className="absolute bottom-0 inset-x-0 flex">
                {displayLabels.map((label, i) => (
                  <div key={i} className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Top Selling Pizzas</CardTitle>
            <CardDescription>Most popular items this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPizzas.map((pizza) => (
                <div
                  key={pizza.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full p-1.5 bg-primary/10">
                      <Pizza className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{pizza.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {pizza.orders} orders
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium">
                      {pizza.percentage}%
                    </div>
                    <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${pizza.percentage * 2.5}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest incoming orders</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/dashboard/orders">View All</a>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2 bg-primary/10">
                    <Pizza className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{order.customer}</div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>{order.id}</span>
                      <span>•</span>
                      <span>{order.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-500/10 text-green-500"
                        : order.status === "Preparing"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {order.status}
                  </div>
                  <div className="font-medium">{order.total}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Deliveries Map Placeholder */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Active Deliveries</CardTitle>
          <CardDescription>
            Track delivery progress in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Map placeholder */}
          <div className="h-[300px] bg-muted/30 relative">
            {/* Simplified map illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-muted-foreground flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-2" />
                <span>Map view would appear here</span>
              </div>
            </div>

            {/* Delivery cards */}
            <div className="absolute top-4 right-4 w-64 bg-card rounded-lg border shadow-sm p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-2 bg-blue-500/10">
                  <Bike className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Alex T.</div>
                  <div className="text-xs text-muted-foreground">
                    Delivering 3 orders • ETA: 6 mins
                  </div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-muted mt-2 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[70%] rounded-full" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Overview;
