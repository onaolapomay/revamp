import React from 'react';
import colorProducts from '../data/colorProducts';
import ProductCards from './ProductCards';

const ShopLatestGrid = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {colorProducts.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShopLatestGrid;