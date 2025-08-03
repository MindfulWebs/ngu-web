import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, Target } from 'lucide-react';

const Matches: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const upcomingMatches = [
    {
      date: '2025-01-28',
      time: '20:00',
      opponent: 'Fnatic',
      game: 'CS:GO',
      tournament: 'ESL Pro League',
      type: 'Bo3',
      venue: 'Online',
      importance: 'high'
    },
    {
      date: '2025-01-30',
      time: '18:30',
      opponent: 'G2 Esports',
      game: 'League of Legends',
      tournament: 'LEC',
      type: 'Bo1',
      venue: 'Berlin',
      importance: 'high'
    },
    {
      date: '2025-02-02',
      time: '19:45',
      opponent: 'Team Liquid',
      game: 'Valorant',
      tournament: 'VCT Champions',
      type: 'Bo3',
      venue: 'Los Angeles',
      importance: 'medium'
    },
    {
      date: '2025-02-05',
      time: '21:00',
      opponent: 'Astralis',
      game: 'CS:GO',
      tournament: 'IEM Katowice',
      type: 'Bo3',
      venue: 'Katowice',
      importance: 'high'
    }
  ];

  const recentResults = [
    {
      date: '2025-01-25',
      opponent: 'NAVI',
      game: 'CS:GO',
      result: 'Victoria',
      score: '16-13',
      tournament: 'ESL Pro League',
      maps: ['Dust2: 16-10', 'Mirage: 14-16', 'Inferno: 16-13']
    },
    {
      date: '2025-01-23',
      opponent: 'MAD Lions',
      game: 'League of Legends',
      result: 'Victoria',
      score: '3-1',
      tournament: 'LEC',
      maps: ['Game 1: Victoria', 'Game 2: Derrota', 'Game 3: Victoria', 'Game 4: Victoria']
    },
    {
      date: '2025-01-20',
      opponent: 'Sentinels',
      game: 'Valorant',
      result: 'Derrota',
      score: '1-2',
      tournament: 'VCT',
      maps: ['Haven: 13-8', 'Bind: 11-13', 'Ascent: 10-13']
    },
    {
      date: '2025-01-18',
      opponent: 'Team Vitality',
      game: 'CS:GO',
      result: 'Victoria',
      score: '16-11',
      tournament: 'BLAST Premier',
      maps: ['Ancient: 16-11']
    }
  ];

  const getGameColor = (game: string) => {
    switch (game) {
      case 'CS:GO': return 'bg-orange-600';
      case 'League of Legends': return 'bg-blue-600';
      case 'Valorant': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Calendario de Partidos</h1>
          <p className="text-xl text-gray-400">Sigue todos nuestros enfrentamientos y resultados</p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedTab === 'upcoming'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Calendar size={18} />
              <span>Próximos Partidos</span>
            </button>
            <button
              onClick={() => setSelectedTab('results')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedTab === 'results'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Trophy size={18} />
              <span>Resultados Recientes</span>
            </button>
          </div>
        </div>

        {/* Upcoming Matches */}
        {selectedTab === 'upcoming' && (
          <div className="space-y-6">
            {upcomingMatches.map((match, index) => (
              <div key={index} className={`bg-gray-800 rounded-lg p-6 border-l-4 ${getImportanceColor(match.importance)} hover:bg-gray-750 transition-colors duration-300`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getGameColor(match.game)}`}>
                        {match.game}
                      </span>
                      <span className="text-sm text-gray-400">{match.tournament}</span>
                      <span className="text-sm text-gray-500">{match.type}</span>
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      NGU eSports <span className="text-red-400">vs</span> {match.opponent}
                    </div>
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(match.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{match.venue}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent Results */}
        {selectedTab === 'results' && (
          <div className="space-y-6">
            {recentResults.map((match, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getGameColor(match.game)}`}>
                        {match.game}
                      </span>
                      <span className="text-sm text-gray-400">{match.tournament}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        match.result === 'Victoria' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                      }`}>
                        {match.result}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      NGU eSports <span className="text-red-400">vs</span> {match.opponent}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(match.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="text-xl font-bold text-red-400">{match.score}</div>
                    </div>
                  </div>
                </div>
                
                {/* Map Results */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-sm text-gray-500 mb-2">Detalles por mapa:</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {match.maps.map((map, mapIndex) => (
                      <div key={mapIndex} className="bg-gray-700 px-3 py-2 rounded text-sm">
                        {map}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tournament Calendar */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Calendario de Torneos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <Trophy size={32} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ESL Pro League</h3>
              <p className="text-gray-400 mb-4">28 Enero - 15 Febrero</p>
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">CS:GO</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <Trophy size={32} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">LEC Spring Split</h3>
              <p className="text-gray-400 mb-4">1 Febrero - 31 Marzo</p>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">League of Legends</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <Trophy size={32} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">VCT Champions</h3>
              <p className="text-gray-400 mb-4">5 Febrero - 25 Febrero</p>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Valorant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;