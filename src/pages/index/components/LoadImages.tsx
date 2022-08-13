import { GalleryProps } from "../data/data";

//y las acomoda para que tengan forma y informacion
export const LoadImages = (value:GalleryProps[]) => {
 
    const arrayImages = Object.values(value); //se convierte el objeto en un arreglo

    //se crea un arreglo de animaciones
    const animate = ["animate__fadeInDown", "animate__fadeInLeft","animate__fadeInRight","animate__fadeInUp","animate__fadeInBottomLeft","animate__fadeInBottomRight"]; 
     
    return (
        <div className="containerGallery "  >
            {
                arrayImages.map((item, index) => (
                    <div
                        onClick={() => item.openModal && item.openModal(`${item.urlImage}`)}
                        key={item.urlImage}
                        className={`cardGallery animate__animated ${animate[index]}`}
                        style={{ backgroundImage: `url(${item.urlImage})` }}
                    >
                        <div className="gallery-item-caption">
                            <h2 className="titleGallery" >{item.title}</h2>
                            <p className="textGallery" >{item.description}</p>
                        </div>
                    </div>
                ))
            } 
        </div>
    )
}
