import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart";
import checkCircle from "../../assets/check-circle.svg";

function CheckoutSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} className="text-center">
          <div className="p-5 bg-light rounded">
            <div className="mb-4">
              <img
                src={checkCircle}
                alt="Success"
                width="80"
                height="80"
                className="text-success"
              />
            </div>
            <h1 className="text-success mb-3">Order Successful!</h1>
            <p className="lead mb-4">
              Thank you for your purchase. Your order has been confirmed and
              will be processed shortly.
            </p>
            <Link to="/">
              <Button variant="primary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutSuccess;
