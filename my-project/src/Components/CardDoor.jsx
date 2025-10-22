import { useNavigate } from "react-router-dom";
export default function CardDoor({ title, description, imgSource, handleClick }) {

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className=" bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={imgSource}
        className="w-full h-54 object-cover"
      />
      <div className="p-4">
        <h2 class="text-2xl font-bold p-2">{title}</h2>

        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
     
    </div>
    </div>
    
  );
}
