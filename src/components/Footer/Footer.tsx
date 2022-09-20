import { NavLink } from "react-router-dom"
import * as images from "../../assets/images/Images";
import { SocialNetwork } from "../SocialNetworks/SocialNetwork";
import { Button } from '../Button/Button';
import { adventures, hikings, about } from "../../data/navegacion";

export const Footer = () => {

    return (
        <footer className="footerPadre " >
           
            {/* degradado */}
            <div className="degradadoFooter"> 

            </div>

            {/* imagen */}

            {/* footer */}
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-menu">
                        <h3 className="h3Footer">Menu</h3>
                        <div className="footerLink">
                            <Button className='' redirection="/" text="Inicio" scrollTop={true} ></Button>
                            <Button className='' redirection="ContactUs/newMessage" text="Contact us" scrollTop={true} ></Button>
                        </div>
                    </div>
                    <div className="footer-content-adventures">
                        <h3 className="h3Footer">Adventures</h3>
                        <div className="footerLink">
                            {
                                adventures.map((adventures, index) => (
                                    <Button key={adventures.replace(/ /g, "")} className='' redirection={adventures.replace(/ /g, "")} text={adventures} scrollTop={true} ></Button>
                                ))
                            }
                        </div>

                    </div>
                    <div className="footer-content-hikings">
                        <h3 className="h3Footer">Hikings</h3>
                        <div className="footerLink">
                            {
                                hikings.map((hikings, index) => (
                                    <Button key={hikings.replace(/ /g, "")} className='' redirection={hikings.replace(/ /g, "")} text={hikings} scrollTop={true} ></Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-content-about">
                        <h3 className="h3Footer">About</h3>
                        <div className="footerLink">
                            <Button className='' redirection="About" text="About" scrollTop={true} ></Button>
                        </div>

                    </div>
                    <div className="footer-content-paginas">
                        <h3 id="pruebaFooterSocialeNetwork" className="h3Footer">Social Networks</h3>
                        <SocialNetwork classNameSocial={""} size={"40px"} />                        
                    </div>
                    
                </div>
                <div className="copyright__text container">
                    <p className="copyright__p">© Copyright, BEOUTDOORS CR</p>
                    <div className="creators">
                        <h3>Creators</h3>
                        <a href="#">Alejandro Quintero</a>
                        <a href="#">Danny soto</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
