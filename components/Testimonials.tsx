import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, company, avatar, rating }) => (
  <motion.figure 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
    </div>
    <blockquote className="flex-grow">
      <p className="text-gray-800 text-base leading-relaxed font-medium">"{quote}"</p>
    </blockquote>
    <figcaption className="flex items-center mt-6 pt-6 border-t border-gray-100">
      <img className="h-12 w-12 rounded-full object-cover" src={avatar} alt={name} />
      <div className="ml-4">
        <div className="text-dark font-semibold text-sm">{name}</div>
        <div className="text-gray-500 text-xs">{company && <span>{company}</span>} {title && <span>{title}</span>}</div>
      </div>
    </figcaption>
  </motion.figure>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I've cut my meal prep time in half. Instead of scrolling Pinterest for 30 minutes, I get delicious recipe ideas in seconds. It's genuinely changed how I cook.",
      name: "Priya Sharma",
      company: "Product Manager",
      title: "Mumbai, Maharashtra",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5
    },
    {
      quote: "With my dietary restrictions, finding exciting recipes felt impossible. This app understands keto perfectly and keeps suggesting meals I actually want to cook.",
      name: "Arjun Gupta",
      company: "Tech Founder",
      title: "Bangalore, Karnataka",
      avatar: "https://i.pravatar.cc/100?img=12",
      rating: 5
    },
    {
      quote: "The nutrition data is accurate and detailed. I finally trust an app's macro counts. Saves me the hassle of calculating everything manually.",
      name: "Neha Patel",
      company: "Fitness Coach",
      title: "Delhi, NCR",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-light/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Trusted by 25,000+ users
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark"
          >
            Join thousands who cook <span className="text-primary">smarter every day</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See why people love FlavorFusion and how it's transformed their kitchens.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;