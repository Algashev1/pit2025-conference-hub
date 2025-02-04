import { ArrowRight, ArrowUp, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const Index = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const sections = [
    {
      title: "Компьютерная оптика и фотоника",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
    },
    {
      title: "Искусственный интеллект",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    },
    {
      title: "Математическое моделирование",
      image: "https://images.unsplash.com/photo-1635241161466-541f065683ba?w=800",
    },
    {
      title: "Биотехнические системы и технологии",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
    },
    {
      title: "Электроника и интернет вещей",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    },
    {
      title: "Наука о данных",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#E6EDF2]">
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 pb-5">
            <div className="md:flex items-center">
              <div className="md:w-2/5 md:pr-8 pb-4 md:pb-0">
                <h1 className="text-[#1E1933] text-7xl text-center md:text-left" style={{lineHeight: 1.3}}>
                  VOLGA CYBER WEEK
                </h1>
              </div>
              <div className="md:w-3/5 md:w-3/5">
                <img
                  src="1.png"
                  alt="Conference"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center pt-7">
              <div className="pb-4 text-center md:pb-0 md:text-left">
                Международная научно-техническая конференция
              </div>
              <div className="flex sm:justify-between">
              <button type="button" className="m-auto text-white bg-[#1E1933] focus:outline-none font-medium rounded-full  text-xl px-5 py-3.5 text-center md:me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                ОТПРАВИТЬ СТАТЬЮ
              </button >
              </div>
            </div>   
          </div>
        </div>
      </div>

      <div className="pt-10 pb-5 dates-line">
          <div className="md:flex justify-between max-w-4xl mx-auto  px-4 md:px-4">
            <div className="date-block">
              <div className="date-title">
                Место проведения
              </div>
              <div>
                г. Самара
              </div>
              <div>
                ул. Молодогвардейская, 151
              </div>
            </div>
            <div className="date-block">
              <div className="date-title">
                Конец приёма материалов
              </div>
              <div className="hidden md:flex">
                &nbsp;
              </div>
              <div>
                1 марта 2025 г.
              </div>
            </div>
            <div className="date-block">
              <div className="date-title">
                Даты проведения
              </div>
              <div className="hidden md:flex">
                &nbsp;
              </div>
              <div>
                24-25 марта 2025 г.
              </div>
            </div>
          </div>
      </div>

      {/* Conference Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-primary">
            СЕКЦИИ КОНФЕРЕНЦИИ
          </h2>
          <div className="flex items-center gap-2">
            <Link 
              to="#" 
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Скачать положение
            </Link>
            <FileText className="w-5 h-5 text-accent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-accent font-medium p-4">
                {section.title}
              </h3>
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${section.image})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          onClick={scrollToTop}
          aria-label="Вернуться наверх"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <NewsletterSubscription 
        open={showSubscriptionModal} 
        onOpenChange={setShowSubscriptionModal}
      />
    </div>
  );
};

export default Index;
