"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Pizza,
  LayoutDashboard,
  ClipboardList,
  Settings,
  LogOut,
  ChevronLeft,
  ListOrderedIcon,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Sidebar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebar();
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setCollapsed(!collapsed); // This now updates the shared context
    }
  };
  // Check if screen is mobile on mount and when resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Set up event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [pathname, isMobile]);

  // Mobile menu button (outside the sidebar)
  const MobileMenuButton = () => (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleSidebar}
      className="fixed left-4 top-4 z-50 md:hidden"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );

  const routes = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Pizza Orders",
      icon: <ListOrderedIcon className="h-5 w-5" />,
      href: "/dashboard/orders",
      active: pathname === "/dashboard/orders",
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ];

  return (
    <>
      <MobileMenuButton />

      {/* Backdrop for mobile - covers the screen when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "flex h-full flex-col border-r bg-card transition-all duration-300 z-50",
          // Mobile sidebar positioning
          isMobile && "fixed left-0 top-0 bottom-0 p-4 shadow-xl",
          // Desktop sidebar styling
          !isMobile && "relative p-2",
          // Width control
          collapsed && !isMobile ? "w-[70px]" : "w-[240px]",
          // Show/hide for mobile
          isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between px-2 py-2">
          {(!collapsed || isMobile) && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <Pizza className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Pizza</span>
            </Link>
          )}
          {collapsed && !isMobile && (
            <Pizza className="mx-auto h-6 w-6 text-primary" />
          )}

          {/* Only show collapse button on desktop */}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className={cn(
                "absolute -right-4 top-6 h-8 w-8 rounded-full border bg-background",
                collapsed && "rotate-180"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Close button for mobile - top right */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex h-10 items-center gap-2 rounded-md px-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                route.active && "bg-accent text-accent-foreground",
                collapsed && !isMobile && "justify-center px-0"
              )}
            >
              {route.icon}
              {(!collapsed || isMobile) && <span>{route.label}</span>}
            </Link>
          ))}
        </div>

        {/* Theme Toggle - Fixed version */}
        <div
          className={cn(
            "mt-auto mb-4",
            collapsed && !isMobile ? "px-2" : "px-3"
          )}
        >
          <div
            className={cn(
              "flex items-center rounded-md transition-colors",
              collapsed && !isMobile
                ? "justify-center h-10"
                : "h-10 px-3  hover:bg-muted/80 justify-between"
            )}
          >
            {(!collapsed || isMobile) && (
              <span className="text-sm font-medium">Theme</span>
            )}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md",
                theme === "dark" ? "text-yellow-400" : "text-sky-500"
              )}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "border-t border-border pt-4",
            collapsed && !isMobile ? "p-2" : "p-4"
          )}
        >
          {status === "authenticated" && session?.user ? (
            <div className="flex flex-col space-y-4">
              <div
                className={cn(
                  "flex items-center",
                  collapsed && !isMobile ? "justify-center" : "gap-3"
                )}
              >
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="h-10 w-10 rounded-full"
                    height={40}
                    width={40}
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {session.user.name?.charAt(0) || "U"}
                  </div>
                )}
                {(!collapsed || isMobile) && (
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {session.user.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {session.user.email}
                    </span>
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
                className={cn(
                  collapsed && !isMobile
                    ? "w-10 h-10 p-0 justify-center rounded-full"
                    : "w-full justify-start"
                )}
              >
                <LogOut
                  className={cn("h-4 w-4", (!collapsed || isMobile) && "mr-2")}
                />
                {(!collapsed || isMobile) && "Sign Out"}
              </Button>
            </div>
          ) : (
            <div className="flex justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="h-10 w-10 rounded-full bg-muted" />
              {(!collapsed || isMobile) && (
                <div className="space-y-1">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}