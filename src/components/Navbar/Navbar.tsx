import { Nav } from 'reactstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from '../Button/Button';
import { adventures, hikings } from "../../data/navegacion";
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

  return (
    <div className=''>
      <div id='invisible'></div>

      <Nav id='navbar' className='navbar navbar-expand-lg backgroundNav'>
        <div className='container-fluid container justify-content-between'>

          <div className='logo'>
            <h4><a href="/BEOUTDOOR/">BEOUTDOORS</a></h4>
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
                  <li data-bs-dismiss="offcanvas" className='nav-item'>
                  {/* <Button className='nav-link' redirection="" text="Inicio" scrollTop={true} ></Button> */}
                  {/* <NavLink className='nav-link btn' to={'/BEOUTDOOR'}>Inicio</NavLink> */}
                  <a className='nav-link btn' href="/BEOUTDOOR/">Inicio</a>
                  {/* <Link className='nav-link btn' to={'/BEOUTDOOR'}>Inicio</Link> */}
                  </li>
                  <li className="nav-item dropdown" >
                    <a className="nav-link" role="button">
                      Adventures
                    </a>
                    <ul className='dropdown-menu'>
                      {
                        adventures.map((adventures, index) => (
                          <li key={adventures.replace(/ /g, "")} data-bs-dismiss="offcanvas">
                            {/* <Button className='dropdown-item' redirection={adventures.replace(/ /g, "")} text={adventures} scrollTop={true} ></Button> */}
                            <a className='dropdown-item btn' href={`/BEOUTDOOR/${adventures.replace(/ /g, "")}`}>{adventures}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className='nav-item dropdown'>
                    <a className="nav-link dropdown-toggle" role="button"  >
                      Hikings
                    </a>
                    <ul className='dropdown-menu'>
                      {
                        hikings.map((hiking, index) => (
                          <li key={hiking.replace(/ /g, "")} data-bs-dismiss="offcanvas">
                            {/* <Button className='dropdown-item' redirection={hiking.replace(/ /g, "")} text={hiking} scrollTop={true} ></Button> */}
                            <a className='dropdown-item btn' href={`/BEOUTDOOR/${hiking.replace(/ /g, "")}`}>{hiking}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    <Button className='nav-link' redirection={"About"} text={"About"} scrollTop={true} ></Button>
                  </li>
                  <li data-bs-dismiss="offcanvas" className='nav-item'>
                    {/* <Button
                      className='nav-link'
                      redirection="ContactUs/newMessage"
                      text="Contact us"
                      scrollTop={true}
                    ></Button> */}
                    <a className='nav-link btn' href="/BEOUTDOOR/ContactUs/newMessage">Contact us</a>
                  </li>
                  
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    {/* <Button
                      className="nav-link"
                      redirection="House"
                      text="Airbnb House"
                      scrollTop={true}
                    ></Button> */}
                    <a className='nav-link btn' href="/BEOUTDOOR/House"> Casa Sunrise</a>
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
