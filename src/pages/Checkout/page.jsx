import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart, selectTotal } from "../../context/Cart";
import CheckoutTable from "./CheckoutTable";
import CheckoutSummary from "./CheckoutSummary";
import EmptyCart from "./EmptyCart";

function Checkout() {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const total = useCart(selectTotal);
  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout-success");
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Checkout</h1>
      <CheckoutTable
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      <CheckoutSummary total={total} onCheckout={handleCheckout} />
    </Container>
  );
}

export default Checkout;
