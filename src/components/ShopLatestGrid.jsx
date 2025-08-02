import React, {useState} from 'react';
import colorProducts from '../data/colorProducts';
import ProductCards from '../components/ProductCards'
import ProductModal from '../components/ProductModal'

const ShopLatestGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    alert(`${item.name} has been added to your cart.`);
  };
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {colorProducts.map((product) => (
          <ProductCards key={product.id}
          product={product}
          setSelectedProduct={setSelectedProduct}/>
        ))}
      </div>
      
        {selectedProduct && (
          <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default ShopLatestGrid;