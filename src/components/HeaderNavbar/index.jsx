import "../../styles/components/CartIcon.scss";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import SearchBar from "../SearchBar";

function HeaderNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100">
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
    </Navbar>
  );
}

export default HeaderNavBar;
