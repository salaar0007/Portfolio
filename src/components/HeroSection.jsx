import { Download } from 'lucide-react'
import React from 'react'
import hero from '../assets/hero.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HeroSection = () => {
  return (
    <section className='relative w-full' data-aos='zoom-in-up'>
      <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
        <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40'></div>
        <div className='h-20 w-3/4 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl'></div>
      </div>
      
      <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative'>  {/* Fixed: max-auto -> mx-auto */}
        <div className='grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
          
          {/* LEFT SIDE - Text Content */}
          <div className='lg:py-6'>
            <div className='text-center lg:text-left'>
              <h1 className='pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                Hi, I'm{' '}
                <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200'>
                  Fakru
                </span>
                👋
              </h1>
            </div>
            
            <p className='text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              error quisquam ex placeat nobis culpa
              perspiciatis. Tempore sunt quas, aut quis ab labore voluptates
            </p>
            
            <div className='flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0'>
              {/* Hire Me Button */}
              <button className='px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center'>
                <span className='absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent'>  {/* Fixed: rounded-3xl -> rounded-full */}
                </span>
                <span className='relative flex items-center justify-center text-white'>
                  Hire Me
                </span>
              </button>
              
              {/* Download Resume Button */}
              <button className='border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center'>
                <div className='hover:scale-105 transition-all ease-in-out flex justify-center items-center relative'>
                  <Download size={18} className='text-primary' />
                  <a href="/resume.pdf" download="resume.pdf" className='pl-2 text-primary'>
                    Download Resume
                  </a>
                </div>
              </button>
            </div>
          </div>
          
          {/* RIGHT SIDE - Hero Image */}
          <div className='lg:h-full md:flex'>
            <div className='flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative'>
              <div className='absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-r opacity-25 from-[#0c64ac] to-primary blur-2xl'>
              </div>
              <div className='absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border border-cyan-500'>
                <img
                  src={hero}
                  alt="Hero pic"
                  width="500"
                  height="auto"
                  loading='lazy'
                  className='w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover'
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HeroSection