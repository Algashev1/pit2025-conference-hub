import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Sections = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState<string | undefined>(
    location.state?.openSection
  );

  useEffect(() => {
    if (location.state?.openSection) {
      setOpenSection(location.state.openSection);
      window.history.replaceState({}, document.title);
    }
  }, [location.state?.openSection]);

  const sections = [
    {
      title: "Компьютерная оптика и нанофотоника",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      topics: [
        "Дифракционная оптика (расчёт, моделирование и технологии изготовления элементов дифракционной оптики, приложения)",
        "Планарные оптические структуры (волноводы, фотонные кристаллы, резонансные структуры, брэгговские решётки)",
        "Гиперспектральные системы (оптические схемы, дисперсионные элементы, спектральные фильтры)",
        "Нанофотоника (расчёт, моделирование и технологии изготовления элементов нанофотоники, плазмоника, метаповерхности) ",
        "Системы оптической сенсорики, передачи и обработки информации (оптические вычисления, моделирование оптических систем формирования изображений, оптические нейронные сети, волоконная оптика, передача информации в свободном пространстве)",
        "Сингулярная оптика (методы генерации и регистрации оптических вихрей, распространение и фокусировка вихревых пучков, цилиндрические векторные пучки, спин-орбитальная конверсия)"
      ],
    },
    {
      title: "Информационные технологии дистанционного зондирования Земли",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      topics: [
        "Информационные технологии в проектировании космических аппаратов дистанционного зондирования Земли и полезных нагрузок для них",
        "Программные и математические решения для управления движением космических аппаратов наблюдения",
        "Программные и аппаратные средства для получения, обработки и анализа данных, получаемых с космических аппаратов дистанционного зондирования Земли",
        "Геоинформационные системы и технологии (векторизация, трассировка, пространственный анализ, пространственное моделирование; геометрическая и радиометрическая коррекция; слияние (fusion) изображений дистанционного зондирования; спектральные разложения (unmixing), обнаружение изменений и аномалий);",
      ],
    },
    {
      title: "Искусственный интеллект",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      topics: [
        "Новые подходы, тренды и фундаментальные результаты в сфере искусственного интеллекта и его приложениях к распознаванию образов и анализу изображений, обработке текстов, речевой информации",
        "Нейросетевые методы и глубокое обучение: новые архитектуры, нейростевые модели, методы обучения, мультимодальные интеллектуальные системы, новые подходы к решению прикладных задач, подготовке данных для обучения, формирование датасетов",
        "Прикладные технологии искусственного интеллекта в обработке изображений, беспилотном транспорте, производственных и сельскохозяйственных приложениях, медицинских приложениях, экологии, мониторинге окружающей среды и других",
        "Программные технологии для решения задач искусственного интеллекта – фреймворки, библиотеки, открытые инициативы и сообщества",
      ],
    },
    {
      title: "Науки о данных",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      topics: [
        "Компьютерные науки",
        "Прикладные задачи интеллектуального анализа данных",
        "Математические методы цифровой обработки изображений",
        "Математические методы распознавания образов",
        "Технологии машинного зрения",
      ],
    },
    {
      title: "Информационные технологии в биомедицине",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
      topics: [
        "Математические методы обработки биомедицинских данных, сигналов, изображений, биомедицинская визуализация",
        "Интеллектуальный анализ биомедицинских данных, системы поддержки принятия врачебных решений",
        "Технологии искусственного интеллекта в обработке биомедицинских данных, нейронные сети и глубокое обучение в биомедицинских приложениях",
        "Технологии дополненной и виртуальной реальности в биомедицинских приложениях",
        "Медицинские информационные системы, системы удаленного взаимодействия и мониторинга, телемедицина, интернет-медицина",
        "Математическое моделирование биофизических процессов",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-secondary pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Секции конференции
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              className="overflow-hidden animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${section.image})` }}
              />
              <div className="p-6">
                <Accordion 
                  type="single" 
                  collapsible
                  value={openSection === section.title ? section.title : undefined}
                  onValueChange={(value) => setOpenSection(value)}
                >
                  <AccordionItem value={section.title}>
                    <AccordionTrigger className="text-xl font-semibold text-accent">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-4">
                        {section.topics.map((topic) => (
                          <li key={topic} className="text-gray-600">
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections;