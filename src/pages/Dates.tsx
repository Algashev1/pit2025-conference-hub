const Dates = () => {
  const dates = [
    {
      event: "Начало приёма материалов доклада",
      date: "1 января, 2025",
    },
    {
      event: "Окончание приёма материалов доклада",
      date: "1 февраля, 2025",
    },
    {
      event: "Объявление списка рекомендованных к публикации тезисов статей",
      date: "20 февраля, 2025",
    },
    {
      event: "Проведение конференции",
      date: "10-12 марта, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 sm:mb-12 text-center">
          Важные даты
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-4 md:left-1/2 h-full w-0.5 bg-accent/20"
              style={{ transform: 'translateX(-50%)' }}
            ></div>

            {/* Timeline events */}
            {dates.map((item, index) => (
              <div
                key={item.event}
                className="relative flex items-start mb-8 sm:mb-12 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex flex-col md:flex-row items-start w-full pl-12 md:pl-0">
                  {/* Date */}
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-2 md:mb-0">
                    <div className="font-semibold text-base sm:text-lg text-accent">
                      {item.date}
                    </div>
                  </div>

                  {/* Dot */}
                  <div 
                    className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full"
                    style={{ transform: 'translateX(-50%)', marginTop: '6px' }}
                  ></div>

                  {/* Event */}
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-medium text-primary text-sm sm:text-base">
                        {item.event}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;