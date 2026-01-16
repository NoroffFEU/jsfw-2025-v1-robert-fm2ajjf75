import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useCart, selectItemCount } from "../../context/Cart";

function HeaderCartIcon() {
  const itemCount = useCart(selectItemCount);

  return (
    <Link to="/cart" className="position-relative">
      🛒
      {itemCount > 0 && (
        <Badge
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {itemCount}
        </Badge>
      )}
    </Link>
  );
}

export default HeaderCartIcon;
