import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              DARK-STORE
            </h2>
            <p className="text-gray-400 mb-4">
              Sua loja de tecnologia premium com os melhores computadores e celulares das marcas mais renomadas do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              {['FAQ', 'Política de Privacidade', 'Termos de Uso', 'Política de Devolução', 'Garantia', 'Rastreamento'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 text-amber-500 mt-1 mr-3" />
                <span className="text-gray-400">Av. Tecnologia, 1234<br />São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-400">(11) 9999-8888</span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-400">contato@darkstore.com.br</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-amber-900/30 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} DARK-STORE. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com tecnologia de ponta para a melhor experiência de compra.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
