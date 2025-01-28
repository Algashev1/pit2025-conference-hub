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
    <div className="min-h-screen bg-[#E6EDF2]">
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 flex items-center">
            <div className="w-1/4 pr-8">
              <h1 className="text-[#1E1933] text-4xl font-bold text-left">
                Volga Cyber Week
              </h1>
            </div>
            <div className="w-3/4">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Conference"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Information */}
        <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-2">Место проведение</h3>
            <p className="text-gray-600">г. Самара, Молодогвардейская ул., 151 (первый корпус Самарского университета)</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-2">Даты проведения</h3>
            <p className="text-gray-600">10-12 марта 2025 г.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-2">Окончание приёма материалов доклада</h3>
            <p className="text-gray-600">1 февраля 2025</p>
          </div>
        </div>

        {/* Topics Preview */}
        <div className="max-w-7xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#1E1933]">Секции</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Компьютерная оптика и нанофотоника",
              "Информационные технологии дистанционного зондирования Земли",
              "Искусственный интеллект",
              "Науки о данных",
              "Информационные технологии в биомедицине",
            ].map((topic, index) => (
              <div
                key={topic}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm animate-fade-up cursor-pointer hover:bg-white/95 transition-all"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onClick={() => handleSectionClick(topic)}
              >
                {topic}
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