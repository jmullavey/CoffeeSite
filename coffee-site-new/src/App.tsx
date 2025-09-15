import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Cart from './components/cart/Cart';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Add prefetching for better performance
const prefetchRoutes = () => {
  const routes = [
    import('./pages/Home'),
    import('./pages/Menu'),
    import('./pages/About'),
    import('./pages/Contact'),
    import('./pages/Events'),
    import('./pages/NotFound'),
  ];
  
  // Start prefetching all routes
  routes.forEach(route => route.catch(() => null));
};

// Start prefetching after the initial render
if (typeof window !== 'undefined') {
  // Small delay to avoid blocking the main thread
  setTimeout(prefetchRoutes, 2000);
}

const App = () => {
  return (
    <ParallaxProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <NavBar />
              <Cart />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner fullScreen />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default App;
