
import React from 'react';
import { motion } from 'framer-motion';
// Import Sparkles icon from lucide-react
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onBrowseIdeas: () => void;
  onGenerateRecipe: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowseIdeas, onGenerateRecipe }) => {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Powered by Gemini 3 Flash
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-dark leading-[1.05] tracking-tight">
              Turn ingredients into <span className="text-primary italic">art.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              The world's fastest AI chef. Generate creative, healthy, and delicious recipes from whatever is in your fridge.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onGenerateRecipe}
                className="bg-primary text-white font-black px-12 py-5 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-primary-hover transition-all duration-300 text-xl"
              >
                Cook with AI
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBrowseIdeas}
                className="bg-white text-gray-700 font-bold px-12 py-5 rounded-2xl shadow-xl hover:bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 text-xl"
              >
                Inspiration
              </motion.button>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-4 border-white object-cover shadow-sm" 
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    alt="Happy Chef" 
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                Trusted by <span className="text-dark">25,000+</span> kitchens
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl opacity-50" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] ring-1 ring-black/5 bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1771&auto=format&fit=crop" 
                alt="AI Generated Cuisine" 
                className="rounded-[2.2rem] w-full aspect-[5/4] object-cover"
              />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4 max-w-[280px]"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Sparkles size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-primary font-black uppercase tracking-tighter">AI Analysis Complete</p>
                  <p className="text-base font-black text-dark">Mediterranean Quinoa Bowl</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
