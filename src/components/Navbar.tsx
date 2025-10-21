
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";
import { Value } from "@radix-ui/react-select";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

   const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  const handleSubmitClick = () => {
    window.open('https://forms.yandex.ru/u/67a5c9cbd0468800bff0e547/', '_blank');
    setIsOpen(false);
  };

  const navItems = [
    { name: "Секции конференции", id: "sections" },
    { name: "Даты", id: "dates" },
    { name: "Правила оформления", id: "rules" },
    { name: "Программа", id: "program" },
    { name: "Контакты", id: "contacts" },
  ];
  const archiveItems = [
    { name: "VCW-2025", link: "/archive" }
  ];

  const submitButton = { name: "Подать доклад", id: "submit", isBold: true, isExternal: true };

  return (
    <nav className="fixed w-full bg-[#1E1933] z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8 lg:space-x-10">
            <button
              onClick={() => scrollToSection('top')}
              className="flex items-center text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
            >
              <Brain className="w-6 h-6 mr-2 text-white" />
              VCW-2025
            </button>

            {/* Desktop menu */}
            <div className="hidden xl:flex items-center space-x-5 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="relative  hidden xl:inline-block">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={` ${isMenuOpen ? 'text-gray-300' : 'text-white'} transition-colors duration-200 whitespace-nowrap hidden xl:flex items-center flex-col`}>
                Архив
              </button>
              {isMenuOpen && <ul
                className="absolute w-36 mt-5 bg-[#1E1933] shadow-md left-1/2 -translate-x-1/2 z-0 transition-transform duration-300 ease-in-out transform origin-top scale-100"
              >
                {archiveItems.map((item, index) =>
                  <li
                    key={index}
                    className="cursor-pointer border-t border-gray-400 py-2"
                  >
                    <Link to={item.link}
                    className="block w-full text-white text-center hover:text-gray-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>}
            </div>
          </div>

          {/* Submit button - always visible on desktop
          <div className="hidden xl:flex items-center">
            <button
              onClick={handleSubmitClick}
              className="text-white hover:text-gray-300 transition-colors duration-200 font-bold whitespace-nowrap"
              disabled
            >
              {submitButton.name}
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
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
        <div className="xl:hidden bg-[#1E1933] border-b border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="relative xl:hidden ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={` ${isMenuOpen ? 'text-gray-300' : 'text-white'} transition-colors duration-200 w-full block text-left px-3 py-2`}>
                Архив
              </button>
              {isMenuOpen && <ul
                className="absolute w-full mt-1 bg-[#1E1933] shadow-md left-1/2 -translate-x-1/2 z-0 transition-transform duration-300 ease-in-out transform origin-top scale-100"
              >
                {archiveItems.map((item, index) =>
                  <li
                    key={index}
                    className="cursor-pointer "
                  >
                    <Link to={item.link}
                    className="block w-full text-white text-left pl-6 py-2 hover:text-gray-300 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>}
            </div>
            {/* <button
              onClick={handleSubmitClick}
              className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 font-bold"
            >
              {submitButton.name}
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
