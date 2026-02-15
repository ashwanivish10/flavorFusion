import React from 'react';
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
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
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Dribbble, label: 'Dribbble', href: '#' },
  ],
  linkSections: [
    {
      title: 'Product',
      links: [
        { text: 'How It Works', href: '#features' },
        { text: 'Recipe Ideas', href: '#recipe-ideas' },
        { text: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Founders', href: '#founders' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '#' },
        { text: 'Contact Us', href: '#' },
        { text: 'Live Chat', href: '#', hasIndicator: true },
      ],
    },
  ],
  contact: {
    email: 'support@flavorfusion.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA, USA',
  },
};

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: MapPin, text: data.contact.address, href: '#' },
];

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V9.74722M9.74722 12H6.25278M12 14.2528V17.7472M14.2528 12H17.7472M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z" />
        </svg>
        <span className="text-2xl font-bold text-dark">{data.company.name}</span>
    </div>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <Logo />
            </div>
            <p className="text-gray-500 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {data.socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-primary transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:col-span-2">
            {data.linkSections.map(section => (
              <div className="text-center sm:text-left" key={section.title}>
                <p className="text-lg font-medium text-dark">{section.title}</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {section.links.map(({ text, href, hasIndicator }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className="text-gray-600 hover:text-gray-900 transition flex items-center justify-center sm:justify-start gap-1.5 group"
                      >
                        {text}
                        {hasIndicator && (
                          <span className="relative flex size-2">
                            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                            <span className="bg-primary relative inline-flex size-2 rounded-full" />
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-dark">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, href }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href={href}
                    >
                      <Icon className="text-primary size-5 shrink-0" />
                      <span className="text-gray-600 flex-1 transition hover:text-gray-900">
                        {text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="text-sm text-gray-500 mt-4 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
