import { Card } from "@/components/ui/card";

const Sections = () => {
  const sections = [
    {
      title: "Artificial Intelligence and Machine Learning",
      topics: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
      ],
    },
    {
      title: "Data Science and Big Data",
      topics: [
        "Data Mining",
        "Data Analytics",
        "Big Data Processing",
        "Data Visualization",
      ],
    },
    {
      title: "Cloud Computing and Distributed Systems",
      topics: [
        "Cloud Architecture",
        "Distributed Computing",
        "Microservices",
        "Containerization",
      ],
    },
    {
      title: "Cybersecurity and Privacy",
      topics: [
        "Network Security",
        "Cryptography",
        "Privacy-Preserving Computing",
        "Security Protocols",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-secondary pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Conference Sections
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              className="p-6 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <h2 className="text-xl font-semibold mb-4 text-accent">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.topics.map((topic) => (
                  <li key={topic} className="text-gray-600">
                    • {topic}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections;