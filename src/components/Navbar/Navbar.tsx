import {
    BrowserRouter,
    NavLink
} from 'react-router-dom';
import { RouterNav } from './components/RouterNav';
import { Nav } from 'reactstrap';
export const Navbar = () => {

    return (
        <div className=''>
            <BrowserRouter>
                <Nav className='navbar navbar-expand-lg backgroundNav fixed-top '>
                    <div className='container-fluid container justify-content-between'>
                        
                        <div className='logo'>
                            <h4>LOGO</h4>
                        </div>

                        <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
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
                                        <li data-bs-dismiss="offcanvas" className='nav-item'><NavLink className="nav-link" to="/">Inicio</NavLink></li>
                                        <li className="nav-item dropdown" >
                                            <a className="nav-link dropdown-toggle" href="adventures" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Adventures
                                            </a>
                                            <ul className='dropdown-menu'>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/rafting">Rafting</NavLink> </li>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/safari">Safari</NavLink> </li>
                                            </ul>
                                        </li>
                                        <li className='nav-item dropdown'>
                                            <a className="nav-link dropdown-toggle" href="hikings" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Hikings
                                            </a>
                                            <ul className='dropdown-menu'>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/rioCeleste">Rio Celeste</NavLink> </li>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/arenalVolcano">Arenal Volcano</NavLink> </li>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/laFortunaWaterfall">La Fortuna Waterfall</NavLink> </li>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/hangingBridges">Hanging Bridges</NavLink> </li>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/combinationTours">Combination Tours</NavLink> </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                About
                                            </a>

                                            <ul className='dropdown-menu'>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/aboutTheCompany">About the Company</NavLink> </li>
                                                <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/aboutTheFortuna">About the Fortuna</NavLink> </li>
                                            </ul>
                                        </li>
                                        <li data-bs-dismiss="offcanvas" className='nav-item'><NavLink className="nav-link" to="/contactUs">Contact us</NavLink> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav>

                <div className='paginasContainer container'>
                    {/* componente para mostrar las las paginas */}
                    <RouterNav />
                </div>

            </BrowserRouter>
        </div>
    )
}
