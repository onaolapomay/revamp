import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import TrendReport from '../components/TrendReport';
import SecondBanner from '../components/SecondBanner';
import ProductsCarousel from '../components/ProductCarousel';
import ShopByBrand from '../components/ShopByBrand';
import ResponsiveBanner from '../components/ResponsiveBanner';
import ShopByCategory from '../components/ShopByCategory';
import ThirdBanner from '../components/ThirdBanner';
import ShopLatest from '../components/ShopLatest';
import ShopLatestGrid from '../components/ShopLatestGrid';
import ProductCards from '../components/ProductCards';
import ProductModal from '../components/ProductModal';
import CartPanel from '../components/CartPanel';
import { useCart } from '../components/CartContext';
import Footer from '../components/Footer';

const Home = () => {
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <NavBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Hero />

      <Carousel
        images={[
          '/media/handbags/handbag1.jpg',
          '/media/handbags/handbag2.jpg',
          '/media/handbags/handbag3.jpg',
          '/media/handbags/handbag4.jpg',
          '/media/handbags/handbag5.jpg',
        ]}
      />

      <TrendReport />
      <SecondBanner />
      <ProductsCarousel />
      <ShopByBrand />
      <ResponsiveBanner />
      <ShopByCategory />
      <ThirdBanner />
      <ShopLatest />
      <ShopLatestGrid />
      <ProductCards />
      <ProductModal />

      {isCartOpen && (
        <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      )}
      <Footer />
    </>
  );
};

export default Home;