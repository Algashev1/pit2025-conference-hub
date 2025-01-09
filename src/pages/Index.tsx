import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      {/* Hero Section */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                VOLGA<br />CYBER<br />WEEK
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Международная научно-техническая конференция
              </p>
              <Link to="/submit">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Отправить статью
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/b62e13b8-2feb-47a4-8151-392ea1e70508.png"
                  alt="Cyber visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Information */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-accent/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Место проведения</h3>
            <p className="text-gray-600">г. Самара, Молодогвардейская ул., 151</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Даты проведения</h3>
            <p className="text-gray-600">24-26 марта 2025 г.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Окончание приёма материалов</h3>
            <p className="text-gray-600">1 февраля 2025</p>
          </div>
        </div>

        {/* Sections Preview */}
        <div className="max-w-7xl mx-auto mt-20 mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Секции конференции</h2>
            <Button variant="outline" asChild>
              <Link to="/sections">Скачать положение</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Компьютерная оптика и нанофотоника",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800"
              },
              {
                title: "Искусственный интеллект",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
              },
              {
                title: "Информационные технологии в биомедицине",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800"
              },
              {
                title: "Науки о данных",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
              },
            ].map((section, index) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
                <div className="p-6">
                  <h3 className="font-medium text-lg">{section.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;