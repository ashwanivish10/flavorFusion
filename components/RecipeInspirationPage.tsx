
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RecipeIdeas from './RecipeIdeas';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const RecipeInspirationPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <motion.div
      className="bg-light font-sans text-dark antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="relative pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-600 hover:text-dark transition-colors mb-8 font-medium">
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
        <RecipeIdeas />
      </main>
      <Footer />
    </motion.div>
  );
};

export default RecipeInspirationPage;
