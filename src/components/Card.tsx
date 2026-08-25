import { Car, Bike, MoveRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Card() {

const navigate = useNavigate();
  const cardItems = [
    { 
      name: "Auto",
      icon: (
        <Car className="h-15 w-15 text-blue-600 bg-blue-50 p-2 rounded-full" />
      ),
      description: "Proteje tu auto y viaja tranquilo",
      navigateTo: "/cotizar"
    },
    {
      name: "Moto",
      icon: (
        <Bike className="h-15 w-15 text-blue-600 bg-blue-50 p-2 rounded-full" />
      ),
      description: "Proteje tu moto y disfruta del camino",
      navigateTo: "/seguros/motorbike"
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
          <p className="text-2xl font-bold">{item.name}</p>
          <p className="text-lg text-gray-600">{item.description}</p>
          <MoveRight className="h-6 w-6 text-blue-600 mt-2 mx-auto" />
        </div>
      ))}
    </>
  );
}
