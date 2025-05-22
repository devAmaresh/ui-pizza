"use client";

import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";

export function ClientSideLayout({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <main 
      className={cn(
        "flex-1 overflow-y-auto p-0 md:p-6 pt-16 md:pt-6 transition-all duration-300",
        // Apply different left padding or margin based on sidebar state
        collapsed ? "md:pl-[90px]" : "md:pl-6"
      )}
    >
      {children}
    </main>
  );
}