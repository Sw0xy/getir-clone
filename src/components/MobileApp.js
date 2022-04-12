import React from 'react'

export default function MobileApp() {
  return (
    <div className='container flex justify-between items-center mx-auto bg-brand-color bg-mobile-app  mt-7 rounded-lg text-white'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i indirin!</h3>
        <p className='font-medium'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <div className='flex flex-col md:flex-row  mt-5 gap-y-2 md:gap-x-2'>
          <img className='w-36 transition-all hover:scale-105 transform' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt='appstore' />
          <img className='w-36 transition-all hover:scale-105 transform'src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' alt='googleplay' />
          <img className='w-36 transition-all hover:scale-105 transform'src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' alt='getir' />
        </div>
      </div>
      <picture className='pt-6 hidden md:block'>
        <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png' alt='phone' />
      </picture>
      </div>
  )
}
