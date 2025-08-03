import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Grid, List } from 'lucide-react';

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: 'Camiseta NGU Negra',
      price: 19.99,
      originalPrice: 24.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      rating: 4.8,
      reviews: 124,
      sale: true,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'Camiseta NGU Blanca',
      price: 21.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      rating: 4.7,
      reviews: 89,
      sale: false,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'Camiseta NGU Roja',
      price: 18.50,
      originalPrice: 21.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 4.9,
      reviews: 156,
      sale: true,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 4,
      name: 'Sudadera NGU Gaming',
      price: 39.99,
      category: 'clothing',
      image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg',
      rating: 4.6,
      reviews: 73,
      sale: false,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 5,
      name: 'Gorra NGU eSports',
      price: 15.99,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 4.5,
      reviews: 67,
      sale: false,
      sizes: ['Única']
    },
    {
      id: 6,
      name: 'Mousepad NGU Pro',
      price: 24.99,
      category: 'gaming',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      rating: 4.8,
      reviews: 201,
      sale: false,
      sizes: ['XL']
    },
    {
      id: 7,
      name: 'Llavero NGU Limited',
      price: 7.99,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      rating: 4.4,
      reviews: 34,
      sale: false,
      sizes: ['Única']
    },
    {
      id: 8,
      name: 'Botella NGU Hydro',
      price: 12.99,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      rating: 4.7,
      reviews: 92,
      sale: false,
      sizes: ['500ml']
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos los productos' },
    { id: 'clothing', label: 'Ropa' },
    { id: 'accessories', label: 'Accesorios' },
    { id: 'gaming', label: 'Gaming' }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="bg-gray-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Tienda NGU eSports</h1>
          <p className="text-xl text-gray-400">Lleva contigo los colores del equipo</p>
        </div>

        {/* Filters and View Options */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-16 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={`bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'h-64'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.sale && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      OFERTA
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center space-x-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-400">€{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">€{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Tallas disponibles:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size, index) => (
                      <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded text-xs">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart size={18} />
                  <span>Añadir al Carrito</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Size Guide */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Guía de Tallas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-gray-400">Talla</th>
                  <th className="py-3 px-4 text-gray-400">Pecho (cm)</th>
                  <th className="py-3 px-4 text-gray-400">Largo (cm)</th>
                  <th className="py-3 px-4 text-gray-400">Ancho (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">S</td>
                  <td className="py-3 px-4">46</td>
                  <td className="py-3 px-4">69</td>
                  <td className="py-3 px-4">46</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">M</td>
                  <td className="py-3 px-4">51</td>
                  <td className="py-3 px-4">72</td>
                  <td className="py-3 px-4">51</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">L</td>
                  <td className="py-3 px-4">56</td>
                  <td className="py-3 px-4">75</td>
                  <td className="py-3 px-4">56</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium">XL</td>
                  <td className="py-3 px-4">61</td>
                  <td className="py-3 px-4">78</td>
                  <td className="py-3 px-4">61</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">XXL</td>
                  <td className="py-3 px-4">66</td>
                  <td className="py-3 px-4">81</td>
                  <td className="py-3 px-4">66</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Envío Gratuito</h3>
            <p className="text-gray-400">En pedidos superiores a €25</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Calidad Premium</h3>
            <p className="text-gray-400">Materiales de la más alta calidad</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Satisfacción Garantizada</h3>
            <p className="text-gray-400">30 días para devoluciones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;