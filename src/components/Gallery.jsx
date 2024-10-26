"use client";

import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Import Next.js Link component
import { FaLink } from "react-icons/fa"; // Import the link icon (from FontAwesome)
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles

const Gallery = () => {
  const [cards1, setCards] = useState([]);
  const prevButtonRef = useRef(null); // Reference for previous button
  const nextButtonRef = useRef(null); // Reference for next button

  // Fetch galleries from the API
  const getGalleries = async () => {
    try {
      const response = await fetch("http://194.5.188.17/api/galleries", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      setCards(res);
      console.log(res)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getGalleries();
  }, []);

  return (
    <section className="relative mb-12 xl:mb-36 rtl">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="font-sarbaz section-title mb-8 xl:mb-16 text-center text-[1.25rem] font-bold text-gray-900 mx-auto tracking-[1px]">
            شرکت هایی که با ما همکاری کردند
          </h2>
        </Fade>

        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
          {cards1.length === 0 ? ( // Check if there are any cards
            <div className="text-center text-gray-600">Loading galleries...</div>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={1} // Show 1 slide on small screens
              autoplay={{
                delay: 1000, // 5 seconds delay
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 }, // Show 2 slides on small screens
                768: { slidesPerView: 4 }, // Show 4 slides on medium screens
                1024: { slidesPerView: 5 }, // Show 5 slides on larger screens
                1280: { slidesPerView: 6 }, // Show 6 slides on extra large screens
              }}
              loop={true} // Enable looping
              pagination={{ clickable: true }} // Enable pagination
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
              modules={[Autoplay, Pagination, Navigation]} // Import Swiper modules
              className="gallery-swiper"
            >
              {cards1.map((gallery) => (
                <SwiperSlide key={gallery.id}>
                  <div className="relative max-w-xs mx-auto rounded-lg overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <Link href={`/gallary/${gallery.slug}`} passHref>
                      <div className="block h-full">
                        <img
                          src={`${gallery.image_path.replace(/\\/g, "/").replace("http://194.5.188.17", "http://194.5.188.17:3001")}`} // Ensure backslashes are replaced with forward slashes  
                          alt={gallery.title}
                          className="aspect-square w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gray-300 opacity-0 hover:opacity-80 flex justify-center items-center flex-col transition-opacity duration-300 ease-in-out">
                          <FaLink className="text-white text-3xl" />
                          <div className="text-white text-md drop-shadow-lg">{gallery.title}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          
          {/* Custom navigation buttons - visible only on desktop */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
           <button
              ref={nextButtonRef} // Connect this button to Swiper's next action
              aria-label="Next Slide" // Accessibility
              className="text-white text-4xl p-4 pt-1 bg-opacity-50 bg-black rounded-full shadow-md"
            >
              &#8250;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
             
            <button
              ref={prevButtonRef} // Connect this button to Swiper's previous action
              aria-label="Previous Slide" // Accessibility
              className="text-white text-4xl p-4 pt-1 bg-opacity-50 bg-black rounded-full shadow-md"
            >
              &#8249;
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Gallery;


