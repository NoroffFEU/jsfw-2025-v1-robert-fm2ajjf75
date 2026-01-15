import "../../styles/components/SearchBar.scss";
import { useMemo, useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/Products";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { products } = useProducts();

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((product) => product.title.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, products]);

  function handleSelect(productId) {
    setQuery("");
    navigate(`/product/${productId}`);
  }

  return (
    <div className="search-bar">
      <Form.Control
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />

      {matches.length > 0 && (
        <ListGroup className="search-results mt-1">
          {matches.map((product) => (
            <ListGroup.Item
              key={product.id}
              action
              onClick={() => handleSelect(product.id)}
            >
              {product.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default SearchBar;
