import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FoodCalculator from './components/FoodCalculator';
import ImpactVisualization from './components/ImpactVisualization';
import RecommendationsSection from './components/RecommendationsSection';
import Footer from './components/Footer';

function App() {
  const [selectedFoods, setSelectedFoods] = useState<any[]>([]);
  const [impactData, setImpactData] = useState(null);

  const handleFoodSelection = (foods: any[]) => {
    setSelectedFoods(foods);
    // Simulate AI calculation
    const totalImpact = foods.reduce((acc, food) => ({
      co2: acc.co2 + food.impact.co2,
      water: acc.water + food.impact.water,
      land: acc.land + food.impact.land,
    }), { co2: 0, water: 0, land: 0 });
    
    setImpactData(totalImpact);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSection />
      <FoodCalculator onFoodSelection={handleFoodSelection} />
      {impactData && (
        <ImpactVisualization 
          impactData={impactData} 
          selectedFoods={selectedFoods} 
        />
      )}
      <RecommendationsSection />
      <Footer />
    </div>
  );
}

export default App;