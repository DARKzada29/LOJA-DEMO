import { motion } from 'framer-motion';
import { FiUser, FiCreditCard, FiMapPin, FiTruck, FiShield, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  const cartItems = [
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
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
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
              Finalizar Compra
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Complete suas informações para finalizar seu pedido.
          </p>
        </motion.div>

        {/* Checkout Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center w-full max-w-3xl">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= i 
                      ? 'bg-amber-500 text-black' 
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {i === 1 && <FiUser className="w-5 h-5" />}
                  {i === 2 && <FiCreditCard className="w-5 h-5" />}
                  {i === 3 && <FiCheck className="w-5 h-5" />}
                </div>
                <span className={`text-sm ${step >= i ? 'text-amber-400' : 'text-gray-500'}`}>
                  {i === 1 && 'Informações'}
                  {i === 2 && 'Pagamento'}
                  {i === 3 && 'Confirmação'}
                </span>
                {i < 3 && (
                  <div className={`w-full border-t ${step > i ? 'border-amber-500' : 'border-gray-800'} mt-4`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 border border-amber-900/20 rounded-xl overflow-hidden">
              {/* Step 1: Customer Information */}
              {step === 1 && (
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-6">Informações Pessoais e Entrega</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Nome Completo</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">E-mail</label>
                      <input 
                        type="email" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">CPF</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="000.000.000-00"
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-white font-bold mb-4 flex items-center">
                    <FiMapPin className="mr-2 text-amber-500" /> Endereço de Entrega
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">CEP</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="00000-000"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Rua</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="Nome da rua"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Número</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="123"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Complemento</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="Apto, Bloco, etc. (opcional)"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Bairro</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="Seu bairro"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Cidade</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="Sua cidade"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Estado</label>
                      <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                        <option value="">Selecione o estado</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        {/* Outros estados */}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={nextStep}
                      className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                    >
                      Continuar para Pagamento
                    </motion.button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-6">Método de Pagamento</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <button
                      onClick={() => setPaymentMethod('credit')}
                      className={`px-4 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                        paymentMethod === 'credit' 
                          ? 'bg-amber-500 text-black' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      <FiCreditCard className="w-5 h-5" /> Cartão de Crédito
                    </button>
                    <button
                      onClick={() => setPaymentMethod('boleto')}
                      className={`px-4 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                        paymentMethod === 'boleto' 
                          ? 'bg-amber-500 text-black' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      <FiFileText className="w-5 h-5" /> Boleto Bancário
                    </button>
                    <button
                      onClick={() => setPaymentMethod('pix')}
                      className={`px-4 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                        paymentMethod === 'pix' 
                          ? 'bg-amber-500 text-black' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      <FiHash className="w-5 h-5" /> PIX
                    </button>
                  </div>
                  
                  {paymentMethod === 'credit' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">Número do Cartão</label>
                        <input 
                          type="text" 
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-400 mb-2 text-sm">Data de Validade</label>
                          <input 
                            type="text" 
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                            placeholder="MM/AA"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2 text-sm">Código de Segurança (CVV)</label>
                          <input 
                            type="text" 
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">Nome no Cartão</label>
                        <input 
                          type="text" 
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                          placeholder="Nome como aparece no cartão"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">Parcelas</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                          <option value="1">1x de {formatPrice(calculateSubtotal() * 1.1)} (sem juros)</option>
                          <option value="2">2x de {formatPrice((calculateSubtotal() * 1.1) / 2)} (sem juros)</option>
                          <option value="3">3x de {formatPrice((calculateSubtotal() * 1.1) / 3)} (sem juros)</option>
                          <option value="4">4x de {formatPrice((calculateSubtotal() * 1.1) / 4)} (sem juros)</option>
                          <option value="5">5x de {formatPrice((calculateSubtotal() * 1.1) / 5)} (sem juros)</option>
                          <option value="6">6x de {formatPrice((calculateSubtotal() * 1.1) / 6)} (sem juros)</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'boleto' && (
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="flex items-start mb-4">
                        <FiInfo className="text-amber-500 w-5 h-5 mr-3 mt-1" />
                        <div>
                          <p className="text-white font-medium">Informações sobre Boleto Bancário</p>
                          <p className="text-gray-400 text-sm mt-1">
                            O boleto será gerado após a confirmação do pedido e terá vencimento em 3 dias úteis. 
                            O processamento do pagamento pode levar até 3 dias úteis após o pagamento.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-400">
                        <FiCheck className="w-5 h-5 mr-2" />
                        <span>Desconto de 5% no pagamento via boleto</span>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'pix' && (
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="flex items-start mb-4">
                        <FiInfo className="text-amber-500 w-5 h-5 mr-3 mt-1" />
                        <div>
                          <p className="text-white font-medium">Informações sobre PIX</p>
                          <p className="text-gray-400 text-sm mt-1">
                            O código PIX será gerado após a confirmação do pedido e terá validade de 30 minutos.
                            A confirmação do pagamento é instantânea.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-400">
                        <FiCheck className="w-5 h-5 mr-2" />
                        <span>Desconto de 10% no pagamento via PIX</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="border border-amber-500 text-amber-400 font-bold py-3 px-8 rounded-lg hover:bg-amber-500/10 transition-colors duration-300"
                    >
                      Voltar
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={nextStep}
                      className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                    >
                      Revisar e Finalizar
                    </motion.button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-6">Revisar e Confirmar Pedido</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <FiUser className="mr-2 text-amber-500" /> Informações Pessoais
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Nome:</span>
                          <span className="text-white ml-2">João Silva</span>
                        </div>
                        <div>
                          <span className="text-gray-400">E-mail:</span>
                          <span className="text-white ml-2">joao.silva@email.com</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Telefone:</span>
                          <span className="text-white ml-2">(11) 98765-4321</span>
                        </div>
                        <div>
                          <span className="text-gray-400">CPF:</span>
                          <span className="text-white ml-2">123.456.789-00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <FiMapPin className="mr-2 text-amber-500" /> Endereço de Entrega
                      </h4>
                      <p className="text-white text-sm">
                        Rua Exemplo, 123, Apto 45<br />
                        Bairro Centro, São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <FiCreditCard className="mr-2 text-amber-500" /> Método de Pagamento
                      </h4>
                      <p className="text-white text-sm">
                        {paymentMethod === 'credit' && 'Cartão de Crédito - Visa **** 1234'}
                        {paymentMethod === 'boleto' && 'Boleto Bancário'}
                        {paymentMethod === 'pix' && 'PIX'}
                      </p>
                      {paymentMethod === 'credit' && (
                        <p className="text-gray-400 text-sm mt-1">
                          6x de {formatPrice((calculateSubtotal() * 1.1) / 6)} sem juros
                        </p>
                      )}
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <FiTruck className="mr-2 text-amber-500" /> Entrega
                      </h4>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white text-sm">Entrega Expressa</p>
                          <p className="text-gray-400 text-sm">Receba em até 3 dias úteis</p>
                        </div>
                        <span className="text-green-500 font-medium">Grátis</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-3">Itens do Pedido</h4>
                      <div className="space-y-3">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center mr-3">
                                <span className="text-amber-500 text-xs font-bold">{item.image.substring(0, 2).toUpperCase()}</span>
                              </div>
                              <div>
                                <p className="text-white text-sm">{item.name}</p>
                                <p className="text-gray-400 text-xs">{item.color} | {item.storage} | Qtd: {item.quantity}</p>
                              </div>
                            </div>
                            <span className="text-amber-400 font-medium">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="border border-amber-500 text-amber-400 font-bold py-3 px-8 rounded-lg hover:bg-amber-500/10 transition-colors duration-300"
                    >
                      Voltar
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                    >
                      Finalizar Compra
                    </motion.button>
                  </div>
                </div>
              )}
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
              
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center mr-3">
                          <span className="text-amber-500 text-xs font-bold">{item.image.substring(0, 2).toUpperCase()}</span>
                        </div>
                        <div>
                          <p className="text-white text-sm">{item.name}</p>
                          <p className="text-gray-400 text-xs">Qtd: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-white">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
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
                  
                  {(paymentMethod === 'boleto' || paymentMethod === 'pix') && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Desconto {paymentMethod === 'boleto' ? '(5%)' : '(10%)'}
                      </span>
                      <span className="text-green-500">
                        -{formatPrice(calculateSubtotal() * (paymentMethod === 'boleto' ? 0.05 : 0.1))}
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-amber-900/20 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-amber-400 font-bold text-xl">
                        {formatPrice(
                          calculateSubtotal() * 1.1 * 
                          (paymentMethod === 'boleto' ? 0.95 : paymentMethod === 'pix' ? 0.9 : 1)
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-amber-900/20">
                  <div className="flex items-center text-gray-400 mb-4">
                    <FiShield className="w-5 h-5 mr-2 text-amber-500" />
                    <span className="text-sm">Compra 100% segura e protegida</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FiTruck className="w-5 h-5 mr-2 text-amber-500" />
                    <span className="text-sm">Entrega rápida para todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

// Adicionando os ícones que faltavam
const FiFileText = (props: any) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
};

const FiHash = (props: any) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" y1="9" x2="20" y2="9"></line>
      <line x1="4" y1="15" x2="20" y2="15"></line>
      <line x1="10" y1="3" x2="8" y2="21"></line>
      <line x1="16" y1="3" x2="14" y2="21"></line>
    </svg>
  );
};

const FiInfo = (props: any) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );
};
