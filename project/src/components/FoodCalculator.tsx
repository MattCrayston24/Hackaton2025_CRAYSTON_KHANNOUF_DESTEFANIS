import React, { useState } from 'react';
import { Search, Plus, Trash2, Calculator } from 'lucide-react';

interface Food {
  id: string;
  name: string;
  category: string;
  impact: {
    co2: number; // kg CO2 eq per kg
    water: number; // liters per kg
    land: number; // m2 per kg
  };
  quantity: number;
}

const foodDatabase: Omit<Food, 'quantity'>[] = [
  { id: '1', name: 'Bœuf', category: 'Viande', impact: { co2: 60, water: 15400, land: 164 } },
  { id: '2', name: 'Porc', category: 'Viande', impact: { co2: 7.6, water: 6000, land: 11 } },
  { id: '3', name: 'Poulet', category: 'Viande', impact: { co2: 6.9, water: 4300, land: 7.5 } },
  { id: '4', name: 'Saumon', category: 'Poisson', impact: { co2: 11.9, water: 2500, land: 3.7 } },
  { id: '5', name: 'Lentilles', category: 'Légumineuses', impact: { co2: 0.9, water: 5000, land: 3.4 } },
  { id: '6', name: 'Tofu', category: 'Protéines végétales', impact: { co2: 3, water: 2100, land: 2.2 } },
  { id: '7', name: 'Avocats', category: 'Fruits', impact: { co2: 0.6, water: 2000, land: 1.3 } },
  { id: '8', name: 'Bananes', category: 'Fruits', impact: { co2: 0.7, water: 790, land: 1.9 } },
  { id: '9', name: 'Riz', category: 'Céréales', impact: { co2: 4, water: 2500, land: 2.8 } },
  { id: '10', name: 'Blé', category: 'Céréales', impact: { co2: 1.4, water: 1800, land: 3.4 } },
];

interface FoodCalculatorProps {
  onFoodSelection: (foods: Food[]) => void;
}

const FoodCalculator: React.FC<FoodCalculatorProps> = ({ onFoodSelection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const filteredFoods = foodDatabase.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addFood = (food: Omit<Food, 'quantity'>) => {
    const newFood: Food = { ...food, quantity: 1 };
    setSelectedFoods(prev => [...prev, newFood]);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setSelectedFoods(prev =>
      prev.map(food => food.id === id ? { ...food, quantity } : food)
    );
  };

  const removeFood = (id: string) => {
    setSelectedFoods(prev => prev.filter(food => food.id !== id));
  };

  const calculateImpact = async () => {
    setIsCalculating(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    onFoodSelection(selectedFoods);
    setIsCalculating(false);
  };

  return (
    <section id="calculateur" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Calculateur d'Impact IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sélectionnez vos aliments et laissez notre IA calculer l'impact environnemental précis 
            de vos choix alimentaires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Food Selection */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Rechercher des aliments
            </h3>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un aliment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
              {filteredFoods.map((food) => (
                <div
                  key={food.id}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors cursor-pointer"
                  onClick={() => addFood(food)}
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{food.name}</h4>
                    <p className="text-sm text-gray-500">{food.category}</p>
                  </div>
                  <Plus className="h-5 w-5 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Selected Foods */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Aliments sélectionnés
            </h3>
            
            {selectedFoods.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Aucun aliment sélectionné</p>
                <p className="text-sm">Choisissez des aliments pour calculer leur impact</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {selectedFoods.map((food) => (
                    <div key={`${food.id}-${selectedFoods.filter(f => f.id === food.id).length}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{food.name}</h4>
                        <p className="text-sm text-gray-500">{food.category}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="number"
                          min="0.1"
                          step="0.1"
                          value={food.quantity}
                          onChange={(e) => updateQuantity(food.id, parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-200 rounded text-center"
                        />
                        <span className="text-sm text-gray-500">kg</span>
                        <button
                          onClick={() => removeFood(food.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={calculateImpact}
                  disabled={isCalculating}
                  className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Calcul en cours...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-5 w-5 mr-2" />
                      Calculer l'impact
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCalculator;