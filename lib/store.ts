import { create } from 'zustand';
import { mockOrders, PizzaOrder, OrderStatus } from './data';

type SortField = 'id' | 'customerName' | 'pizzaType' | 'quantity' | 'orderDate';

interface OrdersState {
  orders: PizzaOrder[];
  filteredOrders: PizzaOrder[];
  sortField: SortField | null;
  sortDirection: 'asc' | 'desc';
  statusFilter: OrderStatus | 'All';
  
  // Actions
  setOrders: (orders: PizzaOrder[]) => void;
  setSortField: (field: SortField) => void;
  setStatusFilter: (status: OrderStatus | 'All') => void;
  
  // Derived state
  totalOrders: () => number;
  pendingOrders: () => number;
  deliveredOrders: () => number;
}

export const useOrdersStore = create<OrdersState>((set, get) => ({
  orders: mockOrders,
  filteredOrders: mockOrders,
  sortField: null,
  sortDirection: 'asc',
  statusFilter: 'All',
  
  setOrders: (orders) => set({ orders, filteredOrders: orders }),
  
  setSortField: (field) => set((state) => {
    const newDirection = 
      state.sortField === field && state.sortDirection === 'asc' ? 'desc' : 'asc';
    
    const sortedOrders = [...state.filteredOrders].sort((a, b) => {
      if (field === 'orderDate') {
        const dateA = new Date(a[field]).getTime();
        const dateB = new Date(b[field]).getTime();
        return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }
      
      if (field === 'quantity') {
        return newDirection === 'asc' 
          ? a[field] - b[field] 
          : b[field] - a[field];
      }
      
      // Handle string fields
      const valueA = String(a[field]).toLowerCase();
      const valueB = String(b[field]).toLowerCase();
      
      if (newDirection === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    
    return {
      sortField: field,
      sortDirection: newDirection,
      filteredOrders: sortedOrders
    };
  }),
  
  setStatusFilter: (status) => set((state) => {
    let filtered = state.orders;
    
    if (status !== 'All') {
      filtered = state.orders.filter(order => order.status === status);
    }
    
    // Apply existing sort if any
    if (state.sortField) {
      const { sortField, sortDirection } = state;
      filtered = [...filtered].sort((a, b) => {
        if (sortField === 'orderDate') {
          const dateA = new Date(a[sortField]).getTime();
          const dateB = new Date(b[sortField]).getTime();
          return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
        }
        
        if (sortField === 'quantity') {
          return sortDirection === 'asc' 
            ? a[sortField] - b[sortField] 
            : b[sortField] - a[sortField];
        }
        
        // Handle string fields
        const valueA = String(a[sortField]).toLowerCase();
        const valueB = String(b[sortField]).toLowerCase();
        
        if (sortDirection === 'asc') {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      });
    }
    
    return { statusFilter: status, filteredOrders: filtered };
  }),
  
  // Derived state (getters)
  totalOrders: () => get().orders.length,
  pendingOrders: () => get().orders.filter(order => 
    order.status === 'Pending' || order.status === 'Preparing' || order.status === 'Out for Delivery'
  ).length,
  deliveredOrders: () => get().orders.filter(order => order.status === 'Delivered').length,
}));