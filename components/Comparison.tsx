import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  flavorFusion: boolean;
  manualSearch: boolean;
  competitorApp: boolean;
}

const Comparison: React.FC = () => {
  const comparisonData: ComparisonItem[] = [
    { feature: 'AI-Powered Recipe Generation', flavorFusion: true, manualSearch: false, competitorApp: true },
    { feature: 'Instant Meal Ideas (under 3 seconds)', flavorFusion: true, manualSearch: false, competitorApp: false },
    { feature: 'Ingredient-Based Search', flavorFusion: true, manualSearch: true, competitorApp: true },
    { feature: 'Dietary Filtering (Vegan, Keto, etc)', flavorFusion: true, manualSearch: false, competitorApp: true },
    { feature: 'Complete Nutrition Information', flavorFusion: true, manualSearch: false, competitorApp: false },
    { feature: 'Personal Recipe Library', flavorFusion: true, manualSearch: false, competitorApp: true },
    { feature: 'Food Waste Reduction', flavorFusion: true, manualSearch: false, competitorApp: false },
    { feature: 'Free Plan Available', flavorFusion: true, manualSearch: true, competitorApp: false },
    { feature: 'Step-by-Step Instructions', flavorFusion: true, manualSearch: true, competitorApp: true },
    { feature: 'Cooking Time Estimates', flavorFusion: true, manualSearch: true, competitorApp: true },
    { feature: 'Mobile App', flavorFusion: true, manualSearch: true, competitorApp: true },
    { feature: 'Data Privacy First', flavorFusion: true, manualSearch: true, competitorApp: false },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-light/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Why Choose FlavorFusion
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
          >
            Better than your current <span className="text-primary">approach</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See how FlavorFusion compares to manually searching for recipes or using other meal planning apps.
          </motion.p>
        </div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-max md:min-w-full"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-dark text-sm w-56">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-dark text-sm">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-black">FF</span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">FlavorFusion</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-dark text-sm">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-black text-xs">Manual</span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">Manual Search</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-dark text-sm">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-black text-xs">Other</span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">Competitor</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-dark">{item.feature}</td>
                    <td className="text-center py-4 px-6">
                      {item.flavorFusion ? (
                        <motion.div whileHover={{ scale: 1.2 }} className="inline-flex">
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20">
                            <Check className="w-4 h-4 text-primary font-bold" />
                          </div>
                        </motion.div>
                      ) : (
                        <X className="w-5 h-5 text-gray-300 inline" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {item.manualSearch ? (
                        <motion.div whileHover={{ scale: 1.2 }} className="inline-flex">
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200/50">
                            <Check className="w-4 h-4 text-gray-400 font-bold" />
                          </div>
                        </motion.div>
                      ) : (
                        <X className="w-5 h-5 text-gray-300 inline" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {item.competitorApp ? (
                        <motion.div whileHover={{ scale: 1.2 }} className="inline-flex">
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200/50">
                            <Check className="w-4 h-4 text-gray-400 font-bold" />
                          </div>
                        </motion.div>
                      ) : (
                        <X className="w-5 h-5 text-gray-300 inline" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-3xl font-black text-primary mb-2">100%</p>
            <p className="text-gray-600 font-medium">Free to try, no credit card</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/20 rounded-2xl p-8 text-center">
            <p className="text-3xl font-black text-secondary mb-2">5+ Features</p>
            <p className="text-gray-600 font-medium">Unique to FlavorFusion</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-2xl p-8 text-center">
            <p className="text-3xl font-black text-orange-600 mb-2">Privacy</p>
            <p className="text-gray-600 font-medium">Your data is encrypted & safe</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
