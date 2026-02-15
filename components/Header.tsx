import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Logo = () => (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2 cursor-pointer"
    >
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V9.74722M9.74722 12H6.25278M12 14.2528V17.7472M14.2528 12H17.7472M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z" />
        </svg>
        <span className="text-xl font-black text-dark tracking-tight">FlavorFusion</span>
    </motion.div>
);

const NavLinks: React.FC<{ className?: string }> = ({ className }) => (
    <nav className={className}>
        <motion.a 
          href="#features" 
          whileHover={{ y: -2 }}
          className="text-gray-600 hover:text-primary font-medium transition-colors"
        >
          How It Works
        </motion.a>
        <motion.a 
          href="#testimonials" 
          whileHover={{ y: -2 }}
          className="text-gray-600 hover:text-primary font-medium transition-colors"
        >
          Testimonials
        </motion.a>
        <motion.a 
          href="#" 
          whileHover={{ y: -2 }}
          className="text-gray-600 hover:text-primary font-medium transition-colors"
        >
          Blog
        </motion.a>
    </nav>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <NavLinks className="hidden md:flex items-center space-x-10" />
                    <div className="hidden md:flex items-center space-x-3">
                        <motion.a 
                          href="#" 
                          whileHover={{ y: -2 }}
                          className="text-gray-600 hover:text-primary font-semibold transition-colors py-2 px-4"
                        >
                          Log In
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-all duration-300 font-bold shadow-md shadow-primary/20"
                        >
                          Sign Up Free
                        </motion.a>
                    </div>
                    <div className="md:hidden">
                        <motion.button 
                          onClick={() => setIsMenuOpen(!isMenuOpen)} 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Toggle menu"
                          className="p-2"
                        >
                            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
            <motion.div
              initial={false}
              animate={{ height: isMenuOpen ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden border-t border-gray-100"
            >
                <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6 flex flex-col items-center">
                    <motion.a 
                      href="#features" 
                      whileHover={{ x: 4 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 w-full text-center transition-colors"
                    >
                      How It Works
                    </motion.a>
                    <motion.a 
                      href="#testimonials" 
                      whileHover={{ x: 4 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 w-full text-center transition-colors"
                    >
                      Testimonials
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 4 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 w-full text-center transition-colors"
                    >
                      Blog
                    </motion.a>
                    <div className="pt-4 pb-2 w-full flex flex-col items-center space-y-2">
                       <motion.a 
                         href="#" 
                         onClick={() => setIsMenuOpen(false)}
                         whileHover={{ y: -2 }}
                         className="text-gray-600 hover:text-primary font-semibold transition-colors w-full text-center py-2"
                       >
                         Log In
                       </motion.a>
                       <motion.a 
                         href="#" 
                         onClick={() => setIsMenuOpen(false)}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.98 }}
                         className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-all duration-300 font-bold w-full text-center shadow-md shadow-primary/20"
                       >
                         Sign Up Free
                       </motion.a>
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;