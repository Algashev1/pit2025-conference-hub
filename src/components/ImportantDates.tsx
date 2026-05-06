import { importantDates } from "@/data/importantDates";

const ImportantDates = () => (
  <div id="dates" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16 scroll-target">
    <h2 className="text-3xl md:text-4xl font-black text-[#1E1933] tracking-tight mb-10">
      ВАЖНЫЕ ДАТЫ
    </h2>

    <div className="relative mb-16">

      <div
        className="absolute md:hidden h-full w-0.5 left-4 top-0"
        style={{ background: "linear-gradient(to bottom, #17C54E, #00A7E1, #004876)" }}
      />

      <div
        className="absolute hidden md:block left-0 right-0 h-0.5 top-4 w-full"
        style={{ background: "linear-gradient(to right, #17C54E, #00A7E1, #004876)" }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 md:pt-0">
        {importantDates.map((item, index) => (
          <div key={index} className="group relative md:pt-10 pl-12 md:pl-0">
            <div
              className="
                absolute
                md:left-1/2 md:-translate-x-1/2
                top-2.5  left-[0.6rem]
                w-4 h-4 rounded-full border-2 border-white bg-[#004876] group-hover:scale-125 transition-transform duration-200
              "
            />
            <div className="md:text-center text-left">
              <p className="text-[#00A7E1] text-sm font-semibold mb-1 leading-snug">
                {item.date}
              </p>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ImportantDates;