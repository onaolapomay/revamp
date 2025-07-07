import React from 'react';

const ShopByCategory = () => {
    return (
        <div className='mt-20 px-4 sm:px-6 md:px-10'>
            <span className='block text-3xl sm:text-4xl font-extrabold text-center font-[roboto]'>SHOP BY CATEGORY</span>

            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10'>
                <div className='relative cursor-pointer'>
                    <img src="/media/card-images4/dresses.jpg" alt="Big" className='w-full h-full object-cover shadow-lg'/>
                    <p className='absolute bottom-4 left-4 text-xl sm:text-2xl font-bold text-white'>Dresses</p>
                </div>

                <div className='lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4'>
                    <div className='relative cursor-pointer'>
                        <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>Matching Sets</p>
                        <img src="/media/card-images4/matching_sets.jpg" alt="1" className='w-full h-full object-cover shadow'/>
                    </div>

                    <div className='relative cursor-pointer'>
                        <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>Top</p>
                        <img src="/media/card-images4/top.jpg" alt="2" className='w-full h-70 object-cover shadow'/>
                    </div>

                    <div className='relative cursor-pointer'>
                        <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>Denim Shorts</p>
                        <img src="/media/card-images4/denim.jpg" alt="3" className='w-full h-70 object-cover shadow'/>
                    </div>

                    <div className='relative cursor-pointer'>
                        <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>Swim</p>
                        <img src="/media/card-images4/swim.jpg" alt="4" className='w-full h-full object-cover shadow'/>
                    </div>

                    <div className='relative cursor-pointer'>
                        <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>Shoes</p>
                        <img src="/media/card-images4/shoes.jpg" alt="5" className='w-full h-70 object-cover shadow'/>
                    </div>

                    <div className='relative cursor-pointer'>
                        <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>Accessories</p>
                        <img src="/media/card-images4/accessories.jpg" alt="6" className='w-full h-70 object-cover shadow'/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ShopByCategory;