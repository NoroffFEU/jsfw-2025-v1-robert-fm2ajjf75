import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image.url} alt={product.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          ${product.price.toFixed(2)}
        </Card.Text>
        <Button as={Link} to={`/product/${product.id}`} variant="primary">
          View Product
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
