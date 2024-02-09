
'use client';

import { Carousel } from 'flowbite-react';

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80vw] md:w-[40vw]  bg-[#c7c4bf] rounded-2xl">
      <Carousel slideInterval={5000}>
        <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61ni3t1ryQL._AC_UY218_.jpg" alt="..." className='w-[30vw] rounded-xl'/>
        <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71cngLX2xuL._SL1500_.jpg" alt="..." className='w-[30vw] rounded-xl'/>
        <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61YCWzjldDL._AC_UY218_.jpg" alt="..." className='w-[30vw] rounded-xl'/>
        <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/91ItZJh1FDL._AC_UY218_.jpg" alt="..." className='w-[30vw] rounded-xl'/>
      </Carousel>
    </div>
  );
}
export default CarouselComponent