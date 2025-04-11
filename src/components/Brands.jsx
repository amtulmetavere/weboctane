import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { images } from '../pages/Ourclients';






const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  lazyLoad: "ondemand",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  arrows: false,
  customPaging: () => (
    <div className="text-[#e3b843] text-4xl font-black">.</div>
  ),
  appendDots: dots => (
    <div className="mt-6">
      <ul className="flex justify-center gap-1">{dots}</ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Brands = () => {
  return (
    <section className="py-14 w-5/6 rounded-xl justify-self-center bg-#333333  border-[#e3b843] border-2"
    >
      <div className="container  mx-auto px-4"
      >
   
        <div className="flex flex-col text-center mb-10">
        <motion.h1 initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
        className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">What Brands We deal
            </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}  
            className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We proudly collaborate with industry-leading brands who trust us to bring their vision to life</motion.h1>
                 
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
        </div>
        
     

        
        <Slider {...settings}>
          {images.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-3"
            >
              <div className="w-full max-w-xs mx-auto bg-white rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition duration-500 transform hover:scale-105">
                <img
loading="lazy"
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-28 sm:h-32 object-contain object-center"
                />
                <p className="mt-3 text-center text-gray-600 text-sm sm:text-base font-medium">{brand.alt}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
