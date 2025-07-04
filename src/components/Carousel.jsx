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
        <p className='sm:text-center font-ultra-expanded text-2xl p-5 underline font-[nunito]'>EXPLORE THE COLLECTIONS</p>
    <div className='relative w-full max-w-2xl overflow-hidden sm:justify-center  cursor-pointer mt-5 sm:mt-2 md:mt-5 lg:mt-10'>
         <span className="text-black sm:text-xl md:text-2xl lg:3xl sm:text-center font-[winky_sans]">Revamp Softbit large shoulder bag</span>
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