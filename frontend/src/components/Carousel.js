// components/Carousel.js

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IITG from '../assets/IITG.jpg';
import IITKgp from '../assets/IITKgp.jpg';
import IITD from '../assets/IITD.jpg';
import IITM from '../assets/IITM.jpg';
import IITR from '../assets/IITR.jpg';
import IITK from '../assets/IITKgp.jpg';
import IITB from '../assets/IITB.jpg';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false
    };

    return (
        <Slider {...settings} className='rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>
            <div>
                <img src={IITG} alt="Slide 1" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
            <div>
                <img src={IITKgp} alt="Slide 2" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
            <div>
                <img src={IITD} alt="Slide 3" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
            <div>
                <img src={IITM} alt="Slide 3" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
            <div>
                <img src={IITR} alt="Slide 3" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
            <div>
                <img src={IITK} alt="Slide 3" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
            <div>
                <img src={IITB} alt="Slide 3" className="w-full h-auto shadow-fuchsia-200 shadow-xl" />
            </div>
        </Slider>
    );
}

export default Carousel;
