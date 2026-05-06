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
    a.href = "/template_2026.docx";
    a.download = "template_2026.docx";
    a.click();
  };

  const handleDownloadContract = () => {
    const a = document.createElement("a");
    a.href = "/licence_2026.doc";
    a.download = "licence_2026.doc";
    a.click();
  };

  const SUBMIT_URL = "https://scideck.ru/vcw2026";

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
          Скачать шаблон оформления
          <FileText className="w-5 h-5 text-[#00A7E1]" />
        </button>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          Для публикации работы необходимо предоставить в оргкомитет{" "}
          <button
            type="button"
            onClick={handleDownloadContract}
            className="relative inline-flex items-center gap-1 font-medium underline decoration-dotted underline-offset-4 transition-colors"
            style={{ color: "#00A7E1", textDecorationColor: "#00A7E155" }}
            onMouseEnter={e => {
              (e.currentTarget.style.color = "#0076a3");
              (e.currentTarget.style.textDecorationColor = "#0076a3");
            }}
            onMouseLeave={e => {
              (e.currentTarget.style.color = "#00A7E1");
              (e.currentTarget.style.textDecorationColor = "#00A7E155");
            }}
            title="Скачать лицензионный договор"
          >
            лицензионный договор
            <svg
              className="inline w-3.5 h-3.5 opacity-60"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>{" "}
          и скан экспертного заключения.
        </p>
      </div>

      {/* Подать доклад */}
      {/* <div id="submit" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
        <button
          type="button"
          onClick={() => window.open(SUBMIT_URL, "_blank", "noopener,noreferrer")}
          className="flex items-center justify-center gap-4 w-full text-white font-bold rounded-xl text-xl px-6 py-5 transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #00A7E1, #004876)" }}
        >
          Подать доклад
          <ArrowRight className="w-6 h-6" />
        </button>
      </div> */}

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
          <p>Участие с докладом и публикация в сборнике материалов конференции — <strong>бесплатные</strong>.</p>
          <p>Программа конференции будет сформирована позднее.</p>
          <p>
            По результатам конференции планируется издание электронного сборника с
            присвоением ISBN. Сборник будет размещён в{" "}
            <strong>elibrary.ru</strong> с индексацией в РИНЦ.
          </p>
        </div>
      </div>

      {/* Партнёр конференции */}
      <div id="partner" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1E1933] tracking-tight mb-8">
          ПАРТНЁР КОНФЕРЕНЦИИ
        </h2>
        <div
          className="bg-white rounded-lg p-7 space-y-6 text-[#1E1933] text-base leading-relaxed"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <img
              src="/t1-logo.svg"
              alt="Логотип Т1"
              className="h-16 w-auto object-contain"
            />
            <p className="font-semibold text-lg">
              Компания <span className="text-[#00A7E1]">Т1</span> выступает официальным партнёром Volga Cyber Week 2026.
            </p>
          </div>
          <p>Т1 — один из лидеров российского ИТ-рынка, специализирующийся на облачных решениях, кибербезопасности и инфраструктуре. Компания поддерживает развитие научных и образовательных проектов, а также внедряет современные цифровые технологии в бизнес и образование.</p>
          <p>Партнёрство с Т1 помогает конференции обеспечить студентов и молодых исследователей актуальной экспертизой в области информационной безопасности и цифровой трансформации.</p>
          <a
            href="https://t1.ru"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A7E1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0076a3]"
          >
            Посетить сайт Т1
            <ArrowRight className="w-4 h-4" />
          </a>
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