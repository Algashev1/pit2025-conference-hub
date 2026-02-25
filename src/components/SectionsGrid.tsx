import SectionCard from "@/components/SectionCard";
import { sections } from "@/data/sections";

type Props = {
  expandedCards: Record<string, boolean>;
  onToggle: (title: string) => void;
};

/**
 * Два независимых flex-столбца на десктопе.
 * Расширение карточки в одном столбце не сдвигает карточки в другом.
 * На мобайле — один столбец.
 */
const SectionsGrid = ({ expandedCards, onToggle }: Props) => {
  const left  = sections.filter((_, i) => i % 2 === 0);
  const right = sections.filter((_, i) => i % 2 !== 0);

  return (
    <>
      {/* Desktop: two independent columns */}
      <div className="hidden md:flex gap-5 items-start">
        <div className="flex-1 flex flex-col gap-5">
          {left.map((section) => (
            <SectionCard
              key={section.title}
              section={section}
              index={sections.indexOf(section)}
              expanded={!!expandedCards[section.title]}
              onToggle={() => onToggle(section.title)}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-5">
          {right.map((section) => (
            <SectionCard
              key={section.title}
              section={section}
              index={sections.indexOf(section)}
              expanded={!!expandedCards[section.title]}
              onToggle={() => onToggle(section.title)}
            />
          ))}
        </div>
      </div>

      {/* Mobile: single column in original order */}
      <div className="flex md:hidden flex-col gap-5">
        {sections.map((section, index) => (
          <SectionCard
            key={section.title}
            section={section}
            index={index}
            expanded={!!expandedCards[section.title]}
            onToggle={() => onToggle(section.title)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionsGrid;