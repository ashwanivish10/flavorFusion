import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from 'lucide-react';

// Centralized data for the footer
const data = {
  company: {
    name: 'FlavorFusion',
    description: 'AI-powered recipes to inspire your next meal.',
  },
  socialLinks: [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ],
  linkSections: [
    {
      title: 'Product',
      links: [
        { text: 'How It Works', href: '#how-it-works' },
        { text: 'Pricing', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '#' },
        { text: 'Help Center', href: '#' },
      ],
    },
  ],
  contact: {
    email: 'support@flavorfusion.com',
    phone: '9129333705',
  },
};

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
];

const Logo = () => (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2 cursor-pointer"
    >
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V9.74722M9.74722 12H6.25278M12 14.2528V17.7472M14.2528 12H17.7472M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z" />
        </svg>
        <span className="text-xl font-black text-dark tracking-tight">{data.company.name}</span>
    </motion.div>
);

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary to-orange-600 text-white rounded-2xl p-8 md:p-10"
    >
      <h3 className="text-2xl font-bold mb-2">Get Recipe Ideas Weekly</h3>
      <p className="text-orange-100 mb-6">Join 25,000+ cooks getting weekly recipe inspiration and cooking tips.</p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
          disabled={status === 'loading'}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending...' : status === 'success' ? '✓' : 'Subscribe'}
        </motion.button>
      </form>
      <p className="text-xs text-orange-100 mt-3">No spam, ever. Unsubscribe with one click.</p>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-light/50 border-t border-gray-100">
      <div className="container mx-auto px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24">
        {/* Newsletter Section */}
        <div className="mb-16 max-w-2xl mx-auto">
          <NewsletterSignup />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center sm:justify-start">
              <Logo />
            </div>
            <p className="text-gray-600 mt-4 max-w-xs text-center leading-relaxed sm:text-left text-sm">
              {data.company.description}
            </p>
            <ul className="mt-6 flex justify-center gap-4 sm:justify-start md:gap-5">
              {data.socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-gray-400 hover:text-primary transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3">
            {data.linkSections.map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center sm:text-left"
              >
                <p className="font-bold text-dark text-sm uppercase tracking-wide">{section.title}</p>
                <ul className="mt-4 space-y-2.5 text-xs">
                  {section.links.map(({ text, href, hasIndicator }) => (
                    <li key={text}>
                      <motion.a
                        href={href}
                        whileHover={{ x: 2 }}
                        className="text-gray-600 hover:text-primary transition inline-flex items-center gap-1 group"
                      >
                        {text}
                        {hasIndicator && (
                          <span className="relative flex size-1.5">
                            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                            <span className="bg-primary relative inline-flex size-1.5 rounded-full" />
                          </span>
                        )}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
            {contactInfo.map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="group"
              >
                <div className="flex items-center gap-3 sm:justify-start">
                  <Icon className="text-primary size-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-600 text-sm group-hover:text-primary transition-colors">
                    {text}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {data.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
