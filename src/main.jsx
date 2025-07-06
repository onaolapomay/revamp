import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carousel from './components/Carousel'
import TrendReport from './components/TrendReport'
import SecondBanner from './components/SecondBanner.jsx'
import ProductsCarousel from './components/ProductCarousel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
