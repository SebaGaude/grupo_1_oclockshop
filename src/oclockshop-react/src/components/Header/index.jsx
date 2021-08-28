import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/images/Logo_OclockShop_transparente.png"

function Header(){
    return(
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
                OclockShop
              </Navbar.Brand>
            </Container>
          </Navbar>
      </>
      
    )
}

export default Header;


<Navbar.Brand href="#home"> <img className="logo" src={logo} alt="logo" /> </Navbar.Brand>