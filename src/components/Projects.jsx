import React from 'react'
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';


const Projects = () => {
    const projects = [
        {
            id: 1,
            image: proj1,
            title: 'Pro-Shop',
            desc: 'Modern e-Commerce Shop ',
            tech: ['React', 'Node.js', 'MongoDB' , 'Express']  // Fixed: made tech items separate
        },
        {
            id: 2,
            image: proj2,
            title: 'Travelon',
            desc: 'Web desing Of Travele agency',
            tech: ['React', 'Tailwind@css']
        },
        {
            id: 3,
            image: proj3,
            title: 'Portfolio',
            desc: 'Modern Desing Portfolio',
            tech: ['React', 'Tailwind@css' ]
        },
       
    ]
    
    return (
        <section className='py-16 bg-gray-900' id='projects'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='text-center mb-12'>  {/* Increased margin */}
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Projects.
                    </h2>
                    <div className='w-38 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
                </div>
                
                {/* Fixed grid with gap */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projects.map((project) => (
                        <div key={project.id}
                            className='bg-gray-800 rounded-lg overflow-hidden
                            shadow-sm hover:shadow-lg hover:scale-105
                            transition-all duration-300'>
                            <img src={project.image} alt={project.title}
                                className='w-full h-44 object-cover
                                hover:opacity-90 transition-opacity
                                duration-300' />
                            <div className='p-4'>
                                <h3 className='text-lg font-semibold 
                                text-white group-hover:text-primary transition-colors'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-400 text-sm mt-1'>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mt-3'>
                                    {project.tech.map((tec, idx) => (
                                        <span key={idx}
                                            className='text-xs px-2 py-0.5 
                                            bg-gray-700 text-gray-300 rounded hover:bg-primary
                                            hover:text-white transition-colors duration-300'>
                                            {tec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects