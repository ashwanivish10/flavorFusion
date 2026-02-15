
import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

const recipeData = [
  {
    name: 'Classic Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1588013273468-31508b946d4d?q=80&w=1887&auto=format&fit=crop',
    ingredients: [
      '200g Spaghetti',
      '100g Pancetta or Guanciale',
      '2 large Eggs',
      '50g Pecorino Romano cheese',
      'Black Pepper',
      'Salt',
    ],
  },
  {
    name: 'Quick Chicken Stir-Fry',
    image: 'https://images.unsplash.com/photo-1607314500959-52d3a0434a8a?q=80&w=1887&auto=format&fit=crop',
    ingredients: [
      '1 lb Chicken Breast, sliced',
      '2 cups Mixed Vegetables (broccoli, carrots, bell peppers)',
      '3 tbsp Soy Sauce',
      '1 tbsp Ginger, minced',
      '2 cloves Garlic, minced',
      '1 tbsp Sesame Oil',
      'Cooked Rice for serving',
    ],
  },
  {
    name: 'Gourmet Avocado Toast',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop',
    ingredients: [
      '2 slices Sourdough Bread',
      '1 large Avocado',
      '1 tsp Lemon Juice',
      'Red Pepper Flakes',
      'Sea Salt',
      'Optional: Feta cheese, cherry tomatoes',
    ],
  },
];

interface RecipeCardProps {
  recipe: typeof recipeData[0];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const ingredientText = recipe.ingredients.join('\n');
    navigator.clipboard.writeText(ingredientText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark mb-4">{recipe.name}</h3>
        <ul className="space-y-2 text-gray-600 flex-grow mb-6 list-disc list-inside">
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <button
          onClick={handleCopy}
          className={`w-full mt-auto flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
            copied
              ? 'bg-secondary text-white'
              : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
          }`}
          aria-label={`Copy ingredients for ${recipe.name}`}
        >
          {copied ? (
            <>
              <FaCheck className="mr-2" /> Copied!
            </>
          ) : (
            <>
              <FaCopy className="mr-2" /> Copy Ingredients
            </>
          )}
        </button>
      </div>
    </div>
  );
};


const RecipeIdeas: React.FC = () => {
  return (
    <section
      id="recipe-ideas"
      className="bg-light pb-20 md:pb-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Recipe Inspiration</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are a few ideas to get your creative juices flowing.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeData.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeIdeas;
