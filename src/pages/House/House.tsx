import { Fragment } from "react"
import DescriptionCard from "./components/DescriptionCard"
import { CarouselHome } from "./components/CarouselHome";
import { HouseAside } from "./components/HouseAside";


export const House = () => {
  return (
    <>  <HouseAside/>
        <CarouselHome />
        <DescriptionCard/>
    </>
  )
}
