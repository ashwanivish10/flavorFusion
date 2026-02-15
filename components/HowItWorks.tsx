import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, BookOpen } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative flex flex-col items-center text-center"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary shadow-lg shadow-primary/20"
    >
      {icon}
    </motion.div>
    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold text-sm mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
      {description}
    </p>

    {index < 2 && (
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        className="hidden lg:block absolute -right-12 top-10 w-24 h-1 bg-gradient-to-r from-primary/60 to-transparent origin-left"
      />
    )}
  </motion.div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-10 h-10" />,
      title: 'Share Your Ingredients',
      description: 'Tell FlavorFusion what\'s in your fridge, pantry, or what you\'re craving. Type it, upload a photo, or browse your saved ingredients.',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'AI Creates Your Recipe',
      description: 'Our advanced AI analyzes flavor profiles, cooking techniques, and nutrition to generate a unique, delicious recipe in seconds.',
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Cook & Save',
      description: 'Follow step-by-step instructions with prep times, nutrition info, and dietary filters. Save favorites to your personal cookbook.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Simple 3-Step Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
          >
            From Ingredients to <span className="text-primary">Amazing Meals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Three simple steps to unlock culinary creativity and never waste ingredients again.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">2M+</p>
              <p className="text-gray-600 mt-2 font-medium">Recipes Generated</p>
            </div>
            <div className="md:border-l md:border-r border-gray-200">
              <p className="text-3xl md:text-4xl font-black text-primary">97%</p>
              <p className="text-gray-600 mt-2 font-medium">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">&lt;3s</p>
              <p className="text-gray-600 mt-2 font-medium">Average Generation Time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
