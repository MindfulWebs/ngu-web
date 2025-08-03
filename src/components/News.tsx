import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: 'NGU eSports clasifica para el Major de CS:GO',
      excerpt: 'Nuestro equipo de CS:GO ha logrado clasificar para el próximo Major tras una impresionante racha de victorias en la clasificatoria europea.',
      content: 'Después de semanas intensas de competición, NGU eSports ha conseguido su lugar en el Major de CS:GO. El equipo mostró un rendimiento excepcional...',
      category: 'csgo',
      author: 'María González',
      date: '2025-01-25',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'Nuevo fichaje: Bienvenido Phoenix a League of Legends',
      excerpt: 'Damos la bienvenida a nuestro nuevo midlaner Phoenix, quien llega procedente de la liga europea con una impresionante trayectoria.',
      content: 'Phoenix se une a nuestro roster de League of Legends como midlaner titular. Con 6 años de experiencia profesional...',
      category: 'lol',
      author: 'Carlos Martín',
      date: '2025-01-23',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      featured: true
    },
    {
      id: 3,
      title: 'Bootcamp de invierno: Preparándonos para la temporada',
      excerpt: 'Nuestros equipos están trabajando duro en el bootcamp de invierno para estar listos para los próximos torneos importantes.',
      content: 'El bootcamp de invierno ha comenzado con todos nuestros equipos trabajando 12 horas diarias...',
      category: 'general',
      author: 'Laura Sánchez',
      date: '2025-01-20',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Victoria épica contra Team Vitality en Valorant',
      excerpt: 'Nuestro equipo de Valorant consiguió una remontada histórica contra Team Vitality en los cuartos de final del VCT.',
      content: 'En un partido que parecía perdido, NGU eSports demostró su carácter y remontó desde un 0-8...',
      category: 'valorant',
      author: 'Pedro Rodríguez',
      date: '2025-01-18',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'Nuevo acuerdo de patrocinio con TechGear',
      excerpt: 'Nos complace anunciar nuestro nuevo acuerdo de patrocinio con TechGear, que proporcionará equipamiento de última generación.',
      content: 'TechGear se convierte en nuestro socio oficial de hardware, proporcionando periféricos gaming de alta gama...',
      category: 'general',
      author: 'Ana López',
      date: '2025-01-15',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Todas las noticias', color: 'bg-gray-600' },
    { id: 'csgo', label: 'CS:GO', color: 'bg-orange-600' },
    { id: 'lol', label: 'League of Legends', color: 'bg-blue-600' },
    { id: 'valorant', label: 'Valorant', color: 'bg-red-600' },
    { id: 'general', label: 'General', color: 'bg-purple-600' }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Noticias NGU eSports</h1>
          <p className="text-xl text-gray-400">Mantente al día con todas las novedades del equipo</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar noticias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white`
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Noticias Destacadas</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="relative h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                        categories.find(cat => cat.id === article.category)?.color || 'bg-gray-600'
                      }`}>
                        {categories.find(cat => cat.id === article.category)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{new Date(article.date).toLocaleDateString('es-ES')}</span>
                        </div>
                      </div>
                      <button className="text-red-400 hover:text-red-300 flex items-center space-x-1 font-medium">
                        <span>Leer más</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Todas las Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      categories.find(cat => cat.id === article.category)?.color || 'bg-gray-600'
                    }`}>
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={12} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
          <p className="text-xl mb-8 opacity-90">Recibe las últimas noticias directamente en tu email</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;