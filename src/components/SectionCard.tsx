import { Plus } from "lucide-react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/data/sections";

type Props = {
  section: Section;
  index: number;
  expanded: boolean;
  onToggle: () => void;
};

const SectionCard = ({ section, index, expanded, onToggle }: Props) => {
  const { ref, visible } = useReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <div
      ref={ref}
      className="group bg-white rounded-xl overflow-hidden flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, box-shadow 0.25s ease`,
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,0.12), 0 0 0 2px ${section.accent}25`)
      }
      onMouseLeave={e =>
        (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.07)")
      }
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex justify-between items-center px-6 py-5 gap-4 text-left w-full"
        aria-expanded={expanded}
      >
        <span
          className="shrink-0 w-1.5 self-stretch rounded-full"
          style={{ background: section.accent, minHeight: "1.75rem" }}
        />
        <span
          className="flex-1 font-bold text-base leading-snug"
          style={{ color: "#1E1933" }}
        >
          {section.title}
        </span>
        <span
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: section.accent + "18",
            color: section.accent,
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </button>

      {/* Body */}
      <div
        style={{
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          maxHeight: expanded ? "900px" : "240px",
        }}
      >
        {expanded ? (
          <ul className="px-7 pb-7 pt-1 grid grid-cols-1 gap-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: section.accent }}
                />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="relative cursor-pointer"
            style={{ height: "196px" }}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === "Enter" && onToggle()}
          >
            {/* Скрытый img для отслеживания ошибки загрузки */}
            <img
              src={section.image}
              alt=""
              className="hidden"
              onError={() => setImgError(true)}
            />

            {imgError ? (
              /* Фоллбэк — название секции */
              <div
                className="absolute inset-0 flex items-center justify-center px-8"
                style={{ background: section.accent + "12" }}
              >
                <p
                  className="text-center font-bold text-lg leading-snug"
                  style={{ color: section.accent }}
                >
                  {section.title}
                </p>
              </div>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${section.image}")` }}
              />
            )}

            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: section.accent + "cc" }}
            >
              <span className="text-white font-bold text-base tracking-wide">
                Показать темы →
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionCard;