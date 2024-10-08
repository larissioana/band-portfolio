import { useState } from 'react';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Music from './components/music/Music';
import TourDates from './components/tour/TourDates';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <Navigation setIsMobileNavOpen={setIsMobileNavOpen} isMobileNavOpen={isMobileNavOpen} />
      <Routes>
        <Route path="/" element={<Home isMobileNavOpen={isMobileNavOpen} />} />
        <Route path="/music" element={<Music isMobileNavOpen={isMobileNavOpen} />} />
        <Route path="/shop" element={<Shop isMobileNavOpen={isMobileNavOpen} />} />
        <Route path="/tour" element={<TourDates isMobileNavOpen={isMobileNavOpen} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
