import React from 'react';
import backgroundImage2 from '/background-images/blowout.jpg';



const SecondBanner = () => {
    return (
        <div className='pt-1'>
            <div className='w-full  h-[300px] md:h-[400px] lg:h-[600px] bg-cover bg-center bg-no-repeat cursor-pointer flex items-center justify-center px-8' style={{ backgroundImage: `url(${backgroundImage2})` }}>
            </div>
        </div>
    )
}

export default SecondBanner;