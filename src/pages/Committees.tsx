import { Card } from "@/components/ui/card";

const Committees = () => {
  const committees = {
    organizing: [
      {
        name: "Иванов Иван Иванович",
        role: "Председатель Программного комитета",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
      },
      {
        name: "Петров Пётр Петрович",
        role: "Заместитель председателя программного комитета",
        affiliation:
          "Институт систем обработки изображений РАН – филиал ФНИЦ «Кристаллография и фотоника» РАН, г. Самара, Россия.",
        photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&q=80",
      },
      {
        name: "Комаров Илья Романович",
        role: "Заместитель председателя программного комитета",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
      },
    ],
    organizingList: [
      "Смирнова Анна Владимировна - Самарский университет",
      "Козлов Дмитрий Сергеевич - МГТУ им. Баумана",
      "Морозова Екатерина Павловна - СПбГУ",
      "Соколов Артём Игоревич - НГУ",
      "Волкова Мария Александровна - ТГУ",
      "Новиков Павел Андреевич - УрФУ",
      "Федоров Константин Дмитриевич - ДВФУ",
    ],
    program: [
      {
        name: "Иванов Иван Иванович",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
      },
      {
        name: "Петров Пётр Петрович",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80",
      },
      {
        name: "Комаров Илья Романович",
        affiliation: "Самарский университет им. Королева, г. Самара, Россия",
        photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&q=80",
      },
    ],
    programList: [
      "Андреев Сергей Викторович - МГУ",
      "Белова Ольга Николаевна - КФУ",
      "Григорьев Максим Васильевич - НГТУ",
      "Дмитриева Светлана Игоревна - ТПУ",
      "Ершов Александр Петрович - МФТИ",
      "Жукова Наталья Владимировна - ИТМО",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {committees.organizing.map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">{member.name}</h3>
                  <p className="text-accent mb-1 text-center">{member.role}</p>
                  <p className="text-gray-600 text-center text-sm">{member.affiliation}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Члены организационного комитета:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {committees.organizingList.map((member) => (
                <li key={member} className="hover:text-accent transition-colors">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Program Committee */}
        <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold mb-6">Программный комитет</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {committees.program.map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">{member.name}</h3>
                  <p className="text-gray-600 text-center text-sm">{member.affiliation}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Члены программного комитета:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {committees.programList.map((member) => (
                <li key={member} className="hover:text-accent transition-colors">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committees;