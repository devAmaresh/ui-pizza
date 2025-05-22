import { format } from 'date-fns';

export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export type PizzaOrder = {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: OrderStatus;
};

// Generate random dates between 2 weeks ago and now
const getRandomDate = () => {
  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
  const randomTimestamp = twoWeeksAgo.getTime() + Math.random() * (now.getTime() - twoWeeksAgo.getTime());
  return format(new Date(randomTimestamp), 'yyyy-MM-dd HH:mm');
};

const pizzaTypes = [
  'Margherita',
  'Pepperoni',
  'Veggie Supreme',
  'Hawaiian',
  'BBQ Chicken',
  'Meat Lovers',
  'Buffalo Chicken',
  'Four Cheese',
  'Mushroom & Truffle',
  'Pesto & Goat Cheese'
];

const customerNames = [
  'John Doe',
  'Jane Smith',
  'Robert Johnson',
  'Emily Davis',
  'Michael Brown',
  'Sarah Wilson',
  'David Miller',
  'Lisa Anderson',
  'James Taylor',
  'Jennifer Martinez',
  'Carlos Rodriguez',
  'Sophia Lee',
  'Kevin Turner',
  'Amanda White',
  'Daniel Harris'
];

const statuses: OrderStatus[] = ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'];

// Generate mock pizza orders
export const generateMockOrders = (count: number): PizzaOrder[] => {
  return Array.from({ length: count }, (_, index) => {
    // More delivered orders than other statuses for a realistic distribution
    let statusIndex: number;
    const rand = Math.random();
    if (rand < 0.4) {
      statusIndex = 3; // 40% Delivered
    } else if (rand < 0.6) {
      statusIndex = 0; // 20% Pending
    } else if (rand < 0.8) {
      statusIndex = 1; // 20% Preparing
    } else if (rand < 0.95) {
      statusIndex = 2; // 15% Out for Delivery
    } else {
      statusIndex = 4; // 5% Cancelled
    }

    return {
      id: `PZA${String(index + 1).padStart(3, '0')}`,
      customerName: customerNames[Math.floor(Math.random() * customerNames.length)],
      pizzaType: pizzaTypes[Math.floor(Math.random() * pizzaTypes.length)],
      quantity: Math.floor(Math.random() * 4) + 1,
      orderDate: getRandomDate(),
      status: statuses[statusIndex]
    };
  });
};

// Generate 50 mock orders
export const mockOrders: PizzaOrder[] = generateMockOrders(50);