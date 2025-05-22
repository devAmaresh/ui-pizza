import { Sidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { ClientSideLayout } from "@/components/layout/client-side-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-radial-light dark:bg-radial-dark transition-colors duration-500">
        <Sidebar />
        <ClientSideLayout>{children}</ClientSideLayout>
      </div>
    </SidebarProvider>
  );
}
