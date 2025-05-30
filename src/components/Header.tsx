import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-amber-900/10' : 'bg-black/70'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              DARK-STORE
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {[].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-amber-400 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-6"
          >
            <button className="text-white hover:text-amber-400 transition-colors duration-300">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-amber-400 transition-colors duration-300">
              <FiUser className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-amber-400 transition-colors duration-300 relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-amber-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 border-t border-amber-900/30"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-amber-400 transition-colors duration-300 text-sm uppercase tracking-wider py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-amber-900/30">
              <button className="text-white hover:text-amber-400 transition-colors duration-300">
                <FiSearch className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-amber-400 transition-colors duration-300">
                <FiUser className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-amber-400 transition-colors duration-300 relative">
                <FiShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
