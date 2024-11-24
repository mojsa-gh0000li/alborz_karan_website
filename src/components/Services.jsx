"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Services = () => {
  const [cards1, setCards] = useState([]);
  const router = useRouter();

  function get() {
    fetch("http://194.5.188.17/api/cards", {
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

  const handleCardClick = (slug) => {
    router.push(`/services1/${slug}`);
  };

  return (
    <section className="mb-12 xl:mb-36 rtl bg-blue-900 text-white py-16">
      <div className="container mx-auto rtl">
        <div className="flex items-center justify-center mb-12">
          {/* Left Green Line */}
          <div className="flex-1 h-0.5 bg-green-400" />

          {/* Centered Header Text */}
          <h2 className="font-sarbaz text-3xl xl:text-4xl text-center mx-4 text-green-400 whitespace-nowrap">
            خدمات ما
          </h2>

          {/* Right Green Line */}
          <div className="flex-1 h-0.5 bg-green-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards1.map((item, index) => (
            <div
              key={index}
              className="bg-blue-800 border border-green-400 rounded-lg p-6 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick(item.slug)}
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-700 rounded-full flex justify-center items-center overflow-hidden">
                  <img
                    src={`http://194.5.188.17:3001${item.photo}`}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-400">
                  {item.title}
                </h3>
              </div>
              <p className="text-center text-white">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
