
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Founders from './components/Founders';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GenerateRecipe from './components/GenerateRecipe';
import RecipeInspirationPage from './components/RecipeInspirationPage';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  if (page === 'generate') {
    return <GenerateRecipe onBack={() => setPage('home')} />;
  }
  
  if (page === 'ideas') {
    return <RecipeInspirationPage onBack={() => setPage('home')} />;
  }

  return (
    <div className="bg-light font-sans text-dark antialiased">
      <Header />
      <main>
        <Hero 
          onBrowseIdeas={() => setPage('ideas')}
          onGenerateRecipe={() => setPage('generate')}
        />
        <Features />
        <Testimonials />
        <Founders />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
