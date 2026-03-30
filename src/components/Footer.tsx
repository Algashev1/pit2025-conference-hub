import { Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer
    style={{ 
    background: "#1E1933",
    paddingBottom: "env(safe-area-inset-bottom)"
  }}
  >
    <div
      className="h-px w-full"
      style={{ background: "linear-gradient(90deg, #17C54E 0%, #00A7E1 50%, #004876 100%)" }}
    />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-0.5 mb-3">
            <span
              className="font-black text-2xl text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              VOLGA
            </span>
            <span
              className="font-black text-2xl px-1"
              style={{ color: "#00A7E1", letterSpacing: "-0.03em" }}
            >
              CYBER
            </span>
            <span
              className="font-black text-2xl text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              WEEK
            </span>
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }}
            >
              2026
            </span>
          </div>
          <p className="text-sm text-white/40 max-w-[260px] leading-relaxed">
            II Всероссийская молодежная научно-практическая конференция по информатике и кибернетике
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="mailto:vcw@ssau.ru"
            className="flex items-center gap-3 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00A7E1]"
              style={{ background: "rgba(0,167,225,0.15)" }}
            >
              <Mail className="w-4 h-4 text-[#00A7E1] group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm text-white/60 group-hover:text-white transition-colors">
              vcw@ssau.ru
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(23,197,78,0.15)" }}
            >
              <MapPin className="w-4 h-4" style={{ color: "#17C54E" }} />
            </div>
            <span className="text-sm text-white/60">
              г. Самара, Студенческий пер., 8
            </span>
          </div>
        </div>

        <div className="md:text-right text-sm text-white/30 leading-relaxed">
          <p className="font-medium text-white/50">© 2026 VCW-2026</p>
          <p>Самарский университет</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;