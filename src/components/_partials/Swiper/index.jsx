import Carousel from "react-multi-carousel"
import { Link } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css"
import "./index.css"
import BannerIMG1 from "../../../assets/images/Models.webp"

const Swiper = () => {
    const responsive = {
        all: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        },
      }

    return (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
        itemClass="carousel-item"
        removeArrowOnDeviceType={["all"]}
      >
        <div style={{
          backgroundImage: `url(${BannerIMG1})`,
        }}>
          <div className="container">
            <p>Beautiful</p>
            <p>Glamorous</p>
            <p>Confident</p>
            <p><Link to="/services">LEARN MORE</Link></p>
          </div>
        </div>
        
        <div style={{
          backgroundImage: `url(${BannerIMG1})`,
        }}>
          <div className="container">
            <p>Beautiful</p>
            <p>Glamorous</p>
            <p>Confident</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
        
        <div style={{
          backgroundImage: `url(${BannerIMG1})`,
        }}>
          <div className="container">
            <p>Beautiful</p>
            <p>Glamorous</p>
            <p>Confident</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </Carousel>
    )
}

export default Swiper