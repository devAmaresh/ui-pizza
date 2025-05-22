"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Overview from "@/components/dashboard/overview";
import Analytics from "@/components/dashboard/analytics";
import Reports from "@/components/dashboard/reports";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Pizza, Calendar } from "lucide-react";
import { useState } from "react";

export default function DashboardHome() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("overview");

  // Loading state
  if (status === "loading") {
    return (
      <div className="space-y-4 p-8 pt-6">
        <Skeleton className="h-9 w-[250px]" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-[120px] w-full" />
            ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Skeleton className="h-[400px] md:col-span-4" />
          <Skeleton className="h-[400px] md:col-span-3" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, {session?.user?.name?.split(" ")[0] || "User"}!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Today
          </Button>
          <Button variant="default" size="sm">
            <Pizza className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="overview"
        className="space-y-4"
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
         
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Overview />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Analytics />
        </TabsContent>

        <TabsContent
          value="reports"
          className="space-y-4"
        >
          <Reports />
        </TabsContent>

       
      </Tabs>
    </div>
  );
}
