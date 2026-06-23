import { useEffect } from "react";
import { FileText, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

import Carousel from "@/components/Carousel";

const ArchiveVCV2025 = () => {

  const galleryImages = [
    "archive/1.jpg",
    "archive/2.jpg",
    "archive/3.jpg",
    "archive/4.jpg",
    "archive/5.jpg"
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const handleDownloadProgram = () => {
    const link = document.createElement('a');
    link.href = '/conference-program.pdf';
    link.download = 'conference-program.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const winners = [
    {
      section: "Искусственный интеллект",
      items: [
        {
          name: "Горбунов Егор Вадимович",
          description: "Использование эталонных 3D моделей для генерации синтетических данных для детектирования и сегментирования объектов на изображении"
        },
        {
          name: "Янкин Иван Юрьевич",
          description: "Особенности использования автоэнкодера Word2Vec для семантического анализа"
        },
        {
          name: "Кремущенко Полина Александровна",
          description: "Определение тени на изображении с помощью глубоких свёрточных нейронных сетей"
        }
      ]
    },
    {
      section: "Электроника и интернет вещей",
      items: [
        {
          name: "Бардина Екатерина Сергеевна",
          description: "Разработка контролируемой среды для выращивания растений"
        }
      ]
    },
    {
      section: "Биотехнические системы и технологии",
      items: [
        {
          name: "Пименова Ирина Александровна",
          description: "Оптимизация интеллектуального анализа спектральных данных сыворотки крови методом разрешения многомерных кривых"
        },
        {
          name: "Томникова Ксения Евгеньевна",
          description: "Исследование эффективности методов искусственного интеллекта при идентификации рамановских спектров кожных новообразований"
        },
        {
          name: "Захаров Никита Константинович",
          description: "Сравнение сверточных нейронных сетей InceptionV3, DenseNet201 и ResNet50 в задаче классификации кожных образований"
        }
      ]
    },
    {
      section: "Компьютерная оптика и фотоника",
      items: [
        {
          name: "Парфенов Михаил Эдуардович",
          description: "Разработка рамановских спектрометров с CCD и фотодиодным детекторами"
        },
        {
          name: "Григорьев Николай Иванович",
          description: "Оптическая анизотропия, индуцируемая продольным механическим нагружением градана на основе стекла ОФЭ"
        },
        {
          name: "Соболев Илья Валерьевич",
          description: "Численное исследование устойчивости топологического заряда пучков Лагерра-Гаусса с увеличенной областью к турбулентным искажениям"
        }
      ]
    },
    {
      section: "Науки о данных",
      items: [
        {
          name: "Федорова Софья Александровна",
          description: "Способ извлечения признаков идентификации человека по паттерну шага"
        },
        {
          name: "Сулимов Дмитрий Николаевич",
          description: "Сравнение методов нахождения оптического потока сцены: традиционные подходы, PWOC-3D и STEREO-RSSF"
        },
        {
          name: "Прокопович Дмитрий Игоревич",
          description: "Автоматизированная система для отладки и мониторинга микросервисных веб-приложений"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
          VOLGA CYBER WEEK 2025
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl text-center">
          Всероссийская молодежная научно-практическая конференция по информатике и кибернетике
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-0">
            О КОНФЕРЕНЦИИ
          </h2>
          <button
            onClick={handleDownloadProgram}
            className="text-right text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-2"
          >
            Скачать программу 2025
            <FileText className="w-5 h-5 text-accent" />
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-4 text-gray-700">
          <p>
            С 24 по 26 марта в Самарском университете состоялась первая Всероссийская молодежная научно-практическая конференция по информатике и кибернетике Volga Cyber Week. Участие в ней приняли более 150 студентов, аспирантов и молодых учёных из разных регионов России.
          </p>
          <p>
            Организатором конференции выступило студенческое научное общество института информатики и кибернетики при поддержке дирекции института информатики и кибернетики.
          </p>
          <p className="font-medium">Участники представили свои работы в шести секциях:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>компьютерная оптика и фотоника;</li>
            <li>искусственный интеллект;</li>
            <li>математическое моделирование</li>
            <li>биотехнические системы и технологии;</li>
            <li>электроника и интернет вещей;</li>
            <li>наука о данных.</li>
          </ul>
          <p>
            Параллельно с конференцией был проведен конкурс научно-исследовательских работ
            «VCW - Платформа для открытий».
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ПУБЛИКАЦИИ И МАТЕРИАЛЫ
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Сборник трудов</h3>
            <p className="text-sm text-gray-600 mb-4">
              Опубликованный сборник научных трудов конференции Volga Cyber Week 2025
            </p>
            <Button
              variant="outline"
              className="w-full border-[#00A7E1] text-[#00A7E1] hover:bg-[#00A7E1] hover:text-white"
            >
              <a href="https://elibrary.ru/item.asp?id=82732089" target="_blank" className="flex items-center w-full justify-center">
                <FileText className="w-4 h-4 mr-2" />
                Перейти к сборнику
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Репозиторий работ</h3>
            <p className="text-sm text-gray-600 mb-4">
              Полный архив работ участников конференции в репозитории Самарского университета
            </p>
            <Button
              variant="outline"
              className="w-full border-[#00A7E1] text-[#00A7E1] hover:bg-[#00A7E1] hover:text-white"
            >
              <a href="https://repo.ssau.ru/handle/VOLGA-CYBER-WEEK/525" target="_blank" className="flex items-center w-full justify-center">
                <Database className="w-4 h-4 mr-2" />
                Открыть репозиторий
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ПОБЕДИТЕЛИ ПО СЕКЦИЯМ
        </h2>

        <div className="space-y-6">
          {winners.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#00A7E1] text-white px-6 py-3 font-semibold">
                Секция «{category.section}»
              </div>
              <div className="p-6 space-y-4">
                {category.items.map((winner, idx) => (
                  <div key={idx} className="border-l-4 border-[#00A7E1] pl-4">
                    <h4 className="font-semibold text-primary mb-1">{winner.name}</h4>
                    <p className="text-sm text-gray-600">{winner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ГАЛЕРЕЯ
        </h2>

        <Carousel images={galleryImages} className="mb-6"/>

        <Button
          variant="outline"
          className="w-full border-[#00A7E1] text-[#00A7E1] hover:bg-[#00A7E1] hover:text-white"
        >
          <a href="https://vk.com/album-217063025_306808535" target="_blank" className="flex items-center w-full justify-center">
            <FileText className="w-4 h-4 mr-2" />
            Показать ещё
          </a>
        </Button>
      </section>
    </div>
  );
};

export default ArchiveVCV2025;