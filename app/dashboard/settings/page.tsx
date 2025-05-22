"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Bell, Moon, Sun, User, Smartphone, Shield, Eye } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    newOrders: true,
    orderUpdates: true,
    deliveryStatus: true,
    marketing: false,
  });

  // Dummy save function
  const handleSave = () => {
    // This would normally save to backend
    alert("Settings saved! (This is a dummy action)");
  };

  if (status === "loading") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="mt-2 h-4 w-32" />
          </div>
        </div>
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  return (
    <div className="container max-w-6xl space-y-4 p-8 pt-6 py-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="flex w-full flex-col items-center gap-4 rounded-lg border bg-card p-6 shadow-sm md:max-w-[240px]">
          {session?.user?.image ? (
            <div className="relative h-24 w-24">
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                fill
                className="rounded-full border-4 border-background object-cover"
              />
            </div>
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <User className="h-12 w-12 text-primary" />
            </div>
          )}
          <div className="text-center">
            <h3 className="text-lg font-medium">{session?.user?.name}</h3>
            <p className="text-sm text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
          <div className="mt-2 w-full">
            <p className="text-xs text-muted-foreground text-center">
              Connected via Google
            </p>
          </div>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="general">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>General</span>
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2"
              >
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                <span>Appearance</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    This information is provided by Google.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input
                      id="name"
                      defaultValue={session?.user?.name || ""}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      defaultValue={session?.user?.email || ""}
                      disabled
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    onClick={() =>
                      alert(
                        "To change these details, please update your Google account."
                      )
                    }
                  >
                    Manage Google Account
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                  <CardDescription>
                    Manage your security preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">
                        Two-factor Authentication
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account.
                      </p>
                    </div>
                    <Switch id="two-factor" disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sessions">Active Sessions</Label>
                      <p className="text-sm text-muted-foreground">
                        Manage devices where you&apos;re currently logged in.
                      </p>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Choose what notifications you receive.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="new-orders">New Orders</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when a new order is placed.
                      </p>
                    </div>
                    <Switch
                      id="new-orders"
                      checked={notifications.newOrders}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          newOrders: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="order-updates">Order Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when an order status changes.
                      </p>
                    </div>
                    <Switch
                      id="order-updates"
                      checked={notifications.orderUpdates}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          orderUpdates: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="delivery-status">Delivery Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about delivery progress.
                      </p>
                    </div>
                    <Switch
                      id="delivery-status"
                      checked={notifications.deliveryStatus}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          deliveryStatus: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing">
                        Marketing Communications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about new features and promotions.
                      </p>
                    </div>
                    <Switch
                      id="marketing"
                      checked={notifications.marketing}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          marketing: checked,
                        })
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>Save Preferences</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Alerts</CardTitle>
                  <CardDescription>
                    Choose how you want to receive delivery alerts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-muted-foreground" />
                    <Label htmlFor="sms">SMS Notifications</Label>
                    <div className="flex-1"></div>
                    <Switch id="sms" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <Label htmlFor="push">Push Notifications</Label>
                    <div className="flex-1"></div>
                    <Switch id="push" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Preferences</CardTitle>
                  <CardDescription>
                    Customize how Pizza Dashboard looks.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="theme-select">Color Theme</Label>
                    <Select
                      value={theme}
                      onValueChange={(value) => setTheme(value)}
                    >
                      <SelectTrigger
                        id="theme-select"
                        className="w-full md:w-[200px]"
                      >
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light" className="flex items-center">
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4" />
                            <span>Light</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="dark" className="flex items-center">
                          <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4" />
                            <span>Dark</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="system" className="flex items-center">
                          <div className="flex items-center gap-2">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-white to-black text-[10px] font-bold">
                              A
                            </span>
                            <span>System</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="font-size">Font Size</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm">
                        Small
                      </Button>
                      <Button variant="default" size="sm">
                        Medium
                      </Button>
                      <Button variant="outline" size="sm">
                        Large
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animations">Animations</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable smooth animations throughout the dashboard.
                      </p>
                    </div>
                    <Switch id="animations" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
