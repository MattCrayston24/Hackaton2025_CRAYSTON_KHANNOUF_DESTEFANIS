import React from 'react';
import { Leaf, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EcoFood AI</h1>
              <p className="text-xs text-emerald-600">Impact Alimentaire Intelligent</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problematique" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Problématique
            </a>
            <a href="#calculateur" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Calculateur
            </a>
            <a href="#recommandations" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Recommandations
            </a>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
              Commencer
            </button>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;