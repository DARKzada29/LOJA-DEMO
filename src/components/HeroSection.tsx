import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>
      
      {/* Animated particles/grid effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-full h-full grid grid-cols-12 grid-rows-6 gap-4">
          {Array.from({ length: 72 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-amber-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.05 % 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <motion.div 
          className="w-full md:w-1/2 text-white space-y-6 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Tecnologia <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Premium</span> ao seu Alcance
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            Descubra os mais avançados computadores e smartphones das melhores marcas com design futurista e desempenho excepcional.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md flex items-center gap-2 shadow-lg shadow-amber-900/20"
            >
              Ver Produtos <FiArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-amber-500 text-amber-400 font-bold py-3 px-8 rounded-md hover:bg-amber-500/10 transition-colors duration-300"
            >
              Saiba Mais
            </motion.button>
          </div>
        </motion.div>

        {/* Image/Device mockup */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full max-w-md">
            {/* Placeholder for device image - would be replaced with actual image */}
            <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl border border-amber-500/30 shadow-xl shadow-amber-500/10 overflow-hidden flex items-center justify-center">
              <div className="text-amber-500 text-center p-8">
                <div className="w-24 h-24 mx-auto border-2 border-amber-500 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-4xl">DS</span>
                </div>
                <p className="text-xl font-bold">DARK-STORE</p>
                <p className="text-sm text-amber-400/70 mt-2">Tecnologia Premium</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
