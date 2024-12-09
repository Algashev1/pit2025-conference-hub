import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Международная научно-техническая конференция "Перспективные информационные технологии"
            <span className="text-accent"> (ПИТ-2025)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us for the premier conference on advanced information technologies,
            bringing together researchers, practitioners, and industry leaders.
          </p>
          <Link
            to="/submit"
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Submit Your Paper
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Key Information */}
        <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Virtual Conference</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-2">Date</h3>
            <p className="text-gray-600">September 15-17, 2025</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-2">Submission Deadline</h3>
            <p className="text-gray-600">June 1, 2025</p>
          </div>
        </div>

        {/* Topics Preview */}
        <div className="max-w-7xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Conference Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Data Science",
              "Cloud Computing",
              "Cybersecurity",
              "IoT Technologies",
            ].map((topic, index) => (
              <div
                key={topic}
                className="bg-white p-4 rounded-lg shadow-sm animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;