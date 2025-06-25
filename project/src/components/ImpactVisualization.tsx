import React from 'react';
import { Cloud, Droplets, Sprout, TrendingUp, AlertCircle } from 'lucide-react';

interface ImpactData {
  co2: number;
  water: number;
  land: number;
}

interface ImpactVisualizationProps {
  impactData: ImpactData;
  selectedFoods: any[];
}

const ImpactVisualization: React.FC<ImpactVisualizationProps> = ({ impactData, selectedFoods }) => {
  const getImpactLevel = (value: number, type: string) => {
    const thresholds = {
      co2: { low: 5, medium: 15, high: 30 },
      water: { low: 5000, medium: 10000, high: 20000 },
      land: { low: 10, medium: 25, high: 50 }
    };
    
    const threshold = thresholds[type as keyof typeof thresholds];
    if (value <= threshold.low) return { level: 'low', color: 'emerald', text: 'Faible' };
    if (value <= threshold.medium) return { level: 'medium', color: 'yellow', text: 'Modéré' };
    if (value <= threshold.high) return { level: 'high', color: 'orange', text: 'Élevé' };
    return { level: 'very-high', color: 'red', text: 'Très élevé' };
  };

  const co2Level = getImpactLevel(impactData.co2, 'co2');
  const waterLevel = getImpactLevel(impactData.water, 'water');
  const landLevel = getImpactLevel(impactData.land, 'land');

  const equivalences = {
    co2: Math.round(impactData.co2 / 2.3 * 100) / 100, // km en voiture
    water: Math.round(impactData.water / 300), // douches
    land: Math.round(impactData.land * 10) / 10 // terrains de foot
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Résultats de l'analyse IA
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Impact environnemental de vos choix
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre IA a analysé {selectedFoods.length} aliment{selectedFoods.length > 1 ? 's' : ''} 
            et calculé leur impact environnemental précis.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-${co2Level.color}-100 text-${co2Level.color}-800`}>
                {co2Level.text}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {impactData.co2.toFixed(1)} kg
            </h3>
            <p className="text-gray-600 mb-4">Émissions CO₂</p>
            <div className="bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className={`bg-${co2Level.color}-500 h-2 rounded-full transition-all duration-1000`}
                style={{ width: `${Math.min((impactData.co2 / 50) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">
              ≈ {equivalences.co2} km en voiture
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-cyan-100 p-3 rounded-xl">
                <Droplets className="h-8 w-8 text-cyan-600" />
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-${waterLevel.color}-100 text-${waterLevel.color}-800`}>
                {waterLevel.text}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {(impactData.water / 1000).toFixed(1)}k L
            </h3>
            <p className="text-gray-600 mb-4">Consommation d'eau</p>
            <div className="bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className={`bg-${waterLevel.color}-500 h-2 rounded-full transition-all duration-1000`}
                style={{ width: `${Math.min((impactData.water / 25000) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">
              ≈ {equivalences.water} douches
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Sprout className="h-8 w-8 text-green-600" />
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-${landLevel.color}-100 text-${landLevel.color}-800`}>
                {landLevel.text}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {impactData.land.toFixed(1)} m²
            </h3>
            <p className="text-gray-600 mb-4">Utilisation du sol</p>
            <div className="bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className={`bg-${landLevel.color}-500 h-2 rounded-full transition-all duration-1000`}
                style={{ width: `${Math.min((impactData.land / 100) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">
              ≈ {landLevel.land} terrains de foot
            </p>
          </div>
        </div>

        {/* Food Breakdown */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Détail par aliment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedFoods.map((food, index) => {
              const foodCO2 = food.impact.co2 * food.quantity;
              const percentage = (foodCO2 / impactData.co2) * 100;
              
              return (
                <div key={index} className="bg-white p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{food.name}</h4>
                      <p className="text-sm text-gray-500">{food.quantity} kg</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{foodCO2.toFixed(1)} kg CO₂</p>
                      <p className="text-sm text-gray-500">{percentage.toFixed(1)}%</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alert if high impact */}
        {(co2Level.level === 'high' || co2Level.level === 'very-high') && (
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl mt-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Impact élevé détecté</h4>
                <p className="text-orange-800 mb-4">
                  Vos choix alimentaires ont un impact environnemental significatif. 
                  Découvrez nos recommandations pour réduire votre empreinte.
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Voir les alternatives
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImpactVisualization;