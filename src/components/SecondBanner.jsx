import React from 'react';
import backgroundImage2 from '/background-images/blowout.jpg';



const SecondBanner = () => {
    return (
        <div className='pt-2'>
                <div className='w-full  h-[300px] md:h-[500px] lg:h-[700px] bg-cover bg-center bg-no-repeat cursor-pointer' style={{ backgroundImage: `url(${backgroundImage2})` }}/>
            </div>
    )
}

export default SecondBanner;