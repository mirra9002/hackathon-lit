import { useState } from "react";
import mapUa from "../assets/map-ua.png";

export default function MapTest() {
  const [clickPos, setClickPos] = useState(null);
  const [result, setResult] = useState(null);

  // Координати Києва у відсотках від ширини та висоти зображення
  const correctXPercent = 54; // приблизно 54% від лівого краю
  const correctYPercent = 58; // приблизно 58% від верхнього краю
  const tolerance = 6; // допустима похибка у відсотках

  const handleMapClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // 47 
    // 24
    
    setClickPos({ xPercent, yPercent });
    setResult(null);
  };

  const handleSubmit = () => {
    if (!clickPos) return;

    console.log(clickPos)
    const withinX =
        clickPos.xPercent >= 47 - 2 && clickPos.xPercent <= 47 + 5; // tolerance
    const withinY =
        clickPos.yPercent >= 24 - 2 && clickPos.yPercent <= 24 + 5; // 

    console.log(withinX, withinY);

    if (withinX && withinY) {
        setResult("correct");
    } else {
        setResult("wrong");
    }


    // const dx = clickPos.xPercent - correctXPercent;
    // const dy = clickPos.yPercent - correctYPercent;
    // const distance = Math.sqrt(dx * dx + dy * dy);


    // if (distance <= tolerance) {
    //   setResult("correct");
    // } else {
    //   setResult("wrong");
    // }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-amber-100 overflow-auto flex flex-col items-center">
      {/* Заголовок */}
      <div className="text-center py-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Поставити точку на мапі
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Куди плив князь Олег разом з маленьким Ігорем?
        </p>
      </div>

      {/* Карта */}
      <div className="relative w-[90%] sm:w-[80%] md:w-[70%] max-w-3xl mt-4">
        <img
          src={mapUa}
          alt="Мапа України"
          className="w-full rounded-2xl shadow-lg cursor-crosshair select-none"
          onClick={handleMapClick}
        />

        {/* Позначка кліку */}
        {clickPos && (
          <div
            className="absolute w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-md"
            style={{
              left: `${clickPos.xPercent}%`,
              top: `${clickPos.yPercent}%`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
      </div>

      {/* Кнопка */}
      <button
        onClick={handleSubmit}
        disabled={!clickPos}
        className={`mt-8 mb-6 px-8 py-3 rounded-xl font-semibold text-white transition ${
          clickPos
            ? "bg-amber-600 hover:bg-amber-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Відповісти
      </button>

      {/* Результат */}
      {result === "correct" && (
        <p className="text-green-600 text-lg font-semibold mb-10">
          Правильно! Це Київ.
        </p>
      )}
      {result === "wrong" && (
        <p className="text-red-600 text-lg font-semibold mb-10">
          Неправильно. Спробуйте ще раз!
        </p>
      )}
    </div>
  );
}
