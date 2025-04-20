import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#teachers' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg py-4 shadow-md' : 'bg-transparent py-6'}
    `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center mr-2">
              <span className="text-white font-bold">RL</span>
            </div>
            <span className="text-white font-bold text-xl">RoboLearn</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
              Enroll Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`
        md:hidden absolute w-full bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden
        ${isMenuOpen ? 'max-h-screen border-b border-gray-800' : 'max-h-0'}
      `}>
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {navItems.map(item => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pb-4">
            <button 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;