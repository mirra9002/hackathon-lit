import { useState } from "react";

export default function KyivRus() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-amber-100 overflow-auto flex flex-col items-center">
      {/* Заголовок */}
      <div className="text-center py-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Київська Русь</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Епоха могутніх князів та відважних воїнів, коли формувалася українська державність
        </p>
      </div>

      {/* Тести по черзі */}
      {step === 1 && (
        <HistoryTest
          question="Хто об’єднав Галичину та Волинь у 1199 році?"
          options={["Роман Мстиславич", "Данило Романович", "Юрій-Болеслав", "Казимир III"]}
          correctAnswer="Роман Мстиславич"
          onNext={handleNext}
        />
      )}

      {step === 2 && (
        <HistoryTest
          question="Яка реформа підкреслювала єдність нової держави?"
          options={[
            "Єдині суд і податок",
            "Окремі мита в кожному місті",
            "Запровадження латинського обряду",
            "Відмова від торгівлі з Краковом",
          ]}
          correctAnswer="Єдині суд і податок"
          onNext={handleNext}
        />
      )}

      {step === 3 && (
        <HistoryTest
          question="Чому частина бояр виступала проти Романа?"
          options={[
            "Він скорочував їхні вотчини та вплив",
            "Він відмовився від оборони кордонів",
            "Він підвищив мита для купців",
            "Він переніс столицю до Києва",
          ]}
          correctAnswer="Він скорочував їхні вотчини та вплив"
          onNext={handleNext}
        />
      )}

      {step === 4 && (
        <HistoryTest
          question="Яку позицію щодо віри озвучив Данило, приймаючи корону?"
          options={[
            "Збереження православ’я",
            "Перехід на латинський обряд",
            "Змішаний обряд",
            "Відмова від будь-якого обряду",
          ]}
          correctAnswer="Збереження православ’я"
          onNext={handleNext}
        />
      )}

      {step === 5 && (
        <HistoryTest
          question="Який практичний сенс Данило вбачав у короні?"
          options={[
            "Відкриття дверей для торгів і дипломатії",
            "Лише символічна перемога",
            "Можливість не будувати укріплення",
            "Автоматичний прихід хрестоносців",
          ]}
          correctAnswer="Відкриття дверей для торгів і дипломатії"
          onNext={handleNext}
        />
      )}

      {step === 6 && (
        <HistoryTest
          question="Який головний висновок Данила після відсутності обіцяної допомоги?"
          options={[
            "Спиратися на власні сили",
            "Повернути корону",
            "Залежати від сусідів",
            "Переселити населення на Захід",
          ]}
          correctAnswer="Спиратися на власні сили"
          onNext={handleNext}
        />
      )}

      {step > 6 && (
        <p className="mt-12 text-2xl font-semibold text-gray-800 text-center">
          🎉 Вітаємо! Ви успішно завершили розділ <span className="text-amber-700">«Київська Русь»</span>!
        </p>
      )}
    </div>
  );
}

/* ===============================
   Reusable компонент тесту
   =============================== */
function HistoryTest({ question, options, correctAnswer, onNext }) {
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected === correctAnswer) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  return (
    <div className="mt-6 mb-10 w-[90%] sm:w-[80%] md:w-[60%] bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 text-center">
        {question}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              id={`option-${index}`}
              type="radio"
              value={option}
              name={question}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
              className="w-5 h-5 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
            />
            <label
              htmlFor={`option-${index}`}
              className="ms-3 text-base md:text-lg font-medium text-gray-900"
            >
              {option}
            </label>
          </div>
        ))}

        {/* Кнопка "Відповісти" */}
        <button
          type="submit"
          disabled={!selected}
          className={`mt-6 w-full py-3 rounded-xl font-semibold text-white transition ${
            selected
              ? "bg-amber-600 hover:bg-amber-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Відповісти
        </button>
      </form>

      {/* Результат */}
      {result === "correct" && (
        <div className="text-center mt-6">
          <p className="text-green-600 text-lg font-semibold mb-4">Правильно!</p>
          <button
            onClick={onNext}
            className="px-6 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition font-medium"
          >
            Наступне питання ➜
          </button>
        </div>
      )}
      {result === "wrong" && (
        <p className="mt-6 text-red-600 text-lg font-semibold text-center">
          Неправильно. Спробуйте ще раз!
        </p>
      )}
    </div>
  );
}
