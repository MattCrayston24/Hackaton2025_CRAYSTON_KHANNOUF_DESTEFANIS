import React from 'react';
import { AlertTriangle, Globe, Droplets, Sprout } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const stats = [
    {
      icon: Globe,
      value: '25%',
      label: 'des émissions mondiales de GES',
      description: 'proviennent de l\'agriculture et de l\'alimentation'
    },
    {
      icon: Droplets,
      value: '70%',
      label: 'de l\'eau douce consommée',
      description: 'est utilisée pour l\'agriculture'
    },
    {
      icon: Sprout,
      value: '80%',
      label: 'de la déforestation',
      description: 'est liée à l\'expansion agricole'
    }
  ];

  return (
    <section id="problematique" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Problématique
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            L'invisibilité de notre impact alimentaire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos choix alimentaires quotidiens ont un impact majeur sur l'environnement, 
            mais cet impact reste largement invisible pour la plupart d'entre nous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Le défi de la conscience environnementale
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Complexité des données</h4>
                  <p className="text-gray-600">L'impact environnemental varie énormément selon les modes de production, transport et transformation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Manque de transparence</h4>
                  <p className="text-gray-600">Les étiquettes actuelles ne communiquent pas l'impact environnemental des produits.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Droplets className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Effet cumulatif invisible</h4>
                  <p className="text-gray-600">L'impact de nos choix quotidiens s'accumule sans que nous en ayons conscience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Impact global de l'alimentation
            </h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <stat.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-emerald-600">{stat.value}</span>
                      <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-emerald-500 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            Comment l'IA peut-elle nous aider ?
          </h3>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            L'intelligence artificielle peut analyser en temps réel l'impact environnemental de nos choix alimentaires, 
            nous permettant de prendre des décisions éclairées et durables au quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;