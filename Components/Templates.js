'use client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef } from 'react'
import Slider from './Carousel';

const Templates = () => {

  const [carouselApi, setCarouselApi] = useState(null)
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 })
  const [changeBackground, setchangeBackground] = useState('slate-100')
  const hrRef = useRef(null) // Reference to the hr element

  // Function to scroll to a specific image based on the index
  const handleScrollToImage = (index, e) => {
    if (carouselApi) {
      carouselApi.scrollTo(index)
    } else {
      console.log("Carousel API is not defined yet.")
    }

    // Calculate the position and width for the highlight
    const divElement = e.currentTarget
    const divRect = divElement.getBoundingClientRect()
    const hrRect = hrRef.current.getBoundingClientRect()

    const leftPosition = divRect.left - hrRect.left
    const width = divRect.width

    // Set the highlight style
    setHighlightStyle({ width: `${width}px`, left: `${leftPosition}px` })
  }

  const changeLabelBackground = (index) => {
    if(index === 1){
      setchangeBackground('slate-200');
    }
    if(index === 2)
      setchangeBackground('slate-300');
    if(index === 3)
      setchangeBackground('slate-400');
    if(index === 4)
    setchangeBackground('slate-500')
  }

  return (
    <div className='m-10 md:m-20 mt-20 '>
      <div className='flex flex-col w-full md:w-5/12 gap-5'>
        <div className='text-blue-600 text-[17px] font-semibold'>Components</div>
        <div className='text-gray-900 text-[34px] font-bold leading-tight'>
          Beautifully crafted UI components, ready for your next project.
        </div>
        <div className='text-gray-500 text-[18px]'>
          Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.
        </div>
        <div className='text-blue-600 text-[17px] font-semibold'>
          Browse all components <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      {/* Horizontal scrolling grid on small screens */}
      <div className='w-full mt-20 overflow-x-auto'>
        <hr ref={hrRef} className='mb-6 relative'/>
        {/* Highlight div for the hr */}
        <div
          className='hr-highlight'
          style={{ ...highlightStyle }}
        />

        <div className='grid grid-cols-4 gap-1 md:gap-6 min-w-[800px]'>

          <div className='space-y-3 hover:cursor-pointer' onClick={(e) => {handleScrollToImage(0, e); changeLabelBackground(1)}}>
            <p className={`inline-block text-[12px]  ${changeBackground === 'slate-200' ? 'md:bg-blue-500 md:text-white': 'md:bg-slate-100 md:text-gray-500'} rounded-[20px] md:p-[6px] font-semibold`}>Info Product</p>
            <h2 className='text-[18px]'>Primer</h2>
            <p className='text-[14px] hidden md:block'>
              We've actually published info products ourselves and this landing page is honestly better than the sites we designed for all of those.
            </p>
          </div>

          <div className='space-y-3 hover:cursor-pointer' onClick={(e) => {handleScrollToImage(1, e); changeLabelBackground(2)}}>
          <p className={`inline-block text-[12px] ${changeBackground === 'slate-300' ? 'md:bg-pink-500 md:text-white': 'md:bg-slate-100 md:text-gray-500'} rounded-[20px] md:p-[6px] font-semibold`}>Podcast</p>
            <h2 className='text-[18px]'>Transmit</h2>
            <p className='text-[14px] hidden md:block'>
              You've ordered over your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.
            </p>
          </div>

          <div className='space-y-3 hover:cursor-pointer' onClick={(e) => {handleScrollToImage(2, e); changeLabelBackground(3)}}>
          <p className={`inline-block text-[12px] ${changeBackground === 'slate-400' ? 'md:bg-blue-400 md:text-white': 'md:bg-slate-100 md:text-gray-500'}  rounded-[20px] md:p-[6px] font-semibold`}>Documentation</p>
            <h2 className='text-[18px]'>Syntax</h2>
            <p className='text-[14px] hidden md:block'>
              Writing documentation is enough to make you rip your hair out without worrying about the design. Let's help you keep a few strands.
            </p>
          </div>

          <div className='space-y-3 hover:cursor-pointer' onClick={(e) => {handleScrollToImage(3, e); changeLabelBackground(4)}}>
          <p className={`inline-block text-[12px] ${changeBackground === 'slate-500' ? 'md:bg-blue-500 md:text-white': 'md:bg-slate-100 md:text-gray-500'} rounded-[20px] md:p-[6px] font-semibold`}>Saas Marketing</p>
            <h2 className='text-[18px]'>Salient</h2>
            <p className='text-[14px] hidden md:block'>
              Every Saas marketing site uses the same formula -  a hero, feature sections, some testimonials, you know the drill. But some are still prettier than others.
            </p>
          </div>
        </div>
      </div>

      {/* Pass the setCarouselApi function to Slider to get the api instance */}
      <Slider setCarouselApi={setCarouselApi} />
    </div>
  )
}

export default Templates
