import React from 'react';
import colorProducts from '../data/colorProducts'
import ProductCards from './ProductCards';

const ShopLatestGrid = () => {
    return(
        <div className='mt-6 px-8 sm:px-10 md:px-32'>
            <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {colorProducts.map(product => (
                    <ProductCards key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}






export default ShopLatestGrid;