
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Common/Header/Header'
import Footer from './components/Common/Footer/Footer'
import About from './pages/About/About'
import Booking from './components/Booking/Booking'
import Contact from './components/Contact/Contact'
import Destinations from './components/Destinations/Destinations'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import TourDetails from './components/Tours/TourDetails'
import Tours from './components/Tours/Tours'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tour-details" element={<TourDetails />} /> 
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destinations />} />
         <Route path="gallery" element={<PhotoGallery />} /> 

    </Routes>
    <Footer />

      
    </>
  )
}

export default App
