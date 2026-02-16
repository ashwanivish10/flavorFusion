import React from 'react';
import { CircularTestimonials } from './ui/circular-testimonials';

const founders = [
  {
    quote: "Our journey started in a small kitchen with a simple idea: make cooking joyful and accessible for everyone, no matter what's in their pantry. FlavorFusion is the culmination of that dream.",
    name: "Rudra Dubey",
    designation: "Co-Founder & Head Chef",
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1770&auto=format&fit=crop"
  },
  {
    quote: "We're leveraging cutting-edge AI to solve a timeless problem: the 'what's for dinner' dilemma. Our goal is to inspire creativity and reduce food waste.",
    name: "Prashant Verma",
    designation: "Co-Founder & CTO",
    src: "https://prospective-indigo-w8z0053t5s.edgeone.app/2b27ab93-22cd-4359-b0d3-1378f731d5f0.jpeg"
  },
  {
    quote: "Food is about community and connection. We built a platform that not only gives you recipes but also empowers you to feel confident and creative in your own kitchen.",
    name: "Shreya Dixit",
    designation: "Co-Founder & Community Lead",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
  },
  {
    quote: "We built a platform that not only gives you recipes but also empowers you to feel confident and creative in your own kitchen.",
    name: "Ashwani Vishwakarma",
    designation: "Co-Founder & Ceo",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
  },
];

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Meet Our Founders</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate minds behind FlavorFusion.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={founders}
            autoplay={true}
            colors={{
              name: "#111827", // text-dark
              designation: "#6b7280", // text-gray-500
              testimony: "#374151", // text-gray-700
              arrowBackground: "#f97316", // bg-primary
              arrowForeground: "#ffffff", // text-white
              arrowHoverBackground: "#ea580c", // bg-primary-hover
            }}
            fontSizes={{
              name: "1.25rem", // text-xl
              designation: "0.875rem", // text-sm
              quote: "1rem", // text-base
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
