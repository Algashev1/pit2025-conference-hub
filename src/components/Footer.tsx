import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-white">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Контактная информация</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:pit2025@ssau.ru" className="hover:text-accent transition-colors">
              studscience_iic@ssau.ru
              </a>
            </div>
            {/* <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+78462674635" className="hover:text-accent transition-colors">
                +7 (846) 267-46-35
              </a>
            </div> */}
          </div>
          <div className="text-center md:text-right text-sm text-gray-300">
            <p>© 2025 VCW-2025</p>
            <p>Самарский университет</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;