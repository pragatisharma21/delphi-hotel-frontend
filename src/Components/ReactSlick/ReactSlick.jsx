import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const ReactSlick = ({ imageSources }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    fade: true, 
    cssEase: "linear",
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
    afterChange: (current) => {
      console.log(current)
    },
  };
  return (
    <>
      <Slider {...settings}>
        {imageSources.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : ""}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ReactSlick;
