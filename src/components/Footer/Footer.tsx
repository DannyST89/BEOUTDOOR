import { NavLink } from "react-router-dom"
import * as images from "../../assets/images/Images";

export const Footer = () => {
    return (
        // style={{top: "100vh"}}
        <footer className="footerPadre" >

            {/* degradado */}
            <div className="degradadoFooter">

            </div>

            {/* imagen */}
            <div className="imageFooter">
                <img className="imageFooter-img" src={images.imageFooter} alt="Volcan arenal" />
                
            </div>

            {/* footer */}
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-menu">
                        <h3 className="h3Footer">Menu</h3>
                        <div className="footerLink">
                            <NavLink className="" to="/">Inicio</NavLink>
                            <NavLink className="" to="contactUs">Contact us</NavLink>
                        </div>
                    </div>
                    <div className="footer-content-adventures">
                        <h3 className="h3Footer">Adventures</h3>
                        <div className="footerLink">
                            <NavLink className=" " to="/rafting">Rafting</NavLink>
                            <NavLink className=" " to="/safari">Safari</NavLink>
                        </div>

                    </div>
                    <div className="footer-content-hikings">
                        <h3 className="h3Footer">Hikings</h3>
                        <div className="footerLink">
                            <NavLink className=" " to="/rioCeleste">Rio Celeste</NavLink>
                            <NavLink className=" " to="/arenalVolcano">Arenal Volcano</NavLink>
                            <NavLink className=" " to="/laFortunaWaterfall">La Fortuna Waterfall</NavLink>
                            <NavLink className=" " to="/hangingBridges">Hanging Bridges</NavLink>
                            <NavLink className=" " to="/combinationTours">Combination Tours</NavLink>
                        </div>
                    </div>
                    <div className="footer-content-about">
                        <h3 className="h3Footer">About</h3>
                        <div className="footerLink">
                            <NavLink className=" " to="/aboutTheCompany">About the Company</NavLink>
                            <NavLink className=" " to="/aboutTheFortuna">About the Fortuna</NavLink>
                        </div>

                    </div>
                    <div className="footer-content-paginas">
                        <h1>paginas</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}
