import React from "react";
import Slider from "react-slick";
import banners from "api/banners.json";
export default function Campaigns() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          
        }
      }
      
    ]
  };
  return (
    <div className="container mx-auto md:py-8">
      <h3 className="text-sm font-semibold mb-3 hidden md:block">Kampanyalar</h3>
      <Slider {...settings} className="md:-mx-2">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block md:px-2">
                <img src={banner.image} alt="getir" className="md:rounded-md" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
