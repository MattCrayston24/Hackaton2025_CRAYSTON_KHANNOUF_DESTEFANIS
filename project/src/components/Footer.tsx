import React from 'react';
import { Leaf, Mail, Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EcoFood AI</h3>
                <p className="text-sm text-gray-400">Impact Alimentaire Intelligent</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Utiliser l'intelligence artificielle pour rendre visible l'impact environnemental 
              de nos choix alimentaires et construire un avenir plus durable.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Github className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Fonctionnalités</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Calculateur d'impact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Recommandations IA</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Suivi des progrès</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Base de données</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2025 EcoFood AI. Développé avec</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>pour la planète.</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;