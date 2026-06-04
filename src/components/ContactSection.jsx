import React from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const ContactSection = () => {
    const ContactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'md834766@gmail.com',
            link: 'mailto:md834766@gmail.com'  // Fixed typo
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+91 7861938988',  // Fixed number
            link: 'tel:+917861938988'  // Fixed number
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'linkedin.com/in/yourprofile',
            link: 'https://linkedin.com/in/yourprofile'  // Added full URL
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'SURAT, GUJARAT, INDIA',  // Added commas for readability
            link: null
        }
    ]

    return (
        <section className='py-20 bg-gray-900' id='contact'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-4'>
                        Let's Connect
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mb-10 rounded-2xl'></div>
                </div>
                
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Left Column - Contact Info */}
                    <div>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Aliquam minus molestiae laborum praesentium magnam mollitia,
                            molestias ut porro. Perspiciatis hic, blanditiis fugiat 
                        </p>
                        <div className='space-y-6'>
                            {ContactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.id} className='flex items-center gap-4 group'>
                                        <div className='w-10 h-10 rounded-full
                                        bg-primary/10 flex items-center justify-center
                                        group-hover:bg-primary/20 transition-colors'>  {/* Fixed typo */}
                                            <Icon size={18} className='text-primary'/>
                                        </div>
                                        <div>
                                            <h4 className='text-white font-medium text-sm'>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a href={info.link}
                                                    className='text-gray-400 text-sm hover:text-primary transition-colors'
                                                    target={info.title === 'Location' ? '_self' : '_blank'}
                                                    rel={info.title === 'Location' ? '' : 'noopener noreferrer'}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-gray-400 text-sm'>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className='bg-gray-800 rounded-lg p-6'>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id='email' 
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                    placeholder='your@email.com' 
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                                    Message
                                </label>
                                <textarea 
                                    id='message' 
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                    placeholder='Your Message....' 
                                    rows="4"
                                    required
                                />
                            </div>
                            <button type='submit' className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection