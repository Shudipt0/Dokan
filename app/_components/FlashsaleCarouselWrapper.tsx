'use client'

import dynamic from "next/dynamic";

const FlashsaleCarousel = dynamic(() => import('./FlashsaleCarousel'), {
    ssr: false,
})

const FlashsaleCarouselWrapper = ({data} : {data: any}) => {
  return <FlashsaleCarousel products={data} />
}

export default FlashsaleCarouselWrapper
