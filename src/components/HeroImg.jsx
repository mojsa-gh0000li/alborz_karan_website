"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroImg = ({ videos, containerStyles }) => {
  const [isMobile, setIsMobile] = useState(false);
  const prevButtonRef = useRef(null); // Reference for previous button
  const nextButtonRef = useRef(null); // Reference for next button

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className={`${containerStyles} relative`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000, // 6 seconds delay
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevButtonRef.current, // Hook up the previous button
          nextEl: nextButtonRef.current, // Hook up the next button
        }}
        onSwiper={(swiper) => {
          // To avoid 'undefined' ref issue
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.update();
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video
              className="w-full h-full object-cover"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons - visible only on desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              ref={nextButtonRef} // Connect this button to Swiper's next action
              className="text-white text-4xl p-4 pt-1 bg-opacity-50 bg-black rounded-full shadow-md"
            >
              &#8250;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              ref={prevButtonRef} // Connect this button to Swiper's previous action
              className="text-white text-4xl p-4 pt-1 bg-opacity-50 bg-black rounded-full shadow-md"
            >
              &#8249;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroImg;

