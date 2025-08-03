import React, { useState } from 'react';
import { Home, Users, Calendar, Newspaper, Handshake, Mail, Info, ShoppingBag, Menu, X } from 'lucide-react';
import Homepage from './components/Homepage';
import TeamRoster from './components/TeamRoster';
import Matches from './components/Matches';
import News from './components/News';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import About from './components/About';
import Store from './components/Store';

const navigationItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'team', label: 'Equipo', icon: Users },
  { id: 'matches', label: 'Partidos', icon: Calendar },
  { id: 'news', label: 'Noticias', icon: Newspaper },
  { id: 'sponsors', label: 'Patrocinadores', icon: Handshake },
  { id: 'store', label: 'Tienda', icon: ShoppingBag },
  { id: 'about', label: 'Quiénes somos', icon: Info },
  { id: 'contact', label: 'Contacto', icon: Mail },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Homepage />;
      case 'team': return <TeamRoster />;
      case 'matches': return <Matches />;
      case 'news': return <News />;
      case 'sponsors': return <Sponsors />;
      case 'store': return <Store />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Homepage />;
    }
  };

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold">
                  NGU <span className="text-red-500">eSports</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                        currentPage === item.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <IconComponent size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2 ${
                      currentPage === item.id
                        ? 'bg-red-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="transition-all duration-300">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 NGU eSports Club. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;