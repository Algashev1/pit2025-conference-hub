import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <img src="/logo.svg" alt="VCW-2025" className="h-8 w-8" />
            <span className="text-xl font-semibold">VCW-2025</span>
          </div>
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:vcw2025@ssau.ru" className="hover:text-accent transition-colors">
                vcw2025@ssau.ru
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+78462674635" className="hover:text-accent transition-colors">
                +7 (846) 267-46-35
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            <p>© 2024 Volga Cyber Week</p>
            <p>Самарский университет</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;