import React, { useEffect } from 'react'
import about from '../assets/about.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        })
    }, [])

    return (
        <section className='text-white mt-16 relative overflow-hidden' id='about'>
            <div className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:py-16 relative z-10'>
                {/* Left Column - Text Content */}
                <div data-aos='fade-right'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                        More <span className='text-primary'>About</span> Me
                    </h2>
                    <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas, earum libero. Voluptates magni voluptatum, cumque, nihil i
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas, earum libero. Voluptates magni voluptatum, cumque, nihil i
                    </p>
                    
                    {/* Stats Cards */}
                    <div className='grid grid-cols-3 gap-6 max-w-xl'>
                        <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50 hover:scale-105 transform'>
                            <h3 className='text-primary font-bold text-2xl md:text-3xl'>+200</h3>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>
                                CLIENT
                            </p>
                        </div>

                        <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50 hover:scale-105 transform'>
                            <h3 className='text-primary font-bold text-2xl md:text-3xl'>+10</h3>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>
                                PROJECTS
                            </p>
                        </div>

                        <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50 hover:scale-105 transform'>
                            <h3 className='text-primary font-bold text-2xl md:text-3xl'>1</h3>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>
                                YEARS
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative' data-aos='fade-left'>
                    <div className='relative w-64 h-64 md:w-96 md:h-96'>
                        {/* Decorative background circle */}
                        <div className='absolute inset-0 z-0 rounded-full 
                            bg-gradient-to-br from-primary/30 to-cyan-400/20
                            shadow-lg border-2 border-primary/50 translate-x-4 translate-y-4'>
                        </div>
                        
                        {/* Main image circle */}
                        <div className='relative z-10 w-full h-full 
                            bg-gradient-to-br from-[#111a3e] to-[#1f2a6e] 
                            rounded-full overflow-hidden border-2 border-primary/30 shadow-xl'>
                            <img 
                                src={about} 
                                alt="About Me" 
                                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection