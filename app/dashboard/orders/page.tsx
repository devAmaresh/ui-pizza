import { OrdersTable } from "@/components/dashboard/orders-table";

export default function OrdersPage() {
  return (
    <div className="max-w-7xl space-y-4 p-8 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Pizza Orders</h1>
        <p className="text-muted-foreground">
          View and manage all your pizza delivery orders
        </p>
      </div>

      <OrdersTable />
    </div>
  );
}