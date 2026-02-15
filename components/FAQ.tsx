import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ item, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/20 transition-colors duration-300"
  >
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between bg-white hover:bg-gray-50/50 transition-colors duration-200"
    >
      <h3 className="text-base md:text-lg font-bold text-dark text-left">{item.question}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="ml-4 flex-shrink-0"
      >
        <ChevronDown className="w-5 h-5 text-primary" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 bg-gray-50/50"
        >
          <p className="px-6 py-4 md:px-8 md:py-5 text-gray-700 leading-relaxed text-sm md:text-base">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does FlavorFusion generate recipes?',
      answer: 'FlavorFusion uses advanced AI (Google\'s Gemini 3 Flash) to analyze your ingredients, understand flavor profiles, and generate unique recipe combinations in seconds. Our AI has been trained on thousands of recipes and culinary techniques to ensure delicious, reliable results.',
    },
    {
      question: 'Is my food data safe and private?',
      answer: 'Your privacy is our top priority. All ingredient data is encrypted and processed securely. We never sell your data to third parties. Our system complies with GDPR, CCPA, and other data protection regulations. You can delete your data anytime.',
    },
    {
      question: 'Can I filter recipes by dietary restrictions?',
      answer: 'Absolutely! You can filter recipes by dietary preferences including Vegan, Vegetarian, Keto, Paleo, Gluten-Free, Dairy-Free, Nut-Free, and Low-Carb. Each generated recipe includes complete nutrition information and allergen warnings.',
    },
    {
      question: 'How much does FlavorFusion cost?',
      answer: 'We offer a free plan with 5 generated recipes per month and 10 saved recipes. Premium starts at $9.99/month for unlimited generations and advanced features. All premium plans include a 7-day free trial with no credit card required.',
    },
    {
      question: 'What if I don\'t like a generated recipe?',
      answer: 'No problem! Simply generate another recipe. You have unlimited generations on premium. You can also customize recipes by adjusting serving sizes, adding/removing ingredients, or asking our AI to regenerate with specific preferences.',
    },
    {
      question: 'Can I save recipes for later?',
      answer: 'Yes! All recipes are automatically saved to your personal cookbook. Free users can save up to 10 recipes, while premium members have unlimited storage. You can organize recipes into custom collections and sync across all your devices.',
    },
    {
      question: 'Does FlavorFusion work offline?',
      answer: 'Recipe generation requires an internet connection. However, once downloaded, you can view saved recipes offline. We\'re working on a full offline mode for premium users in future updates.',
    },
    {
      question: 'How accurate is the nutrition information?',
      answer: 'Our nutrition data comes from USDA Food Data Central and is verified by professional nutritionists. Each recipe displays calories, macros (protein, carbs, fats), and key micronutrients. For precise tracking, we recommend cross-referencing with a nutrition app for personalized needs.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-light/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Common Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4 font-medium">Still have questions?</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/20 hover:bg-orange-600 transition-all duration-300"
          >
            Contact Our Support Team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
