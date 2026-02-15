import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Leaf, Flame } from 'lucide-react';

interface RecipeCardProps {
  image: string;
  title: string;
  description: string;
  time: string;
  servings: string;
  tags: string[];
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title, description, time, servings, tags, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-4 right-4 text-white"
      >
        <p className="text-sm font-semibold text-orange-300">AI Generated</p>
      </motion.div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {time}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {servings}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
          >
            {tag === 'Vegan' && <Leaf className="w-3 h-3" />}
            {tag === 'Low-Carb' && <Flame className="w-3 h-3" />}
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const UseCases: React.FC = () => {
  const recipes = [
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
      title: 'Spicy Thai Curry',
      description: 'Found coconut milk, bell peppers, and basil in your pantry? FlavorFusion transformed these into an authentic-tasting Thai red curry with perfect spice balance.',
      time: '25 mins',
      servings: '4 servings',
      tags: ['Vegan', 'Spicy', 'Thai'],
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
      title: 'Protein-Packed Buddha Bowl',
      description: 'Got chickpeas, quinoa, and avocado? Our AI created a nutrient-dense bowl with complete protein and over 12g of fiber per serving.',
      time: '15 mins',
      servings: '2 servings',
      tags: ['Vegan', 'Low-Carb', 'Healthy'],
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
      title: 'Creamy Mushroom Risotto',
      description: 'Arborio rice, mushrooms, and white wine? FlavorFusion crafted a restaurant-quality risotto with the perfect creamy consistency and umami depth.',
      time: '35 mins',
      servings: '3 servings',
      tags: ['Vegetarian', 'Comfort Food', 'Italian'],
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
      title: 'Keto Salmon with Vegetables',
      description: 'Salmon fillet, zucchini, and garlic? Our AI generated a low-carb keto meal with 45g protein and only 3g net carbs.',
      time: '20 mins',
      servings: '2 servings',
      tags: ['Low-Carb', 'Keto', 'High-Protein'],
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
      title: 'Mediterranean Quinoa Salad',
      description: 'Quinoa, cucumbers, tomatoes, and feta? FlavorFusion created a refreshing summer salad with a lemon vinaigrette and 8g of plant-based protein.',
      time: '10 mins',
      servings: '4 servings',
      tags: ['Vegan', 'Salad', 'Fresh'],
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
      title: 'Chocolate Avocado Mousse',
      description: 'Avocado, cocoa powder, and maple syrup? FlavorFusion transformed these into a decadent, creamy dessert with healthy fats and zero added sugar.',
      time: '5 mins',
      servings: '2 servings',
      tags: ['Vegan', 'Dessert', 'No-Bake'],
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Real AI-Generated Recipes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
          >
            Recipes people are <span className="text-primary">actually cooking</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See examples of amazing meals generated by FlavorFusion users just like you. From weeknight dinners to special occasions.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 font-medium">Ready to create your own?</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-orange-600 transition-all duration-300 text-lg"
          >
            Start Generating Recipes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
