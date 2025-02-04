import { ArrowRight, ArrowUp, FileText, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const Index = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const sections = [
    {
      title: "Компьютерная оптика и фотоника",
      image: "11.png",
    },
    {
      title: "Искусственный интеллект",
      image: "22.png",
    },
    {
      title: "Математическое моделирование",
      image: "33.png",
    },
    {
      title: "Биотехнические системы и технологии",
      image: "44.png",
    },
    {
      title: "Электроника и интернет вещей",
      image: "55.png",
    },
    {
      title: "Наука о данных",
      image: "66.png",
    },
  ];

  const importantDates = [
    {
      date: "1 января, 2025",
      description: "Начало приёма материалов доклада"
    },
    {
      date: "1 марта, 2025",
      description: "Конец приёма материалов доклада"
    },
    {
      date: "17 марта, 2025",
      description: "Объявление списка рекомендованных к публикации тезисов статей"
    },
    {
      date: "24-26 марта, 2025",
      description: "Проведение конференции"
    }
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

  const toggleCard = (title: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
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
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center p-4">
                <h3 className="text-accent font-medium">
                  {section.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-8 h-8 flex items-center justify-center"
                  onClick={() => toggleCard(section.title)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-48">
                {expandedCards[section.title] ? (
                  <div className="p-4 h-full flex items-center justify-center text-accent">
                    {section.title}
                  </div>
                ) : (
                  <div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${section.image}")` }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Dates */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <h2 className="text-2xl font-bold text-primary mb-12">
          ВАЖНЫЕ ДАТЫ
        </h2>
        <div className="relative">
          {/* Timeline line - horizontal on desktop, vertical on mobile */}
          <div className="absolute md:left-0 md:right-0 md:h-0.5 md:top-4 md:w-full h-full w-0.5 left-4 top-0 bg-gradient-to-r md:from-[#17C54E] md:via-[#00A7E1] md:to-[#004876] bg-gradient-to-b from-[#17C54E] via-[#00A7E1] to-[#004876]" />
          
          {/* Timeline points */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {importantDates.map((item, index) => (
              <div key={index} className="relative md:pt-8 pl-12 md:pl-0">
                {/* Circle point */}
                <div className="absolute md:top-3 md:left-1/2 top-1.5 left-4 transform md:-translate-x-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white bg-[#004876]" />
                
                {/* Content */}
                <div className="md:text-center text-left">
                  <p className="text-[#00A7E1] text-lg font-medium mb-2">
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
