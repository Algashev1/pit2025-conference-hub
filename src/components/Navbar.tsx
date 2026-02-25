import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";

const navItems = [
  { name: "Секции", id: "sections" },
  { name: "Даты", id: "dates" },
  { name: "Правила", id: "rules" },
  { name: "Программа", id: "program" },
  { name: "Контакты", id: "contacts" },
];

const archiveItems = [{ name: "VCW-2025", link: "/archive" }];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: "#1E1933",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-0.5 select-none"
          >
            <Brain className="w-8 h-8 text-white" />
            <span
              className="ml-2.5 text-xs font-bold px-2 py-0.5 rounded"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }}
            >
              2026
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150 group"
              >
                {item.name}
                <span
                  className="absolute bottom-0.5 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  style={{ background: "#00A7E1" }}
                />
              </button>
            ))}

            <div className="relative group px-1">
              <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150 flex items-center gap-1.5">
                Архив
                <svg
                  className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 right-0 h-3 top-full" />
              <div
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 min-w-[150px] rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                style={{
                  background: "#2a2545",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                {archiveItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="block px-5 py-3.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            disabled
            className="hidden xl:flex px-5 py-2 rounded-lg text-sm font-bold text-white/40 cursor-not-allowed"
            style={{
              background: "rgba(0,167,225,0.15)",
              border: "1px solid rgba(0,167,225,0.2)",
            }}
            title="Ссылка на подачу докладов будет доступна позднее"
          >
            Подать доклад
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="xl:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "520px" : "0" }}
      >
        <div
          className="px-4 pb-5 pt-2 space-y-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex w-full items-center px-4 py-3 rounded-lg text-[15px] text-white/70 hover:text-white transition-colors text-left"
              style={{ background: "transparent" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => setIsArchiveOpen(!isArchiveOpen)}
            className="flex w-full items-center justify-between px-4 py-3 rounded-lg text-[15px] text-white/70 hover:text-white transition-colors"
          >
            Архив
            <svg
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: isArchiveOpen ? "rotate(180deg)" : "rotate(0)" }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isArchiveOpen && (
            <div className="ml-3 pl-3" style={{ borderLeft: "2px solid rgba(0,167,225,0.3)" }}>
              {archiveItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="block px-4 py-2.5 text-[15px] text-white/60 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <button
              disabled
              className="w-full mt-2 px-5 py-3 rounded-lg text-[15px] font-bold text-white/40 cursor-not-allowed"
              style={{ background: "rgba(0,167,225,0.1)", border: "1px solid rgba(0,167,225,0.15)" }}
            >
              Подать доклад
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;