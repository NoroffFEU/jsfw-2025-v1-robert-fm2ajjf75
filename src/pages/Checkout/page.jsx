import { Container, Button, Image, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/Cart";
import "../../styles/components/Checkout.scss";

function Checkout() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout-success");
  }

  if (cart.length === 0) {
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

  return (
    <Container className="my-5">
      <h1 className="mb-4">Checkout</h1>
      <div className="d-md-none">
        {cart.map((item) => (
          <Card key={item.id} className="mb-3">
            <Card.Body>
              <Row>
                <Col xs={4}>
                  <Image src={item.image.url} alt={item.title} fluid rounded />
                </Col>
                <Col xs={8}>
                  <h2 className="h5">
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                  </h2>
                  <p className="mb-2">
                    <strong>${item.discountedPrice.toFixed(2)}</strong>
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <p className="mb-2">
                    Subtotal:{" "}
                    <strong>
                      ${(item.discountedPrice * item.quantity).toFixed(2)}
                    </strong>
                  </p>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="d-none d-md-block table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      thumbnail
                      className="checkout-media"
                    />
                    <div>
                      <Link to={`/product/${item.id}`}>{item.title}</Link>
                    </div>
                  </div>
                </td>
                <td>${item.discountedPrice.toFixed(2)}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td>${(item.discountedPrice * item.quantity).toFixed(2)}</td>
                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="mt-3">
        <Card.Body>
          <h3 className="text-end h4">Total: ${total.toFixed(2)}</h3>
        </Card.Body>
      </Card>

      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 gap-3">
        <Button
          as={Link}
          to="/"
          variant="secondary"
          className="w-100 w-sm-auto"
        >
          Continue Shopping
        </Button>
        <Button
          variant="success"
          onClick={handleCheckout}
          className="w-100 w-sm-auto"
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
}

export default Checkout;
