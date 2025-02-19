import { ArrowRight, ArrowUp, FileText, Plus, Minus, Phone, Mail, MapPin } from "lucide-react";
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
      items: [
        "дифракционная оптика",
        "гиперспектральные системы",
        "фотоника и нанофотоника",
        "оптические сенсоры",
        "оптоинформатика",
        "спектроскопия",
        "фотонные материалы",
        "полупроводниковые технологии",
        "наноматериалы и нанотехнологии",
        "интегральная электроника и наноэлектроника"
      ]
    },
    {
      title: "Искусственный интеллект",
      image: "22.png",
      items: [
        "распознавание образов и машинное зрение",
        "машинное обучение",
        "нейронные сети и глубокое обучение",
        "интеллектуальный анализ изображений",
        "интеллектуальный анализ текстов",
        "мультимодальные интеллектуальные системы",
        "прикладные технологии искусственного интеллекта",
        "программные технологии для решения задач искусственного интеллекта",
      ]
    },
    {
      title: "Математическое моделирование",
      image: "33.png",
      items: [
        "математическое моделирование",
        "математические модели в прикладных задачах",
        "дифференциальные уравнения",
        "численные методы",
        "теория управления",
        "математическая физика",
        "математические алгоритмы",
        "линейная алгебра и геометрия",
        "математический анализ",
        "дискретная математика"
      ]
    },
    {
      title: "Биотехнические системы и технологии",
      image: "44.png",
      items: [
        "анализ биомедицинских данных, сигналов, и изображений",
        "биомедицинская визуализация",
        "медицинские информационные системы ",
        "терапевтические и диагностические системы системы поддержки принятия решений",
        "биомедицинские датчики ",
        "биомедицинская электроника",
        "моделирование биофизических процессов",
        "оптические технологии в медицине",
        "биофотоника",
      ]
    },
    {
      title: "Электроника и интернет вещей",
      image: "55.png",
      items: [
        "радиоэлектронные средства",
        "микроэлектроника",
        "антенны и СВЧ устройства ",
        "защита информации в телекоммуникации",
        "научное приборостроение ",
        "измерительные преобразователи и датчики",
        "волоконно-оптические системы ",
        "интернет вещей",
        "техническая кибернетика и робототехника",
        "системы управления и автоматизации"
      ]
    },
    {
      title: "Наука о данных",
      image: "66.png",
      items: [
        "компьютерные науки",
        "инженерия данных",
        "высокопроизводительные, параллельные, распределённые и облачные вычисления",
        "технологии обработки больших данных",
        "базы данных",
        "прикладные задачи анализа данных",
        "визуализация данных",
        "анализ временных рядов",
        "анализ текстовой информации",
        "цифровая обработка сигналов и изображений"
      ]
    },
  ];

  const importantDates = [
    {
      date: "10 февраля, 2025",
      description: "Начало приёма материалов доклада"
    },
    {
      date: "13 марта, 2025",
      description: "Конец приёма материалов доклада"
    },
    {
      date: "17 марта, 2025",
      description: "Объявление списка принятых докладов"
    },
    {
      date: "24-26 марта, 2025",
      description: "Проведение конференции"
    },
    {
      date: "14 апреля, 2025",
      description: "Объявление списка принятых к публикации тезисов докладов"
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

  const toggleCard = (title: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleSubmitClick = () => {
    window.open('https://forms.yandex.ru/u/67b47490d0468883369c4eee/', '_blank');
  };

  const handleDownloadRules = () => {
    const link = document.createElement('a');
    link.href = '/conference-rules.pdf';
    link.download = 'conference-rules.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/article-template.doc';
    link.download = 'article-template.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-full bg-[#E6EDF2]">
      {/* Hero Section */}
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 pb-5">
            <div className="md:flex items-center">
              <div className="md:w-2/5 md:pr-8 pb-4 md:pb-0">
                <h1 className="text-[#1E1933] text-7xl text-center md:text-left" style={{lineHeight: 1.3}}>
                  VOLGA CYBER WEEK
                </h1>
              </div>
              <div className="md:w-3/5">
                <img
                  src="1.png"
                  alt="Conference"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center pt-7">
              <div className="pb-4 text-center md:pb-0 md:text-left">
                Всероссийская научно-техническая конференция
              </div>
              <div></div>
              <div className="flex flex-col items-end gap-3">
                <button 
                  type="button" 
                  onClick={handleSubmitClick}
                  className="w-full md:w-auto text-white bg-[#1E1933] focus:outline-none font-medium rounded-lg text-xl px-5 py-3.5 text-center md:me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold"
                >
                  ПОДАТЬ ДОКЛАД
                </button>
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
                13 марта 2025 г.
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
                24-26 марта 2025 г.
              </div>
            </div>
          </div>
      </div>

      {/* Conference Sections */}
      <div id="sections" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-target">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
            СЕКЦИИ КОНФЕРЕНЦИИ
          </h2>
          <div className="flex flex-col items-end gap-2 w-auto pb-0 mt-4 md:mt-0">
              <button 
              onClick={handleDownloadRules}
              className="text-right text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-2"
            >
              Скачать положение
              <FileText className="w-5 h-5 text-accent" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up relative flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grow flex justify-between items-center p-4" style={{maxHeight: 88}}>
                <h3 className="w-4/5 text-[#00A7E1] font-medium text-xl">
                  {section.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-10 flex items-center justify-center"
                  onClick={() => toggleCard(section.title)}
                >
                  {
                    expandedCards[section.title] ? ( <Minus className="h-8 w-8" />) : (   <Plus className="h-8 w-8" />)
                  }
                </Button>
              </div>
              <div className="min-h-64 md:h-64 text-[#1E1933]">
                {expandedCards[section.title] ? (
                  <div className="p-4 pb-8 sm:pb-4 pt-0 h-full flex flex-col text-sm">
                    {
                      section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))   
                    }
                  </div>
                ) : (
                  <div 
                    className="h-full w-full bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url("${section.image}")` }}
                    onClick={() => toggleCard(section.title)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Dates */}
      <div id="dates" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 scroll-target">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ВАЖНЫЕ ДАТЫ
        </h2>
        <div className="relative mb-16">
          {/* Timeline line - horizontal on desktop, vertical on mobile */}
          <div className="absolute md:left-0 md:right-0 md:h-0.5 md:top-4 md:w-full h-full w-0.5 left-4 top-0 bg-gradient-to-r md:from-[#17C54E] md:via-[#00A7E1] md:to-[#004876] bg-gradient-to-b from-[#17C54E] via-[#00A7E1] to-[#004876]" />
          
          {/* Timeline points */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 pt-2 md:pt-0">
            {importantDates.map((item, index) => (
              <div key={index} className="relative md:pt-8 pl-12 md:pl-0">
                {/* Circle point */}
                <div className="absolute md:top-3 md:left-1/2 top-1.5 custom-point-left  transform md:-translate-x-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white bg-[#004876]" />
                
                {/* Content */}
                <div className="md:text-center text-left">
                  <p className="text-[#00A7E1] text-base font-medium mb-2">
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

      <div id="rules" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 scroll-target">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ПРАВИЛА ОФОРМЛЕНИЯ
        </h2>
        <div className="flex w-full flex-col sm:flex-row gap-3">
          <button 
            type="button" 
            onClick={handleDownloadTemplate}
            className="flex items-center justify-center gap-4 w-full md:w-1/2 bg-[#ffffff] text-[#1E1933] focus:outline-none font-medium rounded-lg text-xl px-5 py-3.5 text-center md:me-2 mb-2 font-bold"
          >
            <div>
            Скачать шаблон
            </div>
            <div><FileText className="w-5 h-5 icon-color"  /></div>
          
          </button>
          <button 
            type="button" 
            onClick={handleSubmitClick}
            className="w-full md:w-1/2 text-white bg-[#00A7E1] focus:outline-none font-medium rounded-lg text-xl px-5 py-3.5 text-center md:me-2 mb-2 font-bold"
          >
            Подать доклад
          </button>
        </div>
      </div>

      <div id="program" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 scroll-target">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ПРОГРАММА КОНФЕРЕНЦИИ
        </h2>
        <div>
        Информация о программе конференции станет доступна позднее. 
        </div>

        <div className="mt-1">
        Организационный взнос отсутствует. Участие в конференции бесплатное.
        </div>

        <div className="mt-4">
        По результатам проведения конференции планируется издание электронного сборника
        материалов конференции с присвоением ISBN. Сборник будет размещен в электронной
        библиотеке elibrary.ru с индексацией в РИНЦ. 
        </div>
    
      </div>

      {/* Contacts Section */}
      <div id="contacts" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 scroll-target">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          КОНТАКТЫ
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex justify-between flex-col md:flex-row gap-8">
            {/* Email */}
            <div className="basis-1/2  bg-white rounded-lg p-4 flex items-center gap-4 h-24">
              <div className="bg-[#E6EDF2] p-2 rounded-full">
                <Mail className="w-6 h-6 text-[#1E1933]" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Почта</div>
                <div className="text-primary">studscience_iic@ssau.ru</div>
              </div>
            </div>

            {/* Address */}
            <div className="basis-1/2 bg-white rounded-lg p-4 flex items-center gap-4 h-24">
              <div className="bg-[#E6EDF2] p-2 rounded-full">
                <MapPin className="w-6 h-6 text-[#1E1933]" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Адрес</div>
                <div className="text-primary">ул. Молодогвардейская, 151</div>
              </div>
            </div>
          </div>

    
        </div>
          <div className="w-full mt-8 h-[300px] bg-white rounded-lg overflow-hidden">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A223ceca6596dff3653bb9c878f5fc65d32aff316f9684f188e19fe128ff4bd72&amp;source=constructor" width="100%" height="100%"></iframe>
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