import { create } from "zustand";

export const useCart = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));

export const selectTotal = (state) =>
  state.cart.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  );

export const selectItemCount = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);
