import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutSummary({ total, onCheckout }) {
  return (
    <>
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
          onClick={onCheckout}
          className="w-100 w-sm-auto"
        >
          Checkout
        </Button>
      </div>
    </>
  );
}

export default CheckoutSummary;
