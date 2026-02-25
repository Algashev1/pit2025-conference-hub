import { ArrowRight, ArrowUp, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import NewsletterSubscription from "@/components/NewsletterSubscription";

import Hero from "@/components/Hero";
import ImportantDates from "@/components/ImportantDates";
import Contacts from "@/components/Contacts";
import SectionsGrid from "@/components/SectionsGrid";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleCard = (title: string) =>
    setExpandedCards(prev => ({ ...prev, [title]: !prev[title] }));

  const handleDownloadRules = () => {
    const a = document.createElement("a");
    a.href = "/conference-rules.pdf";
    a.download = "conference-rules.pdf";
    a.click();
  };

  const handleDownloadTemplate = () => {
    const a = document.createElement("a");
    a.href = "/article-template.doc";
    a.download = "article-template.doc";
    a.click();
  };

  return (
    <div className="min-h-full" style={{ background: "#E6EDF2" }}>

      <Hero />

      {/* Секции конференции */}
      <div id="sections" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#1E1933] tracking-tight">
            СЕКЦИИ КОНФЕРЕНЦИИ
          </h2>
          <button
            onClick={handleDownloadRules}
            className="flex items-center gap-2 text-sm font-medium text-[#00A7E1] hover:text-[#0076a3] transition-colors shrink-0"
          >
            Скачать положение
            <FileText className="w-4 h-4" />
          </button>
        </div>

        <SectionsGrid expandedCards={expandedCards} onToggle={toggleCard} />
      </div>

      <ImportantDates />

      {/* Правила оформления */}
      <div id="rules" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1E1933] tracking-tight mb-8">
          ПРАВИЛА ОФОРМЛЕНИЯ
        </h2>
        <button
          type="button"
          onClick={handleDownloadTemplate}
          className="flex items-center justify-center gap-3 w-full bg-white text-[#1E1933] font-bold rounded-xl text-lg px-6 py-5 hover:bg-gray-50 transition-colors"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
        >
          Скачать шаблон статьи
          <FileText className="w-5 h-5 text-[#00A7E1]" />
        </button>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          Для публикации работы необходимо предоставить в оргкомитет лицензионный
          договор и скан экспертного заключения.
        </p>
      </div>

      {/* Подать доклад */}
      <div id="submit" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
        <button
          type="button"
          disabled
          className="flex items-center justify-center gap-4 w-full text-white font-bold rounded-xl text-xl px-6 py-5 opacity-50 cursor-not-allowed"
          style={{ background: "linear-gradient(90deg, #00A7E1, #004876)" }}
        >
          Подать доклад
          <ArrowRight className="w-6 h-6" />
        </button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Ссылка на систему подачи докладов будет доступна позднее
        </p>
      </div>

      {/* Программа конференции */}
      <div id="program" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1E1933] tracking-tight mb-8">
          ПРОГРАММА КОНФЕРЕНЦИИ
        </h2>
        <div
          className="bg-white rounded-lg p-7 space-y-4 text-[#1E1933] text-base leading-relaxed"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
        >
          <p>Формат конференции — <strong>очный</strong>.</p>
          <p>Программа конференции будет сформирована позднее.</p>
          <p>Организационный взнос отсутствует. <strong>Участие в конференции бесплатное.</strong></p>
          <p>
            По результатам конференции планируется издание электронного сборника с
            присвоением ISBN. Сборник будет размещён в{" "}
            <strong>elibrary.ru</strong> с индексацией в РИНЦ.
          </p>
        </div>
      </div>

      <Contacts />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Вернуться наверх"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform bg-[#00A7E1]"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <NewsletterSubscription
        open={showSubscriptionModal}
        onOpenChange={setShowSubscriptionModal}
      />
    </div>
  );
};

export default Index;