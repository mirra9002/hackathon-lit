import { useNavigate } from "react-router-dom";
export default function CardDoor({ title, description, imgSource, handleClick, isActive }) {

  return (
     <div
      onClick={isActive ? handleClick : undefined}
      className={`relative overflow-hidden rounded-2xl shadow-lg transition duration-300 ${
        isActive
          ? "cursor-pointer hover:scale-105"
          : "cursor-not-allowed opacity-60 grayscale"
      }`}
    >
      <img
        src={imgSource}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      {!isActive && (
        <div className="absolute inset-0 bg-gray-400/30 backdrop-blur-[1px] rounded-2xl"></div>
      )}
    </div>
    
  );
}
