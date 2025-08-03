import React, { useState } from 'react';
import { Star, Award, Target, Zap } from 'lucide-react';

const TeamRoster: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState('csgo');

  const teams = {
    csgo: [
      {
        name: 'Alex "Phantom" Rodriguez',
        role: 'AWPer',
        nationality: 'España',
        age: 23,
        experience: '5 años',
        achievements: ['Major Champion 2024', 'MVP ESL Pro League'],
        rating: 1.24,
        kd: 1.31,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
      },
      {
        name: 'Miguel "Storm" García',
        role: 'Entry Fragger',
        nationality: 'España',
        age: 21,
        experience: '3 años',
        achievements: ['IEM Champion 2023', 'Rising Star Award'],
        rating: 1.18,
        kd: 1.25,
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
      },
      {
        name: 'Carlos "IceMan" López',
        role: 'IGL',
        nationality: 'España',
        age: 26,
        experience: '8 años',
        achievements: ['Best IGL 2023', 'Tactical Genius Award'],
        rating: 1.09,
        kd: 1.12,
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
      },
      {
        name: 'David "Flash" Martín',
        role: 'Support',
        nationality: 'España',
        age: 22,
        experience: '4 años',
        achievements: ['Best Support 2024', 'Team Player Award'],
        rating: 1.15,
        kd: 1.18,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      {
        name: 'Pablo "Viper" Sánchez',
        role: 'Rifler',
        nationality: 'España',
        age: 20,
        experience: '2 años',
        achievements: ['Rookie of the Year 2024'],
        rating: 1.21,
        kd: 1.28,
        image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg'
      }
    ],
    lol: [
      {
        name: 'Sergio "Phoenix" Ruiz',
        role: 'Mid Laner',
        nationality: 'España',
        age: 24,
        experience: '6 años',
        achievements: ['LEC Champion 2024', 'Best Mid EU'],
        rating: 8.5,
        kd: 3.2,
        image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg'
      },
      {
        name: 'Antonio "Titan" Pérez',
        role: 'Top Laner',
        nationality: 'España',
        age: 25,
        experience: '7 años',
        achievements: ['Worlds Semifinalist 2023'],
        rating: 7.8,
        kd: 2.9,
        image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg'
      },
      {
        name: 'Javier "Shadow" Moreno',
        role: 'Jungler',
        nationality: 'España',
        age: 22,
        experience: '4 años',
        achievements: ['Best Jungler LVP 2024'],
        rating: 8.1,
        kd: 2.5,
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
      },
      {
        name: 'Luis "Blaze" Fernández',
        role: 'ADC',
        nationality: 'España',
        age: 23,
        experience: '5 años',
        achievements: ['Perfect Game Achievement'],
        rating: 8.3,
        kd: 3.8,
        image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg'
      },
      {
        name: 'Raul "Shield" González',
        role: 'Support',
        nationality: 'España',
        age: 26,
        experience: '8 años',
        achievements: ['Best Support Europe 2023'],
        rating: 7.9,
        kd: 1.8,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      }
    ],
    valorant: [
      {
        name: 'Eduardo "Ace" Castro',
        role: 'Duelist',
        nationality: 'España',
        age: 21,
        experience: '3 años',
        achievements: ['VCT Champion 2024', 'Clutch Master'],
        rating: 1.35,
        kd: 1.42,
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
      },
      {
        name: 'Roberto "Sage" Vargas',
        role: 'Sentinel',
        nationality: 'España',
        age: 24,
        experience: '4 años',
        achievements: ['Best Sentinel EU 2024'],
        rating: 1.18,
        kd: 1.22,
        image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg'
      },
      {
        name: 'Manuel "Smoke" Torres',
        role: 'Controller',
        nationality: 'España',
        age: 23,
        experience: '4 años',
        achievements: ['Strategic Mind Award 2024'],
        rating: 1.12,
        kd: 1.15,
        image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg'
      },
      {
        name: 'Fernando "Dash" Ramos',
        role: 'Initiator',
        nationality: 'España',
        age: 22,
        experience: '3 años',
        achievements: ['Rising Star 2024'],
        rating: 1.25,
        kd: 1.38,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
      },
      {
        name: 'Gabriel "Nova" Silva',
        role: 'Flex',
        nationality: 'España',
        age: 20,
        experience: '2 años',
        achievements: ['Rookie Excellence 2024'],
        rating: 1.19,
        kd: 1.24,
        image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg'
      }
    ]
  };

  const gameNames = {
    csgo: 'Counter-Strike 2',
    lol: 'League of Legends',
    valorant: 'Valorant'
  };

  const currentTeam = teams[selectedGame as keyof typeof teams];

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Nuestros Equipos</h1>
          <p className="text-xl text-gray-400">Los mejores jugadores de cada disciplina</p>
        </div>

        {/* Game Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            {Object.entries(gameNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setSelectedGame(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  selectedGame === key
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {currentTeam.map((player, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-sm text-red-400 font-medium">{player.role}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{player.name}</h3>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex justify-between">
                    <span>Edad:</span>
                    <span>{player.age} años</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experiencia:</span>
                    <span>{player.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="text-red-400 font-medium">{player.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>K/D:</span>
                    <span className="text-green-400 font-medium">{player.kd}</span>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-xs text-gray-500 mb-2">Logros destacados:</div>
                  {player.achievements.slice(0, 2).map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                      <Award size={12} className="text-yellow-500" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Estadísticas del Equipo {gameNames[selectedGame as keyof typeof gameNames]}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">15</div>
              <div className="text-gray-400">Victorias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">3</div>
              <div className="text-gray-400">Derrotas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">83%</div>
              <div className="text-gray-400">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">#3</div>
              <div className="text-gray-400">Ranking Mundial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRoster;