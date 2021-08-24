import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/images/Logo_OclockShop_transparente.png"

function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"> <img className="logo" src={logo} alt="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Categorías</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Ingresá" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ingresá a tu cuenta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;