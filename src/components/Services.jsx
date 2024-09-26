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
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

const servicesData = [
  {
    image: "/icon/icon9.png", // Replace this with your actual image path
    title: "امنیت",
    description: "تیم البرز کاران میتواند شما را در حوزه امنیت همراهی کند",
  },
  {
    image: "/icon/icon2.png", // Replace this with your actual image path
    title: "هوش مصنوعی",
    description:
      "گروه فناوری البرز کاران با داشتن تیمی متخصص در حوزه هوش مصنوعی میتواند پروژه ها را پیش ببرد",
  },
  {
    image: "/icon/icon3.png", // Replace this with your actual image path
    title: "واقعیت مجازی",
    description:
      "تیم گروه فناوری البرز در حوزه عینک‌های واقعیت مجازی متخصص است",
  },
  {
    image: "/icon/icon6.png", // Replace this with your actual image path
    title: "علوم داده",
    description: "تیم البرز کاران میتواند شما را در حوزه امنیت همراهی کند",
  },
  {
    image: "/icon/icon8.png", // Replace this with your actual image path
    title: " شبکه",
    description:
      "گروه فناوری البرز کاران با داشتن تیمی متخصص در حوزه هوش مصنوعی میتواند پروژه ها را پیش ببرد",
  },
  {
    image: "/icon/icon3.png", // Replace this with your actual image path
    title: "واقعیت مجازی",
    description:
      "تیم گروه فناوری البرز در حوزه عینک‌های واقعیت مجازی متخصص است",
  },
];

const Services = () => {
  const [cards1, setCards] = useState([]);
  const router = useRouter(); // Initialize useRouter

  function get() {
    fetch("http://127.0.0.1:5000/api/cards", {
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
    router.push(`/services1/${slug}`); // Navigate to the slug page
  };

  return (
    <section className="mb-12 xl:mb-36 rtl">
      <div className="container mx-auto rtl">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="font-sarbaz section-title mb-6 xl:mb-12 text-center mx-auto">
            خدمات ما
          </h2>
        </Fade>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center gap-y-12 xl:gap-y-12 xl:gap-x-8 md:gap-x-8">
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
            {servicesData.map((item, index) => (
              <Card
                key={index}
                className="relative w-full max-w-[425px] h-[245px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700"
                onClick={() => handleCardClick(item.slug)} // Handle card click
              >
                <CardHeader className="text-primary">
                  <div className="w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center absolute -bottom-5 right-6 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="rounded-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 font-sarbaz">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="font-vazir text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Services;
