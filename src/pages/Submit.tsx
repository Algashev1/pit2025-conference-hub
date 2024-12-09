import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, Info } from "lucide-react";

const Submit = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Submit Your Paper
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Submission Guidelines */}
          <Card className="p-6 mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Info className="mr-2 h-6 w-6 text-accent" />
              Submission Guidelines
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Papers must be written in English</li>
              <li>• Maximum length: 8 pages including references</li>
              <li>• Format: PDF file following the conference template</li>
              <li>• Original work that has not been published elsewhere</li>
              <li>• Double-blind review process</li>
            </ul>
          </Card>

          {/* Templates */}
          <Card className="p-6 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 h-6 w-6 text-accent" />
              Templates
            </h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                Download LaTeX Template
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Download Word Template
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              Submit via EasyChair
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;