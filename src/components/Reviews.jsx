"use client";

import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardHeader } from "@/components/ui/card";


const Reviews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://194.5.188.17/api/sliders"); // Update with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Adjust based on the structure of your API response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading state
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Error state
  }

  return (
    <section className="mb-12 xl:mb-32 mt-36 xl:mt-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="font-sarbaz section-title mb-12 text-center mx-auto text-2xl sm:text-3xl lg:text-4xl">
            فعالیت‌های ما
          </h2>
        </Fade>

        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={0}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
              768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
              1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000, // Time in milliseconds before switching to the next slide
              disableOnInteraction: false, // Keep autoplay even after interaction
            }}
            loop={true}
          >
            {data.map((project, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <Card className="group overflow-hidden relative">
                  <CardHeader className="p-0 space-x-0 space-y-0">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] flex items-center justify-center dark:bg-secondary/40 overflow-hidden">
                      <img
                        src={`http://194.5.188.17:3001/static/uploads/sliders/${project.image_path}`} // Ensure this matches your API response
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover shadow-2xl transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CardHeader>

                  <div className="p-5">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-vazir text-center mb-1">
                      {project.title}
                    </h4>
                    <p className="font-vazir text-muted-foreground text-center my-3 text-sm sm:text-base">
                      {project.url}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-10"></div>
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default Reviews;

