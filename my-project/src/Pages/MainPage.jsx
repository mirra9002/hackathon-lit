import CardDoor from '../Components/CardDoor.jsx';
import { quests } from '../data.js';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate()
  const navigationQuestMap = {
    "Київська Русь": "https://history-quest-kr.web.app", 
    "Галицько-Волинське князівство": 'https://history-quest-gvk.web.app', 
    "Козацька доба": 'https://history-quest-kd.web.app',
    'Розквіт писемництва XVIII ст.': "/rozkvit-pysmennytstva",
    "Друга світова війна": '/druha-svitova-viyna',
    "Незалежність України": '/nezaleznist-ukrainy'
  }
  function navigateToQuest(questTitle) {

    console.log(questTitle)
    const navigationLocation = navigationQuestMap[questTitle]
    console.log(navigationLocation)
    open(navigationLocation)
  }
  return (
    <div className="min-h-screen w-full bg-[#EEDEC7] overflow-auto text-center"> 

      <h1 className="mb-12 mt-8 mx-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Квест з історії України
      </h1>

      
      <p class="mb-6 text-lg mx-12 text-center rtl:text-right text-gray-700">
        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
        </p>

      <h2 className="mb-12 mt-8 mx-4 text-4xl font-bold leading-none tracking-tight text-gray-900">
          Теми
      </h2>

      <div className="relative flex flex-col items-center w-full py-10">
        {/* Центральна вертикальна лінія */}
        <div className="absolute left-1/2 top-0 w-1 bg-[#ac9677] h-full transform -translate-x-1/2"></div>

        {quests.map((quest, index) => (
          <div
            key={index}
            className={`flex w-full md:w-3/4 items-center relative mb-8 md:mb-0 ${
              index % 2 === 0
                ? 'md:justify-start md:pr-20'
                : 'md:justify-end md:pl-20'
            }`}
          >
            {/* Горизонтальна лінія */}
            <div
              className={`hidden md:block absolute top-1/2 h-[3px] w-1 bg-[#ac9677] ${
                index % 2 === 0
                  ? 'right-1/2 w-[200px] translate-x-[2px]'
                  : 'left-1/2 w-[200px] -translate-x-[2px]'
              }`}
            ></div>

            {/* Точка на лінії */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#b54405] rounded-full border-4 border-white shadow"></div>

            {/* Картка */}
            <div className="relative w-full px-4 md:w-1/2">
              <CardDoor
                title={quest.title}
                description={quest.description}
                imgSource={quest.imageUrl || 'https://picsum.photos/600/400'}
                isActive={quest.isActive}
                handleClick={() => navigateToQuest(quest.title)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
