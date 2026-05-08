import { ArrowRight } from "lucide-react";

const partnersData = [
      //пример на будущее
  // {
  //   id: "айдишка",
  //   name: "Имя партнёра",
  //   logoSrc: "/лого в svg.svg",
  //   roleText: "Загаловок",
  //   description: ["Описание можно несколько абзацев через массив"],
  //   websiteUrl: "сайтик по кнопек",
  //   websiteText: "текст кнопки",
  // },
  {
    id: "t1",
    name: "Т1",
    logoSrc: "/t1-logo.svg",
    roleText: "выступает официальным партнёром Volga Cyber Week 2026.",
    description: [
      "Т1 — один из лидеров российского ИТ-рынка, специализирующийся на облачных решениях, кибербезопасности и инфраструктуре. Компания поддерживает развитие научных и образовательных проектов, а также внедряет современные цифровые технологии в бизнес и образование.",
      "Партнёрство с Т1 помогает конференции обеспечить студентов и молодых исследователей актуальной экспертизой в области информационной безопасности и цифровой трансформации."
    ],
    websiteUrl: "https://t1.ru",
    websiteText: "Посетить сайт Т1",
  },
  {
    id: "itc",
    name: "ИТ-Сервис",
    logoSrc: "/itc-logo.svg",
    roleText: "выступает официальным партнёром \n Volga Cyber Week 2026.",
    description: [
      "ООО «ИТ-Сервис» — российская инжиниринговая компания, специализирующаяся на разработке программного обеспечения, систем искусственного интеллекта, компьютерного зрения и решений для промышленной цифровизации. Компания реализует проекты для предприятий нефтегазовой отрасли, промышленности, ритейла и телеком-сектора.",
    ],
    websiteUrl: "https://its-samara.com",
    websiteText: "Посетить сайт ИТ-Сервис",
  },
];

const Partners = () => {
  return (
    <div id="partner" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16">
      <h2 className="text-3xl md:text-4xl font-black text-[#1E1933] tracking-tight mb-8 uppercase">
        {partnersData.length > 1 ? "Партнёры конференции" : "Партнёр конференции"}
      </h2>
      
      <div className="grid gap-8">
        {partnersData.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-lg p-7 space-y-6 text-[#1E1933] text-base leading-relaxed"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img
                src={partner.logoSrc}
                alt={`Логотип ${partner.name}`}
                className="h-16 w-auto object-contain"
              />
              <p className="font-semibold text-lg">
                Компания <span className="text-[#00A7E1]">{partner.name}</span> {partner.roleText}
              </p>
            </div>
            
            <div className="space-y-4">
              {partner.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <a
              href={partner.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A7E1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0076a3]"
            >
              {partner.websiteText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;