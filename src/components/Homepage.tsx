import React from 'react';
import { Trophy, Users, Calendar, TrendingUp, Play } from 'lucide-react';

const Homepage: React.FC = () => {
  const achievements = [
    { title: 'Campeonatos Ganados', value: '12', icon: Trophy },
    { title: 'Jugadores Profesionales', value: '25', icon: Users },
    { title: 'Años de Experiencia', value: '7', icon: Calendar },
    { title: 'Victorias Consecutivas', value: '18', icon: TrendingUp },
  ];

  const recentMatches = [
    { opponent: 'Team Alpha', result: 'Victoria', score: '16-12', game: 'CS:GO' },
    { opponent: 'Beta Esports', result: 'Victoria', score: '3-1', game: 'LoL' },
    { opponent: 'Gamma Gaming', result: 'Derrota', score: '13-16', game: 'Valorant' },
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
            NGU <span className="text-red-500">eSports</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Dominando la escena competitiva desde 2018
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Somos un equipo profesional de eSports con presencia en League of Legends, CS:GO y Valorant. 
            Nuestro objetivo es competir al más alto nivel mientras desarrollamos el talento joven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Play size={20} />
              <span>Ver Destacados</span>
            </button>
            <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Únete al Equipo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-gray-400">{achievement.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Matches */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Últimos Resultados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentMatches.map((match, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">{match.game}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.result === 'Victoria' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {match.result}
                  </span>
                </div>
                <div className="text-lg font-semibold mb-2">NGU vs {match.opponent}</div>
                <div className="text-2xl font-bold text-red-400">{match.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-400">Conoce a los profesionales que representan NGU eSports</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Equipo CS:GO</h3>
                <p className="text-gray-400 mb-4">5 jugadores profesionales</p>
                <button className="text-red-400 hover:text-red-300 font-medium">Ver equipo →</button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Equipo LoL</h3>
                <p className="text-gray-400 mb-4">5 jugadores profesionales</p>
                <button className="text-red-400 hover:text-red-300 font-medium">Ver equipo →</button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Equipo Valorant</h3>
                <p className="text-gray-400 mb-4">5 jugadores profesionales</p>
                <button className="text-red-400 hover:text-red-300 font-medium">Ver equipo →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Últimas Noticias</h2>
            <p className="text-xl text-gray-400">Mantente al día con NGU eSports</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-orange-600"></div>
              <div className="p-6">
                <div className="text-sm text-red-400 mb-2">25 Enero 2025</div>
                <h3 className="text-xl font-bold mb-3">NGU eSports clasifica para el Major de CS:GO</h3>
                <p className="text-gray-400 mb-4">Nuestro equipo de CS:GO ha logrado clasificar para el próximo Major tras una impresionante racha de victorias...</p>
                <button className="text-red-400 hover:text-red-300 font-medium">Leer más →</button>
              </div>
            </article>
            <article className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600"></div>
              <div className="p-6">
                <div className="text-sm text-red-400 mb-2">23 Enero 2025</div>
                <h3 className="text-xl font-bold mb-3">Nuevo fichaje: Bienvenido 'Phoenix' a LoL</h3>
                <p className="text-gray-400 mb-4">Damos la bienvenida a nuestro nuevo midlaner, quien llega procedente de la liga europea...</p>
                <button className="text-red-400 hover:text-red-300 font-medium">Leer más →</button>
              </div>
            </article>
            <article className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600"></div>
              <div className="p-6">
                <div className="text-sm text-red-400 mb-2">20 Enero 2025</div>
                <h3 className="text-xl font-bold mb-3">Bootcamp de invierno: Preparándonos para la temporada</h3>
                <p className="text-gray-400 mb-4">Nuestros equipos están trabajando duro en el bootcamp de invierno para estar listos para los próximos torneos...</p>
                <button className="text-red-400 hover:text-red-300 font-medium">Leer más →</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;