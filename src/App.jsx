import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Hero from './sections/Hero/Hero';
import Vehicles from './sections/Vehicles/Vehicles';
import Technologies from './sections/Technologies/Technologies';
import Performance from './sections/Performance/Performance';
import Sustainability from './sections/Sustainability/Sustainability';
import Timeline from './sections/Timeline/Timeline';
import Testimonials from './sections/Testimonials/Testimonials';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-background text-text min-h-screen font-sans selection:bg-primary selection:text-background">
          <Navbar />
          <main>
            <Hero />
            <Vehicles />
            <Technologies />
            <Performance />
            <Sustainability />
            <Timeline />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
