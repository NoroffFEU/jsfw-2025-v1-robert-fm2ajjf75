// This component displays detailed information about a product using bootstrap.
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Badge,
  Card,
  ListGroup,
} from "react-bootstrap";
import getDiscountInfo from "../../../utils/getdiscountinfo";

function ProductDetailRenderer({ product, onAddToCart }) {
  const {
    title,
    description,
    price,
    discountedPrice,
    image,
    rating,
    reviews = [],
  } = product;

  const discountInfo = getDiscountInfo(price, discountedPrice);
  const hasDiscount = discountInfo !== null && price !== discountedPrice;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div className="product-detail-container">
            {rating > 0 && (
              <div className="review-rating-badge">
                <Badge bg="warning" text="dark">
                  ⭐ {rating}/5
                </Badge>
              </div>
            )}
            <Image
              src={image.url}
              alt={image.alt || title}
              fluid
              rounded
              className="product-detail-image"
            />
          </div>
        </Col>
        <Col md={6}>
          <h1 className="mb-4 h3">{title}</h1>
          <p className="text-muted mb-4">{description}</p>

          <div className="mb-4">
            {hasDiscount ? (
              <>
                <h3 className="text-success">
                  ${discountedPrice.toFixed(2)}
                  <Badge bg="danger" className="ms-2">
                    {discountInfo.discountPercentage}% OFF
                  </Badge>
                </h3>
                <p className="text-decoration-line-through text-muted">
                  Original: ${price.toFixed(2)}
                </p>
                <p className="text-success">
                  You save: ${discountInfo.discountAmount}
                </p>
              </>
            ) : (
              <h3>${discountedPrice.toFixed(2)}</h3>
            )}
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => onAddToCart(product)}
            className="w-50 mb-4"
          >
            Add to Cart
          </Button>
        </Col>
      </Row>

      {reviews && reviews.length > 0 && (
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Header>
                <h2 className="h5">Customer Reviews ({reviews.length})</h2>
              </Card.Header>
              <ListGroup variant="flush">
                {reviews.map((review) => (
                  <ListGroup.Item key={review.id}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <strong>{review.username}</strong>
                      <Badge bg="warning" text="dark">
                        ⭐ {review.rating}/5
                      </Badge>
                    </div>
                    <p className="mb-0 review-description">
                      {review.description}
                    </p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductDetailRenderer;
