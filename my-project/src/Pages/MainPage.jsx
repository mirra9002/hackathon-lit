import CardDoor from '../Components/CardDoor.jsx';
import { quests } from '../data.js';
import paperBg from '../assets/old-paper-bg.jpg';
import paperBg2 from '../assets/paper-bg.jpg';

import kyivskaRus from '../assets/kyivska-rus-main1.png'
import HalKniaz from '../assets/hal-kniaz-main2.png'

export default function MainPage() {

  console.log(window)
  const userWindowWidth = window.outerWidth
  const userWindowHeight = window.outerHeight
  document.body.style.paperBg2
  //e4ccab
  return (
    <div className="min-h-screen w-full bg-[#EEDEC7] overflow-auto text-center"> 

      <h1 className="mb-12 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Квест з історії України
      </h1>

      <div className="relative flex flex-col items-center w-full py-10">
        {/* Центральна вертикальна лінія */}
        <div className="absolute left-1/2 top-0 w-1 bg-[#ac9677] h-full transform -translate-x-1/2"></div>

        {quests.map((quest, index) => (
          <div
            key={index}
            className={`flex w-full md:w-3/4 items-center relative ${
              index % 2 === 0
                ? 'justify-start pr-20 '
                : 'justify-end pl-20 -mt-80'
            }`}
          >
            {/* Горизонтальна лінія */}
            <div
              className={`absolute top-1/2 h-[3px] w-1 bg-[#ac9677] ${
                index % 2 === 0
                  ? 'right-1/2 w-[200px] translate-x-[2px]'
                  : 'left-1/2 w-[200px] -translate-x-[2px]'
              }`}
            ></div>

            {/* Точка на лінії */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#b54405] rounded-full border-4 border-white shadow"></div>

            {/* Картка */}
            <div className="relative w-full md:w-1/2">
              <CardDoor
                title={quest.title}
                description={quest.description}
                imgSource={quest.imageUrl || 'https://picsum.photos/600/400'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
