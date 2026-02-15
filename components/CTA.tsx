import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-white rounded-lg shadow-xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to get cooking?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-orange-100">
              Unlock a world of culinary possibilities. Your next favorite meal is just a click away.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-white text-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Generate Your First Recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;