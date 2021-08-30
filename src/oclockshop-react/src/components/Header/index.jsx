import "./header.css";
import logo from "../../assets/images/Logo_OclockShop_transparente.png"

function Header(){
    return(
      
          <nav className="main-navbar">
              <img src={logo} alt="logo" className="logo" />
              <ul>
                  <li><a href="/">Ver Productos</a></li>
                  <li><a href="/">Categorías</a></li>
                  <li><a href="http://localhost:3050/">Volver al inicio</a></li>
              </ul>
          </nav>
          
          
          )
        }
        
        export default Header;
        