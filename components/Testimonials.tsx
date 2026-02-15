import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatar }) => (
  <figure className="bg-light p-8 rounded-lg shadow-sm flex flex-col h-full">
    <blockquote className="flex-grow">
      <p className="text-gray-800 text-lg leading-relaxed">"{quote}"</p>
    </blockquote>
    <figcaption className="flex items-center mt-6">
      <img className="h-12 w-12 rounded-full object-cover" src={avatar} alt={name} />
      <div className="ml-4">
        <div className="text-dark font-semibold">{name}</div>
        <div className="text-gray-500 text-sm">{title}</div>
      </div>
    </figcaption>
  </figure>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "FlavorFusion is a game-changer for weeknight dinners! I used to stare blankly into my fridge, but now I get creative ideas in seconds.",
      name: "Jessica M.",
      title: "Busy Parent",
      avatar: "https://picsum.photos/id/1005/100/100"
    },
    {
      quote: "As someone with dietary restrictions, finding exciting recipes is tough. This app makes it so easy to find delicious gluten-free meals.",
      name: "David L.",
      title: "Food Blogger",
      avatar: "https://picsum.photos/id/1011/100/100"
    },
    {
      quote: "I've reduced my food waste significantly. I can finally use up all the random vegetables in my crisper drawer. It's brilliant!",
      name: "Anna K.",
      title: "Home Chef",
      avatar: "https://picsum.photos/id/1027/100/100"
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">What our home cooks are saying</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands are cooking with more confidence and less stress.
          </p>
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