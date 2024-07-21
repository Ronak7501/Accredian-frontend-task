import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import HeroSection from './components/HeroSection.jsx'
import Refer from './components/Refer.jsx'
import TableSection from './components/TableSection.jsx'
import Faqs from './components/Faqs.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Slider />
    <HeroSection />
    <Refer />
    <TableSection />
    <Faqs />
    <Footer />
  </React.StrictMode>
)
