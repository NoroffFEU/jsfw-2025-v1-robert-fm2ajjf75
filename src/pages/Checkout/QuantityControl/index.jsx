import { Button } from "react-bootstrap";

function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <Button
        size="sm"
        variant="outline-secondary"
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        -
      </Button>
      <span className="mx-2">{quantity}</span>
      <Button
        size="sm"
        variant="outline-secondary"
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        +
      </Button>
    </div>
  );
}

export default QuantityControl;
