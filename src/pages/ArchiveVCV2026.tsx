import { useEffect } from "react";
import Carousel from "@/components/Carousel";

const ArchiveVCV2026 = () => {

  const galleryImages = [
    "photo_vcw_2026/IMG_9071.jpg",
    "photo_vcw_2026/vcw_day1-30.jpg",
    "photo_vcw_2026/vcw_day1-34.jpg",
    "photo_vcw_2026/vcw_day1-54.jpg",
    "photo_vcw_2026/vcw_day2-1.jpg",
    "photo_vcw_2026/vcw_day2-4.jpg",
    "photo_vcw_2026/vcw_day2-13.jpg",
    "photo_vcw_2026/vcw_day2-41.jpg",
    "photo_vcw_2026/vcw_day2-60.jpg",
    "photo_vcw_2026/vcw_day2-66.jpg",
    "photo_vcw_2026/vcw_day2-90.jpg",
    "photo_vcw_2026/vcw_day2-91.jpg",
    "photo_vcw_2026/vcw_day3-2.jpg",
    "photo_vcw_2026/vcw_day3-14.jpg",
    "photo_vcw_2026/vcw_day3-64.jpg",
    "photo_vcw_2026/vcw_day3-70.jpg",
    "photo_vcw_2026/vcw_day3-126.jpg",
    "photo_vcw_2026/vcw_day3-139.jpg",
    "photo_vcw_2026/vcw_day3-147.jpg",
    "photo_vcw_2026/vcw_day3-148.jpg",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
          VOLGA CYBER WEEK 2026
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl text-center">
          II Всероссийская молодежная научно-практическая конференция по информатике и кибернетике
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          О КОНФЕРЕНЦИИ
        </h2>

        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-4 text-gray-700">
          <p>
            II Всероссийская молодежная научно-практическая конференция по информатике и кибернетике Volga Cyber Week (VCW-2026) прошла с 12 по 14 мая 2026 года на базе 1 корпуса Самарского университета. Мероприятие объединило студентов, аспирантов и молодых ученых из разных регионов России, став площадкой для обсуждения актуальных научных и технологических направлений.
          </p>
          <p>
            В рамках конференции было представлено 2 пленарных и 116 секционных докладов. Работа велась по семи научным секциям, охватывающим широкий спектр современных исследований: от компьютерной оптики и фотоники до искусственного интеллекта, наук о данных и информационной безопасности.
          </p>
          <p>
            География участников охватила более 10 городов России, включая Самару, Москву, Санкт-Петербург, Саратов, Казань, Уфу, Ульяновск, Ставрополь, Краснодар, Новосибирск, Екатеринбург и Белгород.
          </p>
          <p>
            Конференция была проведена при поддержке индустриальных партнеров — компании Т1 и ООО «ИТ-Сервис».
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-8">
          ГАЛЕРЕЯ
        </h2>

        <Carousel images={galleryImages} className="mb-6" />

        <p className="text-center text-gray-700 mt-6">
          Все фотографии с конференции можно посмотреть{" "}
          <a
            href="https://drive.google.com/drive/folders/1vzII3Q_j3HnrhWOgThpMH2BYSUmbq4Ud?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A7E1] hover:underline font-medium"
          >
            тут
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default ArchiveVCV2026;
