import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiStar } from 'react-icons/fi';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'UltraBook Pro X9',
      category: 'Computadores',
      price: 'R$ 8.999,00',
      image: 'laptop',
      rating: 5,
      icon: <FiMonitor className="w-6 h-6" />
    },
    {
      id: 2,
      name: 'Galaxy Z Fold 5',
      category: 'Celulares',
      price: 'R$ 9.499,00',
      image: 'smartphone',
      rating: 4,
      icon: <FiSmartphone className="w-6 h-6" />
    },
    {
      id: 3,
      name: 'MacBook Air M3',
      category: 'Computadores',
      price: 'R$ 12.499,00',
      image: 'laptop',
      rating: 5,
      icon: <FiMonitor className="w-6 h-6" />
    },
    {
      id: 4,
      name: 'iPhone 15 Pro Max',
      category: 'Celulares',
      price: 'R$ 10.999,00',
      image: 'smartphone',
      rating: 5,
      icon: <FiSmartphone className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Produtos em Destaque
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça nossos produtos mais vendidos com tecnologia de ponta e design futurista para elevar sua experiência digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-900 border border-amber-900/20 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-amber-600/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 bg-gradient-to-br from-gray-800 to-black aspect-square flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for product image */}
                <div className="w-24 h-24 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
                  {product.icon}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-amber-400 border border-amber-500/20">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-amber-400 font-bold">{product.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 text-black text-sm font-bold py-2 px-4 rounded-md"
                  >
                    Comprar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="border border-amber-500 text-amber-400 font-bold py-3 px-8 rounded-md hover:bg-amber-500/10 transition-colors duration-300">
            Ver Todos os Produtos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
