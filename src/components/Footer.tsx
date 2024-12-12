import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-100">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Контактная информация</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:pit2025@ssau.ru" className="hover:text-gray-300 transition-colors">
                pit2025@ssau.ru
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+78462674635" className="hover:text-gray-300 transition-colors">
                +7 (846) 267-46-35
              </a>
            </div>
          </div>
          <div className="text-center md:text-right text-sm text-gray-300">
            <p>© 2024 ПИТ-2025</p>
            <p>Самарский университет</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;