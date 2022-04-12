import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="bg-white mt-10">
      <nav className="w-full pt-5 flex">
        <div className="container mx-auto flex flex-3 flex-col md:flex-row pt-10 px-2">
          <div className="mr-6 flex-1 p-0">
            <div className="text-brand-color mb-4 text-lg">
              Getir'i indirin!
            </div>
            <div>
              <img
                className="pt-4 transition-all hover:scale-105 transform"
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt="appstore"
              />
              <img
                className="pt-4 transition-all hover:scale-105 transform"
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt="googleplay"
              />
              <img
                className="pt-4 transition-all hover:scale-105 transform"
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt="getir"
              />
            </div>
          </div>
          <div className="mr-6 flex-1 p-0">
            <div className="text-brand-color mb-4 text-lg">
              Getir'i keşfedin
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Hakkımızda
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Kariyer
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Teknoloji Kariyerleri
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    İletişim
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    COVID-19 Duyuru
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Sosyal Sorumluluk Projeleri
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mr-6 flex-1 p-0">
            <div className="text-brand-color mb-4 text-lg">
              Yardıma mı ihtiyacınız var?
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Kişisel Verilerin Korunması
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Gizlilik Politikası
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Kullanım Koşulları
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Çerez Politikası
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mr-6 flex-1 p-0">
            <div className="text-brand-color mb-4 text-lg">
              İş Ortağımız Olun
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Bayimiz Olun
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    Deponuzu Kiralayın
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    GetirYemek Restoranı Olun
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs " href="/">
                    GetirÇarşı İşletmesi Olun
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block">
            <div className="shadow-md hover:shadow-lg p-3 rounded-lg">
              <img
                className="w-14"
                src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
                alt="etbis"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between  items-center border-t border-gray-100 mt-6 py-6">
        <div className="text-xs text-gray-700">
          &copy; 2022 Getir
          <a href="https://getir.com/" className="ml-6 text-primary-brand-color text-xs relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:translate-y-1/2  ">Bilgi Toplumu Hizmetleri</a>
        </div>
        <nav className=" flex gap-x-3 mt-3 ">
         <div className="flex flex-row justify-center items-center">
         <a className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-20 hover:text-secondary-brand-color" href="/">
            <FaFacebook  size={21} />
          </a> 
          <a className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-20 hover:text-secondary-brand-color " href="/">
            <FaTwitter size={21} />
          </a> 
          <a className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-20 hover:text-secondary-brand-color " href="/">
            <FaInstagram size={21} />
          </a>
         </div>
        <a href="/" className="flex items-center h-8 px-2 border border-gray-200 text-xs rounded-lg gap-x-2 text-gray-500 hover:bg-primary-brand-color hover:bg-opacity-20 hover:text-secondary-brand-color">
          <BiGlobe size={18} />
          Türkçe (TR)
        </a>
        </nav>
      </div>
    </div>
  );
}
