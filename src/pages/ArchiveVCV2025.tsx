import { useEffect } from "react";
const ArchiveVCV2025 = () => {
 useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
 return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">Архив</h1>
      <p className="text-gray-700 mb-6 text-center">
        Здесь будут размещены все архивные материалы.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Пример карточек архивных материалов */}
        <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
          <h2 className="font-medium text-xl mb-2">Документ 1</h2>
          <p className="text-gray-600 text-sm">Описание документа.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
          <h2 className="font-medium text-xl mb-2">Документ 2</h2>
          <p className="text-gray-600 text-sm">Описание документа.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
          <h2 className="font-medium text-xl mb-2">Документ 3</h2>
          <p className="text-gray-600 text-sm">Описание документа.</p>
        </div>
      </div>
    </div>
  );
};
export default ArchiveVCV2025