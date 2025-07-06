import React from 'react';
import backgroundImage from '/background-images/back.jpg'


const Hero = () => {
    return (
        <>
            <div className='w-full h-[300px] md:h-[500px] lg:h-[700px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <p className='text-4xl md:text-2xl lg:text-[18rem] pt-8 text-center text-white font-[dancing_script]' style={{ fontStyle: 'normal' }}>REVAMP</p>
                <p className='text-lg pt-28 md:text-6xl lg:text-4xl text-white font-[winky_sans] text-center'>The New Revamp Softbit</p>

                <div className='text-center pt-6 lg:pt-8'>
                    <button className='text-black font-[winky_sans] rounded-md text-base md:text-2xl lg:text-3xl px-4 cursor-pointer
                    md:px-6 lg:px-8 py-2 md:py-3 scale-x-75 transition duration-1000
                    ease-in-out transform bg-white border font-bold hover:-translate-y-2 hover:scale-105'>SHOP HANDBAGS</button>
                </div>
            </div>

        </>
    );
}

export  default Hero;