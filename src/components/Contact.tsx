import React, { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Instagram, Youtube, Twitch, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'info@nguesports.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+34 910 123 456',
      description: 'Lun - Vie, 9:00 - 18:00'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      info: 'Calle Gaming, 123, Madrid',
      description: 'Gaming House & Oficinas'
    }
  ];

  const socialMedia = [
    {
      platform: 'Twitter',
      username: '@NGUeSports',
      followers: '45K',
      icon: Twitter,
      color: 'bg-blue-500 hover:bg-blue-600',
      url: '#'
    },
    {
      platform: 'Instagram',
      username: '@ngu_esports',
      followers: '32K',
      icon: Instagram,
      color: 'bg-pink-500 hover:bg-pink-600',
      url: '#'
    },
    {
      platform: 'YouTube',
      username: 'NGU eSports',
      followers: '78K',
      icon: Youtube,
      color: 'bg-red-600 hover:bg-red-700',
      url: '#'
    },
    {
      platform: 'Twitch',
      username: 'NGUeSports',
      followers: '156K',
      icon: Twitch,
      color: 'bg-purple-600 hover:bg-purple-700',
      url: '#'
    }
  ];

  const departments = [
    'Consulta General',
    'Pruebas de Jugadores',
    'Prensa y Medios',
    'Patrocinios',
    'Soporte Técnico',
    'Tienda Online'
  ];

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Contacta con Nosotros</h1>
          <p className="text-xl text-gray-400">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Selecciona un asunto</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            {/* Contact Details */}
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-red-600 p-3 rounded-lg">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{contact.title}</h3>
                        <p className="text-xl text-red-400 font-medium">{contact.info}</p>
                        <p className="text-sm text-gray-400">{contact.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Horarios de Oficina</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lunes - Viernes</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábados</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Síguenos en Redes Sociales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedia.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className={`${social.color} rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 block`}
                >
                  <IconComponent size={32} className="text-white mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-1">{social.platform}</h3>
                  <p className="text-white opacity-90 mb-2">{social.username}</p>
                  <p className="text-white opacity-75 text-sm">{social.followers} seguidores</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Visítanos</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Mapa interactivo de ubicación</p>
                <p className="text-sm text-gray-500 mt-2">Gaming House NGU eSports - Madrid, España</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400 mb-4">
                Nuestra gaming house está ubicada en el corazón de Madrid, equipada con la mejor tecnología 
                para entrenamientos profesionales y creación de contenido.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2">
                <span>Ver en Google Maps</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;