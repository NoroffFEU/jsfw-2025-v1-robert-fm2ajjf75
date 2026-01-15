import { Button, Image, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <>
      {/* Mobile Card Layout */}
      <Card className="mb-3 d-md-none">
        <Card.Body>
          <Row>
            <Col xs={4}>
              <Image src={item.image.url} alt={item.title} fluid rounded />
            </Col>
            <Col xs={8}>
              <h2 className="h6">
                <Link to={`/product/${item.id}`}>{item.title}</Link>
              </h2>
              <p className="mb-2">
                <strong>${item.discountedPrice.toFixed(2)}</strong>
              </p>
              <div className="d-flex align-items-center gap-2 mb-2">
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
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
                onClick={() => onRemove(item.id)}
              >
                Remove
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Desktop Table Row */}
      <tr className="d-none d-md-table-row">
        <td>
          <div className="d-flex align-items-center">
            <Image
              src={item.image.url}
              alt={item.title}
              thumbnail
              style={{ width: "80px", marginRight: "1rem" }}
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
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              -
            </Button>
            <span className="mx-2">{item.quantity}</span>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </Button>
          </div>
        </td>
        <td>${(item.discountedPrice * item.quantity).toFixed(2)}</td>
        <td>
          <Button size="sm" variant="danger" onClick={() => onRemove(item.id)}>
            Remove
          </Button>
        </td>
      </tr>
    </>
  );
}

export default CheckoutItem;
