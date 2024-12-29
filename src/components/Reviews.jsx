"use client";

import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  Autoplay,
 
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Reviews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://194.5.188.17:3002/api/sliders"); // Update with your API endpoint
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
    <div className="bg-transparent py-16 mx-10">

      
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <div className="flex items-center justify-center mb-5">
            {/* Left Green Line */}
            <div className="w-1/6 md:w-1/3 h-0.5 bg-green-400" />
            <div className="mx-8 font-sarbaz  text-2xl md:text-5xl font-extrabold -translate-x-2 text-blue-500">
                 فعالیت های ما
            </div>
            {/* Right Green Line */}
            <div className="w-1/6 md:w-1/3 h-0.5 bg-green-400" />
          </div>
        </Fade>

        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
          <Swiper
            grabCursor={true}
            
            slidesPerView={1}
            spaceBetween={2}
            
            breakpoints={{
              440: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
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
              <SwiperSlide key={index} >
                <div className="flex flex-col my-16 mx-auto w-60  h-80 bg-[#000080] items-center border-2 border-[#000080] rounded-lg p-4 transition-shadow">
                    <img
                        src={`http://194.5.188.17:3002/static/uploads/sliders/${project.image_path}`} // Ensure this matches your API response
                        alt={project.title}
                        className="w-52 h-40 object-contain rounded-2xl bg-white"
                      />
                    <div className="border-b-2 border-white mt-2 w-full h-2"></div>
                  
                    <h3 className="text-center font-vazir  mt-2  font-medium text-md text-lime-400">
                      {project.title}
                    </h3>
                    <p className="font-vazir text-white py-1 text-center  text-xs sm:text-sm">
                      {project.url}
                    </p>
                  
                </div>
              </SwiperSlide>
            ))}
          
          </Swiper>
        </Fade>
      </div>
    
  );
};

export default Reviews;









