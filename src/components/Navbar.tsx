import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const handleSubmitClick = () => {
    window.open('https://forms.yandex.ru/u/67a5c9cbd0468800bff0e547/', '_blank');
    setIsOpen(false);
  };

  const navItems = [
    { name: "Секции конференции", id: "sections" },
    { name: "Важные даты", id: "dates" },
    { name: "Контакты", id: "contacts" },
    { name: "Отправить статью", id: "submit", isBold: true, isExternal: true },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full bg-[#1E1933] z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center justify-center space-x-10">
            <button 
              onClick={() => scrollToSection('top')} 
              className="flex items-center text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
            >
              <Brain className="w-6 h-6 mr-2 text-white" />
              VCW-2025
            </button>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.isExternal ? handleSubmitClick : () => scrollToSection(item.id)}
                  className={`text-white hover:text-gray-300 transition-colors duration-200 ${item.isBold ? 'font-bold' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 flex items-center h-16">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1933] border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.isExternal ? handleSubmitClick : () => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 ${item.isBold ? 'font-bold' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;