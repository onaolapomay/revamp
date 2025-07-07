import React from 'react'
import "./index.css"
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import TrendReport from './components/TrendReport';
import SecondBanner from './components/SecondBanner.jsx';
import ProductsCarousel from './components/ProductCarousel.jsx';
import ShopByBrand from './components/ShopByBrand.jsx';
import ResponsiveBanner from './components/ResponsiveBanner.jsx';
import ShopByCategory from './components/ShopByCategory.jsx';
import ThirdBanner from './components/ThirdBanner.jsx';

  
function App() {
 

  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Carousel images={[
           '/media/handbags/handbag1.jpg',
           '/media/handbags/handbag2.jpg',
           '/media/handbags/handbag3.jpg',
           '/media/handbags/handbag4.jpg',
           '/media/handbags/handbag5.jpg']} />
        <TrendReport />
        <SecondBanner />
        <ProductsCarousel />
        <ShopByBrand />
        <ResponsiveBanner />
        <ShopByCategory />
        <ThirdBanner />
        <Home />
      </main>
    </>
  )
}

export default App
