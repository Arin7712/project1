'use client'

import { CarouselApi } from "@/components/ui/carousel"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
import { useState, useEffect } from "react"
  

const Slider = ({setCarouselApi}) => {

  const [api, setApi] = React.useState(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (api) {
      setCarouselApi(api) // Pass the API instance back to the parent
    }
  }, [api, setCarouselApi])


  return (
    <div>
    <Carousel setApi={setApi} className='mt-14'>
  <CarouselContent>
    <CarouselItem><Image src='/preview1.png' width={2432} height={1280} style={{borderRadius:'20px'}}/></CarouselItem>
    <CarouselItem><Image src='/preview2.png' width={2432} height={1280} style={{borderRadius:'20px'}}/></CarouselItem>
    <CarouselItem><Image src='/preview3.png' width={2432} height={1280} style={{borderRadius:'20px'}}/></CarouselItem>
    <CarouselItem><Image src='/preview4.png' width={2432} height={1280} style={{borderRadius:'20px'}}/></CarouselItem>
  </CarouselContent>
</Carousel>
</div>
  )
}

export default Slider
