import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-light/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-orange-600 text-white rounded-2xl shadow-2xl shadow-primary/20 p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              Start creating restaurant-quality meals today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-orange-50 leading-relaxed"
            >
              No credit card required. Get your first 5 recipes free. Join thousands of home cooks discovering new favorite meals.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary font-bold px-12 py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/20 text-white font-bold px-12 py-4 rounded-xl border-2 border-white/40 hover:bg-white/30 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                See How It Works
              </motion.button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-sm text-orange-100"
            >
              ✓ Free account, no payment required  ✓ 5 free recipes  ✓ Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;