"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  ArrowUpDown
} from "lucide-react";
import { PizzaOrder, OrderStatus } from "@/lib/data";
import { useOrdersStore } from "@/lib/store";

export function OrdersTable() {
  const { 
    filteredOrders, 
    statusFilter, 
    sortField, 
    sortDirection,
    setSortField, 
    setStatusFilter 
  } = useOrdersStore();
  
  const [searchTerm, setSearchTerm] = useState(() => "");

  // Apply search filter locally
  const displayedOrders = searchTerm 
    ? filteredOrders.filter(order => 
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.pizzaType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredOrders;

  const renderSortIcon = (field: string) => {
    if (sortField !== field) return <ArrowUpDown className="ml-2 h-4 w-4" />;
    return sortDirection === 'asc' 
      ? <ChevronUp className="ml-2 h-4 w-4" />
      : <ChevronDown className="ml-2 h-4 w-4" />;
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search orders..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value as OrderStatus | "All")}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Orders</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Preparing">Preparing</SelectItem>
            <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="cursor-pointer"
                onClick={() => setSortField('id')}
              >
                <div className="flex items-center">
                  Order ID
                  {renderSortIcon('id')}
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => setSortField('customerName')}
              >
                <div className="flex items-center">
                  Customer
                  {renderSortIcon('customerName')}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => setSortField('pizzaType')}
              >
                <div className="flex items-center">
                  Pizza Type
                  {renderSortIcon('pizzaType')}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => setSortField('quantity')}
              >
                <div className="flex items-center justify-end">
                  Qty
                  {renderSortIcon('quantity')}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => setSortField('orderDate')}
              >
                <div className="flex items-center">
                  Order Date
                  {renderSortIcon('orderDate')}
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              displayedOrders.map((order) => (
                <TableRow key={order.id} className="group">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.pizzaType}</TableCell>
                  <TableCell className="text-right">{order.quantity}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {displayedOrders.length} of {filteredOrders.length} orders
      </div>
    </div>
  );
}