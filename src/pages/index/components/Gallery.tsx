import { useEffect, useState } from "react";

export const Gallery = () => {

    const [images, setImages] = useState(0);

    const [active, setActive] = useState("");

    //=========================================================

    // Get the size of the device screen
    var screenWidth = screen.width;
    var screenHeight = screen.height;

    // Get the browser window size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Get the size of the entire webpage
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;

    // console.log("screenWidth: " + screenWidth);
    // console.log("screenHeight: " + screenHeight);
    // console.log("windowWidth: " + windowWidth);
    // console.log("windowHeight: " + windowHeight);


    const [tamano, settamano] = useState(document.documentElement.scrollWidth)
 
    console.log("windowWidth: " + tamano);

    return (
        <div>
            <nav className="navbar navbar-expand-lg mt-5">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbarGallery">
                            <li className="nav-item" onClick={() => setImages(0)}>
                                <a
                                    className={active === 'all' ? 'aGallery nav-link' : 'nav-link'}
                                    onClick={(e) => { e.preventDefault(); setActive('all') }}
                                >All</a>
                            </li>
                            <li className="nav-item" onClick={() => setImages(1)}>
                                <a
                                    className={active === 'snake' ? 'aGallery nav-link' : 'nav-link'}
                                    onClick={(e) => { e.preventDefault(); setActive('snake') }}
                                >Snake</a>
                            </li>
                            <li className="nav-item " onClick={() => setImages(2)}>
                                <a
                                    className={active === 'lizard' ? 'aGallery nav-link' : 'nav-link'}
                                    onClick={(e) => { e.preventDefault(); setActive('lizard') }}
                                >Lizard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                <div className="backgroundGallery">
                    <div className="containerGallery"  >

                        {
                            images === 0 ?

                                <div className="containerGallery animate__animated animate__bounceInUp"  >

                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/1')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/2')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/3')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/4')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/5')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/6')" }}></div>
                                </div>
                                : null
                        }

                        {
                            images === 1 ?

                                <div className="containerGallery animate__animated animate__bounceInUp"  >

                                    <div className="cardGallery animate__animated" style={{ backgroundImage: "url('https://source.unsplash.com/random/6')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/4')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/5')" }}></div>
                                </div>
                                : null
                        }

                        {
                            images === 2 ?

                                <div className="containerGallery animate__animated animate__bounceInUp"  >

                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/1')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/3')" }}></div>
                                    <div className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/2')" }}></div>

                                </div>
                                : null
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
