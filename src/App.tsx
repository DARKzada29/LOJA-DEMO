import { lazy, Suspense } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Lazy load components for better performance
const HeroSection = lazy(() => import('./components/HeroSection'));
const FeaturedProducts = lazy(() => import('./components/FeaturedProducts'));
const ProductCatalog = lazy(() => import('./components/ProductCatalog'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const ShoppingCart = lazy(() => import('./components/ShoppingCart'));
const Checkout = lazy(() => import('./components/Checkout'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-amber-400 text-lg">Carregando...</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Suspense fallback={<LoadingFallback />}>
              <HeroSection />
              <FeaturedProducts />
            </Suspense>
          </>
        );
      case 'catalog':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <ProductCatalog />
          </Suspense>
        );
      case 'product':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetail />
          </Suspense>
        );
      case 'cart':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <ShoppingCart />
          </Suspense>
        );
      case 'checkout':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Checkout />
          </Suspense>
        );
      default:
        return (
          <>
            <Suspense fallback={<LoadingFallback />}>
              <HeroSection />
              <FeaturedProducts />
            </Suspense>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
      
      {/* Navigation Controls (for demo purposes) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md p-3 rounded-full border border-amber-900/30 z-50">
        <div className="flex space-x-2">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`px-3 py-1 rounded-full text-sm ${currentPage === 'home' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('catalog')}
            className={`px-3 py-1 rounded-full text-sm ${currentPage === 'catalog' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            Catálogo
          </button>
          <button 
            onClick={() => setCurrentPage('product')}
            className={`px-3 py-1 rounded-full text-sm ${currentPage === 'product' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            Produto
          </button>
          <button 
            onClick={() => setCurrentPage('cart')}
            className={`px-3 py-1 rounded-full text-sm ${currentPage === 'cart' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            Carrinho
          </button>
          <button 
            onClick={() => setCurrentPage('checkout')}
            className={`px-3 py-1 rounded-full text-sm ${currentPage === 'checkout' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
