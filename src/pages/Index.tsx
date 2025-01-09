import { ArrowRight, ArrowUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const Index = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const handleSectionClick = (sectionTitle: string) => {
    navigate('/sections', { state: { openSection: sectionTitle } });
  };

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
    <div className="min-h-screen bg-gradient-radial">
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Международная научно-техническая конференция "Перспективные информационные технологии"
            <span className="text-accent"> (ПИТ-2025)</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Добро пожаловать на ведущую научную конференцию по передовым информационным технологиям, которая объединяет исследователей, практиков и лидеров индустрии для обмена опытом, инновациями и достижениями.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/submit"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl"
            >
              Отправить статью
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Button
              variant="secondary"
              onClick={() => setShowSubscriptionModal(true)}
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Подписаться на новости
            </Button>
          </div>
        </div>

        {/* Key Information */}
        <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up border border-primary/10" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold mb-3 text-primary">Место проведения</h3>
            <p className="text-gray-700">г. Самара, Молодогвардейская ул., 151 (первый корпус Самарского университета)</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up border border-primary/10" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-3 text-primary">Даты проведения</h3>
            <p className="text-gray-700">10-12 марта 2025 г.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up border border-primary/10" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-3 text-primary">Окончание приёма материалов доклада</h3>
            <p className="text-gray-700">1 февраля 2025</p>
          </div>
        </div>

        {/* Topics Preview */}
        <div className="max-w-7xl mx-auto mt-20 text-center mb-20">
          <h2 className="text-3xl font-bold mb-12 text-primary">Секции</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Компьютерная оптика и нанофотоника",
              "Информационные технологии дистанционного зондирования Земли",
              "Искусственный интеллект",
              "Науки о данных",
              "Информационные технологии в биомедицине",
            ].map((topic, index) => (
              <div
                key={topic}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer animate-fade-up hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 border border-primary/10"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onClick={() => handleSectionClick(topic)}
              >
                <p className="text-gray-700 font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-r from-primary to-accent text-white"
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