"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Services() {
  const [cards, setCards] = useState([]);
  const router = useRouter();

  // تابع برای دریافت داده‌ها
  function get() {
    fetch("http://194.5.188.17:3002/api/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        console.log(res);
        setCards(res);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    get();
  }, []);

  // مدیریت کلیک روی کارت‌ها
  const handleCardClick = (slug) => {
    router.push(`/services1/${slug}`);
  };

  return (
    <div className="bg-blue-900 text-white py-16 px-4">
      <div className="flex items-center justify-center mb-5 ">
        {/* Left Green Line */}
        <div className="w-1/4 md:w-5/12 h-0.5 bg-green-400" />
        <div className="mx-8 font-sarbaz text-2xl md:text-5xl font-extrabold -translate-x-2  text-white">
          خدمات ما
        </div>
        {/* Right Green Line */}
        <div className="w-1/4 md:w-5/12 h-0.5 bg-green-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative border-2 border-white rounded-ss-3xl pb-4 pe-4 ps-3 cursor-pointer transition"
          >
            {/* متن با زمینه متفاوت */}
            <div className="absolute -top-5 right-1/5 bg-blue-900 px-1">
              <h3 className="text-2xl font-vazir font-bold text-lime-400">{card.title}</h3>
            </div>
            <p className="mt-8 font-vazir">
              {card.description}
              <a 
                onClick={() => handleCardClick(card.slug)} 
                className="font-vazir inline-block mt-2 mr-1 text-lime-400 font-bold transition-all duration-300 hover:text-lime-500 hover:underline hover:scale-105"
              >
                بیشتر بدانید...
              </a>
            </p>

            
            
            
          </div>
        ))}
      </div>
    </div>
  );
}



