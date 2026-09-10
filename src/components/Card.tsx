import { Car, Bike, MoveRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Card() {

const navigate = useNavigate();
  const cardItems = [
    { 
      name: "Auto",
      icon: (
        <Car className="h-20 w-20 text-blue-600" />
      ),
      description: "Proteje tu auto y viaja tranquilo",
      navigateTo: "/cotizar"
    },
    {
      name: "Moto",
      icon: (
        <Bike className="h-20 w-20 text-blue-600" />
      ),
      description: "Proteje tu moto y disfruta del camino",
      navigateTo: "/cotizar"
    },
  ];

  return (
    <>
      {cardItems.map((item, index) => (
        <div
          key={index}
          className="text-center shadow-xl/30 rounded-xl w-72 m-2 p-5 bg-base-100  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={() => navigate(item.navigateTo)}
        >
          <div className="flex justify-center items-center">{item.icon}</div>
          <p className="text-2xl font-bold text-brand-blue">{item.name}</p>
          <p className="text-lg text-brand-blue">{item.description}</p>
          <MoveRight className="h-6 w-6 text-brand-blue mt-2 mx-auto" />
        </div>
      ))}
    </>
  );
}
