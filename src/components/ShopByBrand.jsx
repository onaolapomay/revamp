import React from 'react';

const brandImages = [
    '/media/Shop-by-brand/Novabeauty.jpg',
    '/media/Shop-by-brand/Novacurve.jpg',
    '/media/Shop-by-brand/Novakid.jpg',
    '/media/Shop-by-brand/Novaluxe.jpg',
    '/media/Shop-by-brand/Novamen.jpg',
    '/media/Shop-by-brand/Novasport.jpg',
]

const ShopByBrand = () => {
    return (
        <div className='mt-10 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8'>
            <p className='uppercase my-4 text-4xl font-extrabold font-sans'>Shop By Brand</p>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'>
                {brandImages.map((src, index) =>(
                    <img key={index} className='h-64 w-full object-cover' src={src} alt={`Brand ${index + 1}`} />
                ))}

            </div>
        </div>
    )
}

export default ShopByBrand;