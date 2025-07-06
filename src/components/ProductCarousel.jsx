import React from 'react';
import products from '../data/productsData';

const ProductCarousel = () => {
    
    return (
        <div className='bg-gray-100 p-10'>
            <div className='relative w-full max-w-5xl mx-auto overflow-x-auto '>
                <div className='flex w-max gap-4 transition-transform duration-500 ease-in-out'>
                    {products.map((product) => (
                        <div key={product.id} className='group relative min-w-[250px] w-64 bg-white shadow-lg rounded-xl overflow-hidden mx-2'>
                            <div className='relative w-full h-60 overflow-hidden'>
                                <img src={product.image1}
                                alt={product.name}
                                className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' />
                                <img src={product.image2} alt={`${product.name} hover`}
                                className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                            </div>
                            <div className='p-2 mt-3 text-center bg-white'>
                                <h3 className='text-lg font-semibold'>{product.name}</h3>
                                <p className='text-gray-500'>{product.price}</p>
                                <button className='mt-4 m-auto px-4 py-2 bg-black text-white font-semibold rounded-lg block sm:group-hover:opacity-100 transition duration-300 sm:opacity-0'>Add to Cart</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
    )
}


export default ProductCarousel;