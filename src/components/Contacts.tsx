import { Mail, MapPin } from "lucide-react";

const Contacts = () => (
  <div id="contacts" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
    <h2 className="text-2xl md:text-4xl font-black text-[#1E1933] tracking-tight mb-8">
      КОНТАКТЫ
    </h2>

    <div className="flex flex-col md:flex-row gap-4 mb-5">
      {/* Email */}
      <a
        href="mailto:vcw@ssau.ru"
        className="flex-1 bg-white rounded-2xl p-5 flex items-center gap-4 group transition-all duration-200 hover:shadow-md"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00A7E1]"
          style={{ background: "#00A7E118" }}
        >
          <Mail
            className="w-5 h-5 transition-colors group-hover:text-white"
            style={{ color: "#00A7E1" }}
          />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
            Почта
          </div>
          <div className="font-bold text-[#1E1933] group-hover:text-[#00A7E1] transition-colors">
            vcw@ssau.ru
          </div>
        </div>
      </a>

      {/* Address */}
      <div
        className="flex-1 bg-white rounded-lg p-5 flex items-center gap-4"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "#17C54E18" }}
        >
          <MapPin className="w-5 h-5" style={{ color: "#17C54E" }} />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
            Адрес
          </div>
          <div className="font-bold text-[#1E1933]">г. Самара</div>
          <div className="text-sm text-gray-500">Студенческий переулок, 8</div>
        </div>
      </div>
    </div>

    {/* Map */}
    <div
      className="w-full rounded-lg overflow-hidden"
      style={{ height: "320px", boxShadow: "0 1px 8px rgba(0,0,0,0.1)" }}
    >
      <iframe
        title="Карта расположения конференции"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A223ceca6596dff3653bb9c878f5fc65d32aff316f9684f188e19fe128ff4bd72&source=constructor"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
      />
    </div>
  </div>
);

export default Contacts;