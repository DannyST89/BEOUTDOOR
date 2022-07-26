import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export const Gallery = () => {

    const [images, setImages] = useState(0);

    const [active, setActive] = useState("all");

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

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

    const [url, setUrl] = useState("")

    const [tamano, settamano] = useState(document.documentElement.scrollWidth)

    console.log("windowWidth: " + tamano);

    const openModal = (url: string) => {
        setUrl(url);
        toggle();
    }

    return (
        <div>
            <nav className="container navbar navbar-expand-lg mt-5">
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
                    <div className=""  >

                        {
                            images === 0 ?

                                <div className="containerGallery animate__animated animate__bounceInUp"  >

                                    <div onClick={() => openModal("https://source.unsplash.com/random/1")} className="cardGallery " style={{ backgroundImage: "url('https://source.unsplash.com/random/1')" }}></div>
                                    <div onClick={() => openModal("https://source.unsplash.com/random/2")} className="cardGallery " style={{ backgroundImage: "url('https://source.unsplash.com/random/2')" }}></div>
                                    <div onClick={() => openModal("https://source.unsplash.com/random/3")} className="cardGallery " style={{ backgroundImage: "url('https://source.unsplash.com/random/3')" }}></div>
                                    <div onClick={() => openModal("https://source.unsplash.com/random/4")} className="cardGallery " style={{ backgroundImage: "url('https://source.unsplash.com/random/4')" }}></div>
                                    <div onClick={() => openModal("https://source.unsplash.com/random/5")} className="cardGallery " style={{ backgroundImage: "url('https://source.unsplash.com/random/5')" }}></div>
                                    <div onClick={() => openModal("https://source.unsplash.com/random/6")} className="cardGallery " style={{ backgroundImage: "url('https://source.unsplash.com/random/6')" }}></div>
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
                            images === 2
                                ?

                                <div className="containerGallery animate__animated animate__bounceInUp"  >
                                    <div className="content"> {/*No hace nada este div */}
                                        <div className="video-gallery"> {/*No hace nada este div */}
                                            <div className="gallery-item ">
                                                <div onClick={() => openModal("url('https://source.unsplash.com/random/1')")} className="" style={{ backgroundImage: "url('https://source.unsplash.com/random/1')", height:'300px' }}></div>
                                                <div className="gallery-item-caption">
                                                    <h2>Mount Rainier</h2>
                                                    <p>14410 feet of adventure</p> 
                                                </div>
                                            </div> 
                                            <div className="gallery-item ">
                                                <div onClick={() => openModal("url('https://source.unsplash.com/random/1')")} className="" style={{ backgroundImage: "url('https://source.unsplash.com/random/1')", height:'300px' }}></div>
                                                <div className="gallery-item-caption">
                                                    <h2 id="titleGallery" >Mount Rainier</h2>
                                                    <p id="textGallery" >14410 feet of adventure</p> 
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div onClick={() => openModal("url('https://source.unsplash.com/random/1')")} className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/1')" }}></div>
                                    <div onClick={() => openModal("url('https://source.unsplash.com/random/3')")} className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/3')" }}></div>
                                    <div onClick={() => openModal("url('https://source.unsplash.com/random/2')")} className="cardGallery" style={{ backgroundImage: "url('https://source.unsplash.com/random/2')" }}></div>
                                </div>

                                : null
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="content">
                    <div className="video-gallery">
                        <div className="gallery-item ">
                            <img className="imgGalleryItem" src="https://assets.codepen.io/156905/rainier.jpg" alt="Mount Rainier" />
                            <div className="gallery-item-caption">
                                <h2>Mount Rainier</h2>
                                <p>14410 feet of adventure</p>
                                <a className="vimeo-popup" href="https://vimeo.com/179049611"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <Modal size="xl" className="modal-contentGallery" centered isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <div className="modalImage">
                            <img src={url} alt="" />
                        </div>
                    </ModalBody>
                </Modal>
            </section>


        </div>
    )
}
