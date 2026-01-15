import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <Container className="my-5 text-center">
      <h1 className="mb-4">Checkout</h1>
      <h2>Your cart is empty</h2>
      <p className="text-muted mb-4">Add some products to get started!</p>
      <Button as={Link} to="/" variant="primary">
        Continue Shopping
      </Button>
    </Container>
  );
}

export default EmptyCart;
