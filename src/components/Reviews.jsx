"use client";

import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  Card,
  CardHeader,
} from "@/components/ui/card";

const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        name: "اقتصاد هوشمند",
        img: "/hci3.png",
        desc: "Smart Economy",
      },
      {
        name: "آموزش هوشمند ",
        img: "/AR.png",
        desc: "Smart Education",
      },
      {
        name: "حکمروایی هوشمند",
        img: "/smart-city2.jpg",
        desc: "Smart Governance",
      },
      {
        name: "تحرک هوشمند",
        img: "/smart-city2.jpg",
        desc: "Smart Mobility",
      },
      {
        name: " زندگی هوشمند " ,
        img: "/smart-city2.jpg",
        desc: "Smart Living",
      },
      {
        name: "محیط هوشمند",
        img: "/smart-city2.jpg",
        desc: "Smart Environment",
      },
      {
        name: "مراقبت های بهداشتی هوشمند",
        img: "/smart-city2.jpg",
        desc: "Smart Healthcare",
      },
    ]);
  }, []);

  return (
    <section className="mb-12 xl:mb-32 mt-36  xl:mt-48">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="font-sarbaz section-title mb-12 text-center mx-auto">
            فعالیت‌های ما
          </h2>
        </Fade>

        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              700: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={1}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000, // Time in milliseconds before switching to the next slide
              disableOnInteraction: false, // Keep autoplay even after interaction
            }}
            loop={true}
          >
            {data.map((project, index) => (
              <SwiperSlide key={index}
              style={{
                marginRight:"2px",
                marginLeft :"2px",
              }}
              className="mr-5">
                <Card className="group overflow-hidden relative">
                  <CardHeader className="p-0 space-x-0 space-y-0">
                    <div
                      className="relative w-full h-[200px] flex items-center justify-center dark:bg-secondary/40
                      xl:bg-[100%] xl:bg-no-repeat overflow-hidden"
                    >
                      <Image
                        src={project.img}
                        width={490}
                        height={200}
                        alt={project.name}
                        priority
                        className="absolute top-0 shadow-2xl hover:scale-110 transition-all"
                      />
                    </div>
                  </CardHeader>

                  <div className="p-5">
                    <h4 className="h4 mb-1 font-vazir text-center">
                      {project.name}
                    </h4>
                    <p className="font-vazir text-muted-foreground text-lg font-vazir text-center my-3">
                      {project.desc}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className='swiper-pagination mt-10'></div>
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default Reviews;
