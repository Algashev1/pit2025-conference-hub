import { Card } from "@/components/ui/card";

const Committees = () => {
  const committees = {
    organizing: [
      {
        name: "Иванов Иван Иванович",
        role: "Председатель Программного комитета",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
      },
      {
        name: "Петров Пётр Петрович",
        role: "Заместитель председателя программного комитета",
        affiliation: "Институт систем обработки изображений РАН – филиал ФНИЦ «Кристаллография и фотоника» РАН, г. Самара, Россия.",
      },
      {
        name: "Комаров Илья Романович",
        role: "Заместитель председателя программного комитета",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
      },
    ],
    program: [
      {
        name: "Иванов Иван Иванович",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
      },
      {
        name: "Петров Пётр Петрович",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
      },
      {
        name: "Комаров Илья Романович",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-secondary pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Комитеты
        </h1>

        {/* Organizing Committee */}
        <section className="mb-16 animate-fade-up">
          <h2 className="text-2xl font-semibold mb-6">Организационный комитет</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.organizing.map((member) => (
              <Card key={member.name} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <p className="text-accent mb-1">{member.role}</p>
                <p className="text-gray-600">{member.affiliation}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Committee */}
        <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold mb-6">Программный комитет</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.program.map((member) => (
              <Card key={member.name} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.affiliation}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committees;