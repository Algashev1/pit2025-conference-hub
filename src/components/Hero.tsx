const Hero = () => (
    <>
        {/* Hero card */}
        <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div
                    className="bg-white rounded-lg overflow-hidden"
                    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.09)" }}
                >
                    <div className="md:flex">
                        {/* Слева Заголовок */}
                        <div className="md:w-[42%] flex flex-col justify-between p-8 pb-6">
                            <h1
                                className="font-black text-[#1E1933] leading-[0.92] select-none"
                                style={{ fontSize: "clamp(3.2rem, 7vw, 5.2rem)", letterSpacing: "-0.02em" }}
                            >
                                VOLGA
                                <br />
                                <span style={{ color: "#00A7E1" }}>CYBER</span>
                                <br />
                                WEEK
                            </h1>

                            <div className="mt-6 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                                    style={{ background: "#17C54E18", color: "#0e8c36" }}
                                >
                                    12–15 мая 2026
                                </span>
                                <span
                                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                                    style={{ background: "#00A7E118", color: "#0076a3" }}
                                >
                                    Самара
                                </span>
                            </div>

                            <p className="mt-5 text-sm text-gray-500 leading-relaxed border-l-2 pl-3" style={{ borderColor: "#00A7E1" }}>
                                II Всероссийская
                                молодежная научно-практическая конференция по информатике и кибернетике «Volga Cyber Week»
                            </p>
                        </div>

                        {/* Справа фото */}
                        <div className="md:w-[58%] relative" style={{ minHeight: "340px" }}>
                            <img
                                src="1.png"
                                alt="Фотография конференции"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-y-0 left-0 w-16 hidden md:block"
                                style={{ background: "linear-gradient(to right, white, transparent)" }}
                            />
                            <div
                                className="absolute inset-y-0 left-0 w-full h-1/2 md:hidden"
                                style={{ background: "linear-gradient(to bottom, white, transparent)" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Stats bar */}
        <div
            className="mt-6 py-5"
            style={{ background: "linear-gradient(90deg, #17C54E 0%, #00A7E1 50%, #004876 100%)" }}
        >
            <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 text-white text-center gap-y-3 sm:gap-y-0">
                <div className="sm:border-r sm:border-white/25 px-4">
                    <div className="text-[11px] font-semibold uppercase tracking-widest opacity-70 mb-1">Место проведения</div>
                    <div className="font-bold text-base">г. Самара</div>
                    <div className="text-xs opacity-80 mt-0.5">Студенческий переулок, 8</div>
                </div>
                <div className="sm:border-r sm:border-white/25 px-4">
                    <div className="text-[11px] font-semibold uppercase tracking-widest opacity-70 mb-1">Приём материалов продлен до</div>
                    <div className="font-bold text-base">5 апреля 2026 г.</div>
                </div>
                <div className="px-4">
                    <div className="text-[11px] font-semibold uppercase tracking-widest opacity-70 mb-1">Даты конференции</div>
                    <div className="font-bold text-base">12–15 мая 2026 г.</div>
                </div>
            </div>
        </div>
    </>
);

export default Hero;