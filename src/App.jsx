import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Hero from './sections/Hero/Hero';
import Vehicles from './sections/Vehicles/Vehicles';
import Performance from './sections/Performance/Performance';
import Technologies from './sections/Technologies/Technologies';
import Luxury from './sections/Luxury/Luxury';
import FutureVision from './sections/FutureVision/FutureVision';
import Statistics from './sections/Statistics/Statistics';
import Contact from './sections/Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
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
            <Performance />
            <Technologies />
            <Luxury />
            <FutureVision />
            <Statistics />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
