import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuantityControl from "../QuantityControl";

function CheckoutItem({ item, onUpdateQuantity, onRemove }) {
  const subtotal = (item.discountedPrice * item.quantity).toFixed(2);

  return (
    <tr className="checkout-item">
      <td data-label="Product">
        <div className="d-flex align-items-center">
          <Image
            src={item.image.url}
            alt={item.title}
            thumbnail
            className="checkout-item__image"
          />
          <Link to={`/product/${item.id}`}>{item.title}</Link>
        </div>
      </td>
      <td data-label="Price">${item.discountedPrice.toFixed(2)}</td>
      <td data-label="Quantity">
        <QuantityControl
          quantity={item.quantity}
          onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
          onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
        />
      </td>
      <td data-label="Subtotal">${subtotal}</td>
      <td data-label="Actions">
        <Button size="sm" variant="danger" onClick={() => onRemove(item.id)}>
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default CheckoutItem;
