import React, { useState } from 'react';


const Carousel =({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>(prev === 0 ? images.length - 1 :prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


if(!images || images.length === 0) return null;

return (
    <div className='bg-gray-100 flex flex-col md:flex-row space-x-32 items-center justify-center'>
        <div className='w-full  flex mx-auto mt-5 md:mb-0'>
            <p className='font-ultra-expanded text-2xl text-center underline font-[nunito]'>EXPLORE THE COLLECTIONS</p>
        </div>
    <div className='relative w-full max-w-2xl overflow-hidden  cursor-pointer mt-4'>
         <span className="block text-black text-center sm:text-xl md:text-2xl font-[winky_sans]">Revamp Softbit large shoulder bag</span>
        <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, idx) => (
                <div key={idx} className='w-full flex-shrink-0'>
                    <img src={src} alt={`Slide ${idx + 1}`} className='w-full h-auto' />
                </div>
            ))}

        </div>

        <button onClick={handlePrev} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md'>
            &#10094;
        </button>
        <button onClick={handleNext} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md'>
            &#10095;
        </button>
    </div>
    </div>
)
}

export default Carousel;