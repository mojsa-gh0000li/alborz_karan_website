"use client";

import { useState, useEffect } from "react";

const HeroImg = ({ videos, containerStyles }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // تشخیص دستگاه موبایل یا دسکتاپ
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  // تغییر ویدیو به صورت خودکار در موبایل
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(handleNext, 5000); // هر ۵ ثانیه تغییر ویدیو
      return () => clearInterval(interval); // پاک کردن تایمر هنگام تغییر سایز صفحه
    }
  }, [isMobile]);

  return (
    <div className={`${containerStyles} relative`}>
      <video
        className="w-full h-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        loop
        muted
        playsInline
      />
      {!isMobile && (
        <>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={handleNext} 
              className="text-white text-4xl p-4 bg-opacity-50 bg-black rounded-full shadow-md"
            >
              &#8250;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={handlePrev}  
              className="text-white text-4xl p-4 bg-opacity-50 bg-black rounded-full shadow-md"
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

