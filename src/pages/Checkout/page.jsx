import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/Cart";
import CheckoutItem from "../../components/CheckoutItem";
import CheckoutTable from "../../components/CheckoutTable";
import CheckoutSummary from "../../components/CheckoutSummary";
import EmptyCart from "../../components/EmptyCart";

function Checkout() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
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

      {/* Mobile Card View */}
      <div className="d-md-none">
        {cart.map((item) => (
          <CheckoutItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      {/* Desktop Table View */}
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
