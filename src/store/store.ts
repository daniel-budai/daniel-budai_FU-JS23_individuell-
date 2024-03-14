import { create } from "zustand";
import { Menu } from "../types/menu";

export type Item = {
  id: string;
  title: string;
  desc: string;
  price: number;
  quantity: number;
};

type State = {
  items: Item[];
  addItem: (menu: Menu) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
};

export const useStore = create<State>()((set, get) => ({
  items: [],
  addItem: (menu) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === menu.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...menu, quantity: 1 });
      }
      return { items: [...state.items] };
    }),
  increaseQuantity: (id) =>
    set((state) => {
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
      return { items: [...state.items] };
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      return { items: [...state.items] };
    }),
  getTotalPrice: () =>
    get().items.reduce((acc: number, item: Item) => {
      return acc + item.price * item.quantity;
    }, 0),

  getTotalQuantity: () =>
    get().items.reduce((acc: number, item: Item) => {
      return acc + item.quantity;
    }, 0),
}));
