import { NavLink } from "react-router-dom"
import * as images from "../../assets/images/Images";
import { SocialNetwork } from "../SocialNetworks/SocialNetwork";

export const Footer = () => {
 
    return (     
        <footer className="footerPadre " >

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
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className="" to="/">Inicio</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className="" to="contactUs">Contact us</NavLink>
                        </div>
                    </div>
                    <div className="footer-content-adventures">
                        <h3 className="h3Footer">Adventures</h3>
                        <div className="footerLink">
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/rafting">Rafting</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/safari">Safari</NavLink>
                        </div>

                    </div>
                    <div className="footer-content-hikings">
                        <h3 className="h3Footer">Hikings</h3>
                        <div className="footerLink">
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/rioCeleste">Rio Celeste</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/arenalVolcano">Arenal Volcano</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/laFortunaWaterfall">La Fortuna Waterfall</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/hangingBridges">Hanging Bridges</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/combinationTours">Combination Tours</NavLink>
                        </div>
                    </div>
                    <div className="footer-content-about">
                        <h3 className="h3Footer">About</h3>
                        <div className="footerLink">
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/aboutTheCompany">About the Company</NavLink>
                            <NavLink onClick={()=>document.getElementById("invisible")?.scrollIntoView(true)} className=" " to="/aboutTheFortuna">About the Fortuna</NavLink>
                        </div>

                    </div>
                    <div className="footer-content-paginas">
                    <h3 className="h3Footer">Social Networks</h3>
                        <SocialNetwork classNameSocial={""} size={"40px"}/> 
                    </div>
                </div>
            </div>
        </footer>
    )
}
