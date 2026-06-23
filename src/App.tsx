import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ArchiveVCV2025 from "./pages/ArchiveVCV2025"
import ArchiveVCV2026 from "./pages/ArchiveVCV2026"
import Contest from "./pages/Contest"



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div style={{ minHeight: "-webkit-fill-available" }} className=" flex flex-col">
        <Toaster />
        <Sonner />
        <HashRouter>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/archive" element={<ArchiveVCV2025 />} />
              <Route path="/archive-2026" element={<ArchiveVCV2026 />} />
              <Route path="/contest" element={<Contest />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;