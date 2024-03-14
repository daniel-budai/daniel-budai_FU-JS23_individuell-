import { create } from "zustand";
import { Item } from "./store";

export type User = {
  name: string;
  email: string;
};

export type Order = {
  items: Item[];
  id?: string;
  date: string;
  totalAmount: number;
};

type UserState = {
  user: User | null;
  orderHistory: Order[];
  loginUser: (name: string, email: string) => void;
  persist: () => void;
  addToOrderHistory: (order: Order) => void;
};

function generateOrderNumber() {
  const chars = "123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const useUserStore = create<UserState>((set, get) => {
  const load = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const orderHistory = user
      ? JSON.parse(localStorage.getItem(`orderHistory-${user.email}`) || "[]")
      : [];
    return { user, orderHistory };
  };

  const persist = () => {
    const state = get();
    if (state.user) {
      localStorage.setItem(
        `orderHistory-${state.user.email}`,
        JSON.stringify(state.orderHistory)
      );
    } else {
      localStorage.removeItem("orderHistory");
    }
    localStorage.setItem("user", JSON.stringify(state.user));
  };

  return {
    ...load(),
    loginUser: (name, email) => {
      set(() => {
        return { user: { name, email } };
      });
      persist();
    },
    persist,
    addToOrderHistory: (order: Order) => {
      set((state) => {
        const orderWithId = { ...order, id: generateOrderNumber() };
        return { orderHistory: [...state.orderHistory, orderWithId] };
      });
      persist();
    },
  };
});
