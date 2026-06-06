import React, { useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const ContactSection = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });

    const ContactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'md834766@gmail.com',
            link: 'mailto:md834766@gmail.com'
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+91 7861938988',
            link: 'tel:+917861938988'
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'linkedin.com/in/yourprofile',
            link: 'https://linkedin.com/in/yourprofile'
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'SURAT, GUJARAT, INDIA',
            link: null
        }
    ]

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ message: '', type: '' });

        // YOUR EmailJS credentials
        const SERVICE_ID = 'ZH9o1qQ_2Fc1L2xeR3Wg1';  // ← NEED THIS (from Email Services)
        const TEMPLATE_ID = 'template_jok3x7t';             // ✓ Your Template ID
        const PUBLIC_KEY = 'VgX3Z3mIVTgzc9bM6';             // ✓ Your Public Key

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            );
            
            console.log('Success:', result);
            setStatus({ 
                message: '✅ Message sent successfully! I will get back to you soon.', 
                type: 'success' 
            });
            form.current.reset();
            
            setTimeout(() => {
                setStatus({ message: '', type: '' });
            }, 5000);
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ 
                message: `❌ Failed: ${error.text || 'Please try again or email me directly'}`,
                type: 'error' 
            });
        } finally {
            setIsSending(false);
        }
    };

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
                            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels or send me a message directly.
                        </p>
                        <div className='space-y-6'>
                            {ContactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.id} className='flex items-center gap-4 group'>
                                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                            <Icon size={18} className='text-primary'/>
                                        </div>
                                        <div>
                                            <h4 className='text-white font-medium text-sm'>{info.title}</h4>
                                            {info.link ? (
                                                <a href={info.link}
                                                    className='text-gray-400 text-sm hover:text-primary transition-colors'
                                                    target={info.title === 'Location' ? '_self' : '_blank'}
                                                    rel={info.title === 'Location' ? '' : 'noopener noreferrer'}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-gray-400 text-sm'>{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className='bg-gray-800 rounded-lg p-6'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='mb-4'>
                                <label htmlFor="user_email" className='text-white block mb-2 text-sm font-medium'>
                                    Your Email *
                                </label>
                                <input 
                                    type="email" 
                                    id='user_email' 
                                    name='user_email'
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                    placeholder='your@email.com' 
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                                    Message *
                                </label>
                                <textarea 
                                    id='message' 
                                    name='message'
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                    placeholder='Your Message....' 
                                    rows="4"
                                    required
                                />
                            </div>
                            
                            {status.message && (
                                <div className={`mb-4 p-3 rounded-lg text-center text-sm ${
                                    status.type === 'success' 
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                }`}>
                                    {status.message}
                                </div>
                            )}
                            
                            <button 
                                type='submit' 
                                disabled={isSending}
                                className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection