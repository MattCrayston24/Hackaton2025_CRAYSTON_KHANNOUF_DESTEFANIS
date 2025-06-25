import React from 'react';
import { Lightbulb, ArrowRight, Star, Leaf } from 'lucide-react';

const RecommendationsSection: React.FC = () => {
  const recommendations = [
    {
      title: "Réduire la consommation de viande rouge",
      description: "Remplacer le bœuf par du poulet peut réduire l'impact CO₂ de 85%",
      impact: "-85% CO₂",
      difficulty: "Facile",
      category: "Protéines"
    },
    {
      title: "Privilégier les protéines végétales",
      description: "Les lentilles et le tofu ont un impact 20x inférieur à la viande",
      impact: "-95% impact global",
      difficulty: "Modéré",
      category: "Alternatives"
    },
    {
      title: "Choisir des produits locaux et de saison",
      description: "Réduire le transport diminue significativement l'empreinte carbone",
      impact: "-40% transport",
      difficulty: "Facile",
      category: "Local"
    },
    {
      title: "Réduire le gaspillage alimentaire",
      description: "1/3 de la nourriture est gaspillée, optimisez vos achats",
      impact: "-30% déchets",
      difficulty: "Facile",
      category: "Optimisation"
    }
  ];

  const alternatives = [
    { from: "Bœuf", to: "Lentilles", reduction: "98%" },
    { from: "Porc", to: "Tofu", reduction: "85%" },
    { from: "Saumon", to: "Sardines", reduction: "60%" },
    { from: "Avocat", to: "Pommes locales", reduction: "70%" }
  ];

  return (
    <section id="recommandations" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Lightbulb className="h-4 w-4 mr-2" />
            Recommandations IA
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comment réduire votre impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre IA analyse vos habitudes et vous propose des alternatives concrètes 
            pour un mode de vie plus durable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Recommendations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Recommandations personnalisées
            </h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                        <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                          {rec.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{rec.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{rec.difficulty}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Leaf className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm font-medium text-emerald-600">{rec.impact}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alternatives */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Alternatives suggérées
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                {alternatives.map((alt, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium mb-1">
                          {alt.from}
                        </div>
                        <div className="text-xs text-gray-500">Impact élevé</div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                      <div className="text-center">
                        <div className="bg-emerald-100 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium mb-1">
                          {alt.to}
                        </div>
                        <div className="text-xs text-gray-500">Alternative durable</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-600">-{alt.reduction}</div>
                      <div className="text-xs text-gray-500">réduction</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500 text-white p-6 rounded-2xl mt-6">
              <h4 className="font-bold text-lg mb-2">🎯 Objectif mensuel</h4>
              <p className="text-emerald-100 mb-4">
                En appliquant ces recommandations, vous pourriez réduire votre impact de 65% ce mois-ci !
              </p>
              <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                Suivre mes progrès
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 inline-block">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Prêt à agir pour la planète ?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
                Créer mon plan personnalisé
              </button>
              <button className="border border-emerald-500 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                Télécharger l'app mobile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;