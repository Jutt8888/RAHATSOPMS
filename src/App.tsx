import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // 1. Add this import
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Diagnostics from './components/Diagnostics'
import Treatments from './components/Treatments'
import SOPMSSection from './components/SOPMSSection'
import Courses from './components/Courses'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsPage from './pages/TeamPage'
import FounderPage from './pages/details';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Blog from "./pages/blog/blog"; // Import the Blog component
import BlogPost from "./pages/blog/BlogPost";


function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);
  return null;
}
// Create a component for your main page content
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Treatments />
    <Diagnostics />
    <SOPMSSection />
    <Courses />
    <Schedule />
    <Contact />
  </>
);



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Router>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="relative">
          <ScrollToHash />
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/founder" element={<DetailsPage />} />
                <Route path="/founder/:slug" element={<FounderPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                  path="/blog/:slug"
                  element={<BlogPost />}
                />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  )
}