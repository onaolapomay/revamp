import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Carousel from './components/Carousel'
import TrendReport from './components/TrendReport'
import SecondBanner from './components/SecondBanner.jsx'
import ProductsCarousel from './components/ProductCarousel.jsx'
import ShopByBrand from './components/ShopByBrand.jsx'
import ResponsiveBanner from './components/ResponsiveBanner.jsx'
import ShopByCategory from './components/ShopByCategory.jsx'
import ThirdBanner from './components/ThirdBanner.jsx'
import ShopLatest from './components/ShopLatest.jsx'
import ShopLatestGrid from './components/ShopLatestGrid.jsx'
import ProductCards from './components/ProductCards.jsx'
import ProductModal from './components/ProductModal.jsx'
import { CartProvider } from './components/CartContext.jsx'
import CartPanel from './components/CartPanel.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
