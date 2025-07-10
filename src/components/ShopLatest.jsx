import React from 'react';
import { Sparkles } from 'lucide-react';


const ShopLatest = () => {
    return (
        <div className='mt-10'>
            <p className='text-4xl font-extrabold mx-8 sm:mx-16 md:mx-32 font-mono'>SHOP THE LATEST</p>

            <div className='flex flex-wrap justify-center sm:justify-start mx-8 gap-4 mt-10'>
                <button className='p-2 border rounded-lg font-bold font-[winky_sans] bg-black text-white flex items-center gap-2'>
                    <Sparkles className='h-5 w-5' />
                    For You
                </button>

                <button className='p-2 border rounded font-bold font-[winky_sans] hover:bg-black hover:text-white hover:border-black transition-colors duration-300'>
                    New In
                </button>

                <button className='p-2 border rounded font-bold font-[winky_sans] hover:bg-black hover:text-white hover:border-black transition-colors duration-300'>
                    Sale
                </button>

                <button className='p-2 border rounded font-bold font-[winky_sans] hover:bg-black hover:text-white hover:border-black transition-colors duration-300'>
                    Dresses
                </button>

                <button className='p-2 border rounded font-bold font-[winky_sans] hover:bg-black hover:text-white hover:border-black transition-colors duration-300'>
                    Jeans
                </button>

                <button className='p-2 border rounded font-bold font-[winky_sans] hover:bg-black hover:text-white hover:border-black transition-colors duration-300'>
                    Sets
                </button>
            </div>
        </div>
    )
}

export default ShopLatest;