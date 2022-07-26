import { useState } from "react";

export const Gallery = () => {

    const [images, setImages] = useState(0);



    return (
        <div>

            <nav className="navbar navbar-expand-lg mt-5">
                <div className="container-fluid">  
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbarGallery">
                            <li className="nav-item" onClick={() => setImages(0)}>
                                <a className="nav-link" onClick={(e) => e.preventDefault()} href="">All</a>
                            </li>
                            <li className="nav-item aGallery" onClick={() => setImages(1)}>
                                <a className="nav-link aGallery" onClick={(e) => e.preventDefault()} href="">Snake</a>
                            </li>
                            <li className="nav-item " onClick={() => setImages(2)}>
                                <a className="nav-link aGallery" onClick={(e) => e.preventDefault()} href="">Lizard</a>
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
