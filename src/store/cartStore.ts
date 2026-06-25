import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/cart";

type CartStore = {
  items: CartItem[];
  lastAddedAt: number | null;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: number, volume: string) => void;
  updateQuantity: (productId: number, volume: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      lastAddedAt: null,
      addItem: (item) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && i.volume === item.volume,
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId && i.volume === item.volume
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
              lastAddedAt: Date.now(),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
            lastAddedAt: Date.now(),
          };
        });
      },
      removeItem: (productId, volume) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.volume === volume),
          ),
        }));
      },
      updateQuantity: (productId, volume, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, volume);
          return;
        }

        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.volume === volume
              ? { ...i, quantity }
              : i,
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "parfume-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export const selectTotalItems = (state: CartStore) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalPrice = (state: CartStore) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
