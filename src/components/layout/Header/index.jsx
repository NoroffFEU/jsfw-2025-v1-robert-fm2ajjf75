import HeaderNavBar from "../../HeaderNavbar";
import HeaderCartIcon from "../../HeaderCartIcon";

function Header() {
  return (
    <header>
      <HeaderNavBar />
      <div className="cart-icon bg-body-tertiary">
        <HeaderCartIcon />
      </div>
    </header>
  );
}

export default Header;
