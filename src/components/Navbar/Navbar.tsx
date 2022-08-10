import {
  NavLink
} from 'react-router-dom';
import { Nav } from 'reactstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from '../Button/Button';
import { adventures, hikings, about } from "../../data/navegacion";


export const Navbar = () => {

  return (
    <div className=''>
      <div id='invisible'>

      </div>

      <Nav className='navbar navbar-expand-lg backgroundNav fixed-top '>
        <div className='container-fluid container justify-content-between'>

          <div className='logo'>
            <h4>BEOUTDOORS</h4>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className=""><GiHamburgerMenu color='white' size={"30px"} /></span>
          </button>

          <div className="offcanvas offcanvas-end " tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            {/* informacion que se mostrara en celular */}

            <div className="offcanvas-body ">
              <div className='logo'>

              </div>
              <div className='offcanvas-body'>
                <ul className='navbar-nav '>
                  <li data-bs-dismiss="offcanvas" className='nav-item'><Button className='nav-link' redirection="/" text="Inicio" scrollTop={true} ></Button></li>
                  <li className="nav-item dropdown" >
                    <a className="nav-link dropdown-toggle" href="adventures" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Adventures
                    </a>
                    <ul className='dropdown-menu'>
                      {
                        adventures.map((adventures, index) => (
                          <li key={adventures.replace(/ /g, "")} data-bs-dismiss="offcanvas">
                            <Button className='dropdown-item' redirection={adventures.replace(/ /g, "")} text={adventures} scrollTop={true} ></Button>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <a className="nav-link dropdown-toggle" href="hikings" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hikings
                    </a>
                    <ul className='dropdown-menu'>
                      {
                        hikings.map((hiking, index) => (
                          <li key={hiking.replace(/ /g, "")} data-bs-dismiss="offcanvas">
                            <Button className='dropdown-item' redirection={hiking.replace(/ /g, "")} text={hiking} scrollTop={true} ></Button>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul className='dropdown-menu'>
                      {
                        about.map((about, index) => (
                          <li key={about.replace(/ /g, "")} data-bs-dismiss="offcanvas">
                            <Button className='dropdown-item' redirection={about.replace(/ /g, "")} text={about} scrollTop={true} ></Button>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li data-bs-dismiss="offcanvas" className='nav-item'><Button className='nav-link' redirection="ContactUs" text="Contact us" scrollTop={true} ></Button> </li>
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    <Button
                      className="nav-link"
                      redirection="House"
                      text="Airbnb House"
                      scrollTop={true}
                    ></Button>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Nav>

      {/* Este div hace que las paginas se coloquen un poco 
                  abajo para que no afecten el diseño del navbar */}
      <div className='paginasContainer'>
      </div>



    </div>
  )
}
