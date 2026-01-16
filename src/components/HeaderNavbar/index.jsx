import "../../styles/components/CartIcon.scss";
import "../../styles/components/NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import SearchBar from "../SearchBar";
import HeaderCartIcon from "../HeaderCartIcon";

function HeaderNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100 me-5 ms-5">
      <Container fluid>
        <Navbar.Brand className="me-5" as={Link} to="/">
          Everything Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-center" role="search">
            <SearchBar />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <div className="cart-icon order-1 ">
        <HeaderCartIcon />
      </div>
    </Navbar>
  );
}

export default HeaderNavBar;
