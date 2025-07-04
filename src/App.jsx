import React from 'react'
import "./index.css"
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import TrendReport from './components/TrendReport';

  
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
        <Home />
      </main>
    </>
  )
}

export default App
