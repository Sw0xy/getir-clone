import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";
export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const windowWidth = useWindowWidth();
  const phoneCodes = {
    US: "+1",
    GB: "+44",
    DE: "+49",
    FR: "+33",
    ES: "+34",
    IT: "+39",
    JP: "+81",
    TR: "+90",
    BR: "+55",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div className="relative h-auto md:h-[500px] before:z-10 before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:w-full before:h-full inset-0">
      {windowWidth > 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
              alt="getir"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
              alt="getir"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
              alt="getir"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex  justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0  md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir"
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br></br> kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3 ">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phoneCodes)}
                customLabels={phoneCodes}
                onSelect={(country) => setSelected(country)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="w-full text-sm h-14 px-4 border-2 border-gray-200 rounded transition-colors outline-none hover:border-primary-brand-color focus:border-primary-brand-color peer pt-2"
                  type="text"
                />
                <span className="absolute top-0 left-0 px-4 h-full flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs  ">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow ">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
