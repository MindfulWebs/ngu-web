import React from 'react';
import { ExternalLink, Award, Handshake, Star } from 'lucide-react';

const Sponsors: React.FC = () => {
  const mainSponsors = [
    {
      name: 'TechGear Pro',
      logo: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      description: 'Nuestro partner principal para hardware gaming de alta gama',
      category: 'Hardware',
      since: '2023',
      tier: 'Principal'
    },
    {
      name: 'EnergyBoost',
      logo: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      description: 'Bebidas energéticas oficiales del equipo',
      category: 'Alimentación',
      since: '2022',
      tier: 'Principal'
    },
    {
      name: 'StreamPro',
      logo: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      description: 'Plataforma de streaming y contenido digital',
      category: 'Tecnología',
      since: '2024',
      tier: 'Principal'
    }
  ];

  const secondarySponsors = [
    {
      name: 'GameChair',
      logo: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg',
      description: 'Sillas gaming ergonómicas',
      category: 'Mobiliario',
      since: '2023',
      tier: 'Secundario'
    },
    {
      name: 'SoundWave',
      logo: 'https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg',
      description: 'Auriculares y equipos de audio',
      category: 'Audio',
      since: '2024',
      tier: 'Secundario'
    },
    {
      name: 'NetSpeed',
      logo: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      description: 'Conexión de internet de alta velocidad',
      category: 'Internet',
      since: '2023',
      tier: 'Secundario'
    },
    {
      name: 'ProteinPower',
      logo: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      description: 'Suplementos nutricionales',
      category: 'Nutrición',
      since: '2024',
      tier: 'Secundario'
    }
  ];

  const partnerships = [
    {
      organization: 'Universidad Complutense Madrid',
      type: 'Educativo',
      description: 'Programa de becas para jugadores estudiantiles',
      icon: Award
    },
    {
      organization: 'Fundación eSports España',
      type: 'Desarrollo',
      description: 'Desarrollo del talento joven en eSports',
      icon: Star
    },
    {
      organization: 'Liga Nacional eSports',
      type: 'Competitivo',
      description: 'Participación en ligas nacionales',
      icon: Handshake
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Nuestros Patrocinadores</h1>
          <p className="text-xl text-gray-400">Gracias a nuestros socios que hacen posible NGU eSports</p>
        </div>

        {/* Main Sponsors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Patrocinadores Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mainSponsors.map((sponsor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{sponsor.name}</h3>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {sponsor.tier}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">{sponsor.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-700 px-3 py-1 rounded">{sponsor.category}</span>
                    <span>Socio desde {sponsor.since}</span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Visitar Sitio Web</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Sponsors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Patrocinadores Colaboradores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondarySponsors.map((sponsor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="h-32 overflow-hidden">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-gray-700 px-2 py-1 rounded">{sponsor.category}</span>
                    <span>Desde {sponsor.since}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Alianzas Estratégicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => {
              const IconComponent = partnership.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{partnership.organization}</h3>
                      <span className="text-sm text-red-400">{partnership.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{partnership.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro socio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a las marcas que confían en NGU eSports y llega a miles de fans apasionados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors duration-300">
              Descargar Dossier
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-bold transition-all duration-300">
              Contactar Comercial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;