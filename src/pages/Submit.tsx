import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, Info } from "lucide-react";

const Submit = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Отправить статью
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Submission Guidelines */}
          <Card className="p-6 mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Info className="mr-2 h-6 w-6 text-accent" />
              Правила оформления тезисов
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Название 16пт полужирным Time New Roman.</li>
              <li>• Фамилия и инициалы автора 12пт курсив полужирный Time New Roman.</li>
              <li>• Место работы или учебы 12пт курсив обычный Time New Roman.</li>
              <li>• Ключевые слова 12пт курсив обычный Time New Roman.</li>
              <li>• Основной текст 12пт обычный Time New Roman.</li>
              <li>• Список литературы 10пт обычный Time New Roman.</li>
              <li>• Объем тезисов должен быть 2-3 страницы.</li>
              <li>• Поля: левое 3см, правое 1см, верхнее 2.5см, нижнее 3см, абзац 1см.</li>
              <li>• Все формулы в тексте располагаются посередине и нумеруются по правому краю.</li>
              <li>• Все рисунки в тексте нумеруются. Подрисуночные подписи выравниваются по центру, шрифт подписей 10пт.</li>
            </ul>
          </Card>

          {/* Templates */}
          <Card className="p-6 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 h-6 w-6 text-accent" />
              Шаблоны
            </h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                Шаблон на русском языке
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Шаблон на английском языке
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Submit Button */}
          {/* <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              Submit via EasyChair
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Submit;