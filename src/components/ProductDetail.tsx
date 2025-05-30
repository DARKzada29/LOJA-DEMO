import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar, FiHeart, FiShare2, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('preto');
  const [selectedStorage, setSelectedStorage] = useState('512gb');
  const [quantity, setQuantity] = useState(1);
  
  const colors = [
    { id: 'preto', name: 'Preto', hex: '#000000' },
    { id: 'dourado', name: 'Dourado', hex: '#D4AF37' },
    { id: 'prata', name: 'Prata', hex: '#C0C0C0' }
  ];
  
  const storageOptions = [
    { id: '256gb', name: '256GB', price: 'R$ 9.499,00' },
    { id: '512gb', name: '512GB', price: 'R$ 10.999,00' },
    { id: '1tb', name: '1TB', price: 'R$ 12.499,00' }
  ];

  const specs = [
    { name: 'Processador', value: 'A17 Pro' },
    { name: 'Memória RAM', value: '8GB' },
    { name: 'Armazenamento', value: '512GB' },
    { name: 'Câmera Principal', value: '48MP + 12MP Ultra Wide + 12MP Telephoto' },
    { name: 'Câmera Frontal', value: '12MP TrueDepth' },
    { name: 'Tela', value: '6.7" Super Retina XDR OLED' },
    { name: 'Resolução', value: '2796 x 1290 pixels' },
    { name: 'Bateria', value: '4422 mAh' },
    { name: 'Sistema', value: 'iOS 17' }
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center text-sm text-gray-400"
          >
            <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Celulares</a>
            <span className="mx-2">/</span>
            <span className="text-amber-400">iPhone 15 Pro Max</span>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-900/20 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for product image */}
              <div className="w-64 h-64 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <span className="text-4xl font-bold">iPhone</span>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className={`aspect-square bg-gray-900 rounded-lg border ${item === 1 ? 'border-amber-500' : 'border-amber-900/20'} cursor-pointer hover:border-amber-500 transition-colors`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                      <span className="text-xs font-bold">{item}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">iPhone 15 Pro Max</h1>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className="w-4 h-4 text-amber-500 fill-amber-500" 
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(128 avaliações)</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                  <FiHeart className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                  <FiShare2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              O iPhone 15 Pro Max representa o ápice da inovação da Apple, combinando design premium com tecnologia de ponta. Com seu poderoso chip A17 Pro, sistema de câmera profissional e tela Super Retina XDR, ele oferece uma experiência incomparável para os usuários mais exigentes.
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-amber-400">
                  {storageOptions.find(opt => opt.id === selectedStorage)?.price}
                </span>
                <span className="text-gray-500 text-sm line-through">R$ 12.999,00</span>
              </div>
              <p className="text-green-500 text-sm mt-1 flex items-center">
                <FiCheck className="mr-1" /> Em estoque - Pronta entrega
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-white font-medium mb-3">Cor</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      selectedColor === color.id ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-black' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.id && (
                      <FiCheck className={`w-5 h-5 ${color.id === 'preto' ? 'text-white' : 'text-black'}`} />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-2">Selecionado: {colors.find(c => c.id === selectedColor)?.name}</p>
            </div>

            {/* Storage Selection */}
            <div className="mb-6">
              <h3 className="text-white font-medium mb-3">Armazenamento</h3>
              <div className="flex flex-wrap gap-3">
                {storageOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedStorage(option.id)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedStorage === option.id 
                        ? 'bg-amber-500 text-black border-amber-500' 
                        : 'bg-gray-800 text-white border-gray-700 hover:border-amber-500'
                    } transition-colors`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-white font-medium mb-3">Quantidade</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 bg-gray-800 rounded-l-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  -
                </button>
                <div className="w-16 h-10 bg-gray-900 flex items-center justify-center text-white border-t border-b border-gray-700">
                  {quantity}
                </div>
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 bg-gray-800 rounded-r-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
              >
                <FiShoppingCart className="w-5 h-5" /> Adicionar ao Carrinho
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-transparent border border-amber-500 text-amber-400 font-bold py-4 px-8 rounded-lg hover:bg-amber-500/10 transition-colors duration-300"
              >
                Comprar Agora
              </motion.button>
            </div>

            {/* Specifications */}
            <div className="border-t border-amber-900/30 pt-6">
              <h3 className="text-white font-bold mb-4">Especificações Técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-400 min-w-32">{spec.name}:</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
