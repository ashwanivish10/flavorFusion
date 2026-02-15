import React, { useState } from 'react';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V9.74722M9.74722 12H6.25278M12 14.2528V17.7472M14.2528 12H17.7472M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z" />
        </svg>
        <span className="text-2xl font-bold text-dark">FlavorFusion</span>
    </div>
);

const NavLinks: React.FC<{ className?: string }> = ({ className }) => (
    <nav className={className}>
        <a href="#features" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
        <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
        <a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a>
    </nav>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-light/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <NavLinks className="hidden md:flex items-center space-x-8" />
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">Log In</a>
                        <a href="#" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors font-medium">Sign Up</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-light border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">How It Works</a>
                        <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Testimonials</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</a>
                        <div className="pt-4 pb-2 w-full flex flex-col items-center space-y-2">
                           <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors w-full text-center py-2">Log In</a>
                           <a href="#" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors font-medium w-full text-center">Sign Up</a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;