import { Card } from "@/components/ui/card";

const Committees = () => {
  const committees = {
    organizing: [
      {
        name: "Dr. Sarah Chen",
        role: "Conference Chair",
        affiliation: "Stanford University",
      },
      {
        name: "Prof. Michael Roberts",
        role: "Program Chair",
        affiliation: "MIT",
      },
      {
        name: "Dr. Elena Rodriguez",
        role: "Technical Chair",
        affiliation: "ETH Zurich",
      },
    ],
    program: [
      {
        name: "Prof. James Wilson",
        affiliation: "University of Cambridge",
      },
      {
        name: "Dr. Yuki Tanaka",
        affiliation: "University of Tokyo",
      },
      {
        name: "Prof. Maria Garcia",
        affiliation: "Technical University of Munich",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-secondary pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Conference Committees
        </h1>

        {/* Organizing Committee */}
        <section className="mb-16 animate-fade-up">
          <h2 className="text-2xl font-semibold mb-6">Organizing Committee</h2>
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
          <h2 className="text-2xl font-semibold mb-6">Program Committee</h2>
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