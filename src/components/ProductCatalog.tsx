import { motion } from 'framer-motion';
import { FiFilter, FiGrid, FiList, FiStar } from 'react-icons/fi';
import { useState } from 'react';

const ProductCatalog = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'computadores', name: 'Computadores' },
    { id: 'notebooks', name: 'Notebooks' },
    { id: 'celulares', name: 'Celulares' },
    { id: 'tablets', name: 'Tablets' },
    { id: 'acessorios', name: 'Acessórios' }
  ];

  const products = [
    {
      id: 1,
      name: 'UltraBook Pro X9',
      category: 'notebooks',
      price: 'R$ 8.999,00',
      oldPrice: 'R$ 9.999,00',
      rating: 5,
      specs: ['Intel i9', '32GB RAM', '1TB SSD', 'RTX 4080'],
      isNew: true
    },
    {
      id: 2,
      name: 'Galaxy Z Fold 5',
      category: 'celulares',
      price: 'R$ 9.499,00',
      oldPrice: null,
      rating: 4,
      specs: ['Snapdragon 8 Gen 2', '12GB RAM', '512GB', 'Câmera 108MP'],
      isNew: true
    },
    {
      id: 3,
      name: 'MacBook Air M3',
      category: 'notebooks',
      price: 'R$ 12.499,00',
      oldPrice: 'R$ 13.999,00',
      rating: 5,
      specs: ['Apple M3', '16GB RAM', '512GB SSD', 'Retina Display'],
      isNew: false
    },
    {
      id: 4,
      name: 'iPhone 15 Pro Max',
      category: 'celulares',
      price: 'R$ 10.999,00',
      oldPrice: null,
      rating: 5,
      specs: ['A17 Pro', '8GB RAM', '1TB', 'Câmera 48MP'],
      isNew: false
    },
    {
      id: 5,
      name: 'PC Gamer Titan X',
      category: 'computadores',
      price: 'R$ 15.999,00',
      oldPrice: 'R$ 17.499,00',
      rating: 5,
      specs: ['Intel i9-14900K', '64GB RAM', '2TB SSD', 'RTX 4090'],
      isNew: true
    },
    {
      id: 6,
      name: 'iPad Pro M2',
      category: 'tablets',
      price: 'R$ 8.499,00',
      oldPrice: null,
      rating: 4,
      specs: ['Apple M2', '8GB RAM', '256GB', 'Liquid Retina XDR'],
      isNew: false
    },
    {
      id: 7,
      name: 'Headset Gamer Pro',
      category: 'acessorios',
      price: 'R$ 899,00',
      oldPrice: 'R$ 1.199,00',
      rating: 4,
      specs: ['Som Surround 7.1', 'RGB', 'Cancelamento de Ruído', 'Wireless'],
      isNew: false
    },
    {
      id: 8,
      name: 'Monitor Ultrawide 34"',
      category: 'acessorios',
      price: 'R$ 3.499,00',
      oldPrice: 'R$ 3.999,00',
      rating: 5,
      specs: ['3440x1440', '165Hz', '1ms', 'HDR600'],
      isNew: true
    }
  ];

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Catálogo de Produtos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore nossa seleção completa de produtos tecnológicos de alta performance e design futurista.
          </p>
        </motion.div>

        {/* Filter and View Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
            
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors">
              <FiFilter className="w-4 h-4" />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={`bg-gray-900 border border-amber-900/20 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-amber-600/10 transition-all duration-300 ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Product Image Area */}
              <div className={`${
                viewMode === 'list' ? 'md:w-1/3' : ''
              } p-6 bg-gradient-to-br from-gray-800 to-black aspect-square flex items-center justify-center relative overflow-hidden`}>
                {/* Placeholder for product image */}
                <div className="w-32 h-32 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-xl font-bold">{product.name.substring(0, 2)}</span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">NOVO</span>
                  )}
                  {product.oldPrice && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">OFERTA</span>
                  )}
                </div>
                
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-amber-400 border border-amber-500/20">
                  {categories.find(c => c.id === product.category)?.name}
                </div>
              </div>
              
              {/* Product Info */}
              <div className={`${viewMode === 'list' ? 'md:w-2/3' : ''} p-6`}>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Specs (only visible in list view) */}
                {viewMode === 'list' && (
                  <ul className="mb-4 grid grid-cols-2 gap-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1 h-1 bg-amber-500 rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`} 
                    />
                  ))}
                  <span className="text-gray-400 text-xs ml-2">({product.rating}.0)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    {product.oldPrice && (
                      <p className="text-gray-500 text-sm line-through">{product.oldPrice}</p>
                    )}
                    <p className="text-amber-400 font-bold">{product.price}</p>
                  </div>
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
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
              &lt;
            </button>
            <button className="w-10 h-10 rounded-md bg-amber-500 text-black font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
