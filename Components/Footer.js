import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className=' m-10 md:m-20'>
      <div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-between p-2'>
        <div>
        <Image src='/clerk-logo-dark-accent.png' alt='clerk' width={80} height={100} className='inline-block'/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
            <div className='flex flex-row gap-24'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-gray-500 font-medium'>Product</p>
                    <ul className='flex flex-col gap-1'>
                        <li className='text-[14px] font-medium'>Components</li>
                        <li className='text-[14px] font-medium'>Pricing</li>
                        <li className='text-[14px] font-medium'>Dashboard</li>
                        <li className='text-[14px] font-medium'>Reature requests</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-gray-500 font-medium'>Developers</p>
                    <ul className='flex flex-col gap-1'>
                        <li className='text-[14px] font-medium'>Documentation</li>
                        <li className='text-[14px] font-medium'>Discord Server</li>
                        <li className='text-[14px] font-medium'>Support</li>
                        <li className='text-[14px] font-medium'>Glossary</li>
                        <li className='text-[14px] font-medium'>Changelog</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-row gap-32 md:gap-24'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-gray-500 font-medium'>Company</p>
                    <ul className='flex flex-col gap-1'>
                        <li className='text-[14px] font-medium'>About</li>
                        <li className='text-[14px] font-medium'>Careers</li>
                        <li className='text-[14px] font-medium'>Blog</li>
                        <li className='text-[14px] font-medium'>Contact</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-gray-500 font-medium'>Legal</p>
                    <ul className='flex flex-col gap-1'>
                        <li className='text-[14px] font-medium'>Terms and Conditions</li>
                        <li className='text-[14px] font-medium'>Data Processing Agreement</li>
                        <li className='text-[14px] font-medium'>Privacy Policy</li>
                        <li className='text-[14px] font-medium'>Cookie Manager</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <hr className='mt-4 mb-4'/>

      <div className='flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between'>
        <div className='text-gray-400 text-[14px]'>
        © 2024 Clerk, Inc.
        </div>

        <div className='flex gap-4'>
            <FontAwesomeIcon icon={faXTwitter} style={{color: 'gray'}}/>
            <FontAwesomeIcon icon={faLinkedinIn} style={{color: 'gray'}}/>
            <FontAwesomeIcon icon={faGithub} style={{color: 'gray'}}/>
            <FontAwesomeIcon icon={faDiscord} style={{color: 'gray'}}/>
            <FontAwesomeIcon icon={faYoutube} style={{color: 'gray'}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
