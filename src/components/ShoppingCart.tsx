import { motion } from 'framer-motion';
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      color: 'Preto',
      storage: '512GB',
      price: 10999,
      quantity: 1,
      image: 'iphone'
    },
    {
      id: 2,
      name: 'MacBook Air M3',
      color: 'Prata',
      storage: '512GB',
      price: 12499,
      quantity: 1,
      image: 'macbook'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Carrinho de Compras
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Revise seus itens e prossiga para o checkout quando estiver pronto.
          </p>
        </motion.div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <motion.div 
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900 border border-amber-900/20 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-amber-900/20">
                  <h3 className="text-white font-bold">Itens do Carrinho ({cartItems.length})</h3>
                </div>
                
                <div className="divide-y divide-amber-900/20">
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      className="p-6 flex flex-col sm:flex-row items-center gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                          <span className="text-lg font-bold">{item.image.substring(0, 2).toUpperCase()}</span>
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-gray-400 text-sm">
                          {item.color} | {item.storage}
                        </p>
                        <p className="text-amber-400 font-bold mt-1">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-800 rounded-l-md flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                        >
                          <FiMinus className="w-4 h-4" />
                        </button>
                        <div className="w-12 h-8 bg-gray-800 flex items-center justify-center text-white border-l border-r border-gray-700">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-800 rounded-r-md flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                        >
                          <FiPlus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Total and Remove */}
                      <div className="flex flex-col items-end">
                        <p className="text-white font-bold">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-sm flex items-center mt-2 hover:text-red-400 transition-colors"
                        >
                          <FiTrash2 className="w-4 h-4 mr-1" /> Remover
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Order Summary */}
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900 border border-amber-900/20 rounded-xl overflow-hidden sticky top-24">
                <div className="p-6 border-b border-amber-900/20">
                  <h3 className="text-white font-bold">Resumo do Pedido</h3>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">{formatPrice(calculateSubtotal())}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Frete</span>
                    <span className="text-green-500">Grátis</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Impostos</span>
                    <span className="text-white">{formatPrice(calculateSubtotal() * 0.1)}</span>
                  </div>
                  
                  <div className="border-t border-amber-900/20 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-amber-400 font-bold text-xl">
                        {formatPrice(calculateSubtotal() * 1.1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                    >
                      <FiShoppingCart className="w-5 h-5" /> Finalizar Compra
                    </motion.button>
                    
                    <button className="w-full text-center text-amber-400 mt-4 hover:text-amber-300 transition-colors">
                      Continuar Comprando
                    </button>
                  </div>
                  
                  <div className="border-t border-amber-900/20 pt-4 mt-4">
                    <h4 className="text-white font-medium mb-3">Cupom de Desconto</h4>
                    <div className="flex">
                      <input 
                        type="text" 
                        placeholder="Digite seu cupom" 
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                      />
                      <button className="bg-amber-500 text-black font-bold px-4 rounded-r-lg hover:bg-amber-400 transition-colors">
                        Aplicar
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-amber-900/20 pt-4 mt-4">
                    <h4 className="text-white font-medium mb-2">Aceitamos</h4>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-gray-800 rounded"></div>
                      <div className="w-10 h-6 bg-gray-800 rounded"></div>
                      <div className="w-10 h-6 bg-gray-800 rounded"></div>
                      <div className="w-10 h-6 bg-gray-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-gray-900 border border-amber-900/20 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <FiShoppingCart className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Seu carrinho está vazio</h3>
            <p className="text-gray-400 mb-6">Adicione produtos ao seu carrinho para continuar.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2"
            >
              Explorar Produtos
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
