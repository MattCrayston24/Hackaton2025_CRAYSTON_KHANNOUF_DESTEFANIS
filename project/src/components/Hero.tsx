import React from 'react';
import { ArrowDown, Sparkles, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2310b981%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Intelligence Artificielle × Écologie
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Révélez l'impact de vos
            <span className="text-emerald-600 block">choix alimentaires</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment l'intelligence artificielle peut rendre visible l'impact environnemental 
            de vos choix alimentaires quotidiens et vous guider vers un mode de vie plus durable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Calculer mon impact
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
              En savoir plus
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2.5T</div>
              <div className="text-gray-600">CO₂ économisé par an</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Utilisateurs actifs</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">Précision IA</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-emerald-500" />
      </div>
    </section>
  );
};

export default Hero;