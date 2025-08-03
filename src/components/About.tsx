import React, { useState } from 'react';
import { Calendar, Trophy, Users, Target, ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const timeline = [
    {
      year: '2018',
      title: 'Fundación de NGU eSports',
      description: 'Nace NGU eSports Club con la misión de alinear pasión y competición en la escena profesional.'
    },
    {
      year: '2019',
      title: 'Primer equipo profesional',
      description: 'Formamos nuestro primer equipo profesional de League of Legends y participamos en la liga nacional.'
    },
    {
      year: '2020',
      title: 'Expansión a CS:GO',
      description: 'Añadimos un equipo de CS:GO a nuestro roster y conseguimos clasificar para nuestro primer torneo internacional.'
    },
    {
      year: '2021',
      title: 'Primer campeonato nacional',
      description: 'Nuestro equipo de League of Legends gana el campeonato nacional, marcando un hito en la historia del club.'
    },
    {
      year: '2022',
      title: 'Academia de talentos',
      description: 'Lanzamos nuestro programa de desarrollo de jóvenes talentos, identificando y formando a la próxima generación.'
    },
    {
      year: '2023',
      title: 'Equipo de Valorant',
      description: 'Incorporamos un equipo profesional de Valorant y establecemos alianzas con universidades españolas.'
    },
    {
      year: '2024',
      title: 'Reconocimiento internacional',
      description: 'Conseguimos clasificar para múltiples torneos internacionales y nos posicionamos como top 3 en Europa.'
    },
    {
      year: '2025',
      title: 'Nueva era',
      description: 'Iniciamos una nueva era con renovadas instalaciones, nuevos fichajes y objetivos aún más ambiciosos.'
    }
  ];

  const values = [
    {
      title: 'Excelencia Competitiva',
      description: 'Buscamos siempre el más alto nivel de juego y competición.',
      icon: Trophy
    },
    {
      title: 'Desarrollo de Talento',
      description: 'Identificamos y desarrollamos a los mejores jugadores jóvenes.',
      icon: Users
    },
    {
      title: 'Integridad',
      description: 'Competimos con fair play y respeto hacia nuestros rivales.',
      icon: Target
    },
    {
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías y metodologías de entrenamiento.',
      icon: Calendar
    }
  ];

  const faqItems = [
    {
      question: '¿Cómo puedo unirme a NGU eSports?',
      answer: 'Realizamos pruebas periódicas para diferentes juegos. Puedes enviar tu solicitud a través de nuestro formulario de contacto incluyendo tu experiencia competitiva, rank actual y disponibilidad.'
    },
    {
      question: '¿Qué requisitos necesito para ser jugador profesional?',
      answer: 'Buscamos jugadores con alto nivel competitivo (al menos Immortal en Valorant, Global Elite en CS:GO, Master+ en LoL), dedicación completa, actitud profesional y habilidades de trabajo en equipo.'
    },
    {
      question: '¿Ofrecen becas o programas de desarrollo?',
      answer: 'Sí, tenemos un programa de academia para jugadores de 16-20 años donde proporcionamos entrenamiento, coaching y la oportunidad de desarrollarse hasta el nivel profesional.'
    },
    {
      question: '¿Dónde están ubicadas sus instalaciones?',
      answer: 'Nuestras instalaciones principales están en Madrid, España. Contamos con una gaming house completamente equipada y salas de entrenamiento con hardware de última generación.'
    },
    {
      question: '¿Hacen streams o contenido en directo?',
      answer: 'Sí, nuestros jugadores hacen streams regulares en Twitch y YouTube. También creamos contenido educativo y de entretenimiento para la comunidad.'
    },
    {
      question: '¿Cómo puedo ver sus partidos en directo?',
      answer: 'Puedes seguir todos nuestros partidos a través de nuestras redes sociales donde anunciamos horarios y plataformas de streaming. También tenemos un calendario actualizado en nuestra web.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            NGU eSports Club nace en 2018 con la misión de alinear pasión y competición en la 
            escena profesional. Nuestro equipo cuenta con campeones nacionales en League of 
            Legends y CS:GO, además de un sólido programa de desarrollo de jóvenes talentos.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
              alt="NGU eSports Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h2 className="text-3xl font-bold mb-2">Creamos comunidad, eventos y contenido de primer nivel</h2>
              <p className="text-xl text-gray-300">Únete a nuestra comunidad y forma parte de la historia de NGU eSports</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-750 transition-colors duration-300">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestra Historia</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600"></div>
            {timeline.map((event, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300">
                    <div className="text-2xl font-bold text-red-400 mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mb-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">NGU eSports en Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">25</div>
              <div className="text-gray-400">Jugadores Activos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">47</div>
              <div className="text-gray-400">Torneos Jugados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">12</div>
              <div className="text-gray-400">Títulos Ganados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">150K</div>
              <div className="text-gray-400">Seguidores</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-gray-750 transition-colors duration-300 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp size={24} className="text-red-400" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes más preguntas?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo está aquí para ayudarte con cualquier consulta
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors duration-300">
            Contactar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;