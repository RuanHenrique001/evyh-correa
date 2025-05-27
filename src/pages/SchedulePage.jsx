import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 'fio-a-fio',
    name: 'Alongamento Fio a Fio',
    duration: '2h30',
    price: 'R$ XX,XX'
  },
  {
    id: 'volume-russo',
    name: 'Volume Russo',
    duration: '3h',
    price: 'R$ XX,XX'
  },
  {
    id: 'lash-lifting',
    name: 'Lash Lifting',
    duration: '1h30',
    price: 'R$ XX,XX'
  },
  {
    id: 'design-sobrancelhas',
    name: 'Design de Sobrancelhas',
    duration: '1h',
    price: 'R$ XX,XX'
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00'
];

export default function SchedulePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui será implementada a lógica de envio do agendamento
    console.log('Dados do agendamento:', formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-serif text-primary mb-6">Escolha o Serviço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setFormData({ ...formData, service: service.id });
                    nextStep();
                  }}
                  className={`p-4 border-2 rounded-lg text-left transition-colors ${
                    formData.service === service.id
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <h4 className="font-serif text-lg text-primary">{service.name}</h4>
                  <div className="text-sm text-gray-600 mt-2">
                    <p>Duração: {service.duration}</p>
                    <p>Valor: {service.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-serif text-primary mb-6">Escolha a Data e Horário</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Data</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Horário Disponível</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`p-2 border rounded-lg transition-colors ${
                        formData.time === time
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-200 hover:border-primary'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.date || !formData.time}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 disabled:opacity-50"
                >
                  Próximo
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-serif text-primary mb-6">Suas Informações</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone/WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-gray-700 mb-2">Observações (opcional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center flex items-center justify-center" 
               style={{backgroundImage: 'url("https://via.placeholder.com/1200x400")'}}>
        <div className="bg-black bg-opacity-50 w-full h-full absolute" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl font-serif text-white mb-4">Agende seu Horário</h1>
          <p className="text-lg text-secondary">Transforme seu olhar em poucos cliques</p>
        </motion.div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-24 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {renderStep()}
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="bg-secondary py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-primary mb-6">Informações Importantes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="font-serif text-primary mb-2">Pontualidade</h3>
              <p className="text-gray-700">Chegue 5 minutos antes do seu horário</p>
            </div>
            <div>
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-ban"></i>
              </div>
              <h3 className="font-serif text-primary mb-2">Cancelamentos</h3>
              <p className="text-gray-700">Avise com 24h de antecedência</p>
            </div>
            <div>
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="font-serif text-primary mb-2">Preparação</h3>
              <p className="text-gray-700">Venha com os cílios limpos e sem maquiagem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
