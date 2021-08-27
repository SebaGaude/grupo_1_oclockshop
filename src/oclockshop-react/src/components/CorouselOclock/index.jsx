import { Carousel } from "react-bootstrap";
import "./carouselOclock.css"

import img1 from "../../assets/images/product-1629567752118.png"
import img2 from "../../assets/images/product-1629651003885.jpg"
import img3 from "../../assets/images/product-1629651405278.jpg"

function CarouselOclock(){
    return(
    <Carousel className="carousel">
        <Carousel.Item>
            <img
            className="d-block w-100 img1"
            src= {img1}
            alt="First slide"
            />
            <Carousel.Caption>
    
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 img1"
            src={img2}
            alt="Second slide"
            />

            <Carousel.Caption>
           
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 img3"
            src={img3}
            alt="Third slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselOclock;