import "./header.css";
import logo from "../../assets/images/Logo_OclockShop_transparente.png"

function Header(){
    return(
      
          <nav className="main-navbar">
              <ul>
                  <li><a href="/"><img src={logo} alt="logo" className="logo" /></a></li>
                  <li><a href="/">Productos</a></li>
                  <li><a href="/">Categorías</a></li>
                  <li><a href="/">Volver al inicio</a></li>
              </ul>
          </nav>
          
          
          )
        }
        
        export default Header;
        
        
{/* <Navbar.Brand href="#home"> <img className="logo" src={logo} alt="logo" /> </Navbar.Brand> */}
        {/* <Navbar bg="dark" variant="dark">
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
          </Navbar> */}