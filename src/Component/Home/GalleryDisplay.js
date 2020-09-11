import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const showGalllery = ({gdata}) => {
    if(gdata){
        return(
            <Slider {...settings}>
                {gdata.map((item) => {
                    return(
                        <Link to="/"  className="slider-item">
                            <div className="image"
                            style={{background:`url(/images/galleries/${item.images[0].img})`}}>

                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}

const GalleryDisplay = (props) => {
    return(
        <div className="home-gallery">
            <h2>Photo Gallery</h2>
            {showGalllery(props)}
            <hr/>
        </div>
    )
}

export default GalleryDisplay;