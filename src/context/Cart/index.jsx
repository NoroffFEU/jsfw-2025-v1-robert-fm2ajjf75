import { createContext, useContext, useState, useEffect } from "react";
import { saveToLocalStorage } from "../../utils/savetolocalstorage";
import { loadFromLocalStorage } from "../../utils/loadfromlocalstorage";

const CartContext = createContext();
const CART_STORAGE_KEY = "shopping_cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    () => loadFromLocalStorage(CART_STORAGE_KEY) || [],
  );

  useEffect(() => {
    saveToLocalStorage(CART_STORAGE_KEY, cart);
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  );

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
