"use client";

import { Fade } from "react-awesome-reveal";
import React from "react";
import {
  RiSendPlaneFill,
  RiVidiconFill,
  RiVipCrown2Fill,
} from "react-icons/ri"; // Imported icons

const infoData = [
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "3715 350 0914",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "photography@gmail.com",
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "مرکز رشد دانشگاه تبریز",
  },
];

const About = () => {
  return (
    <section className="pb-12 xl:py-24 min-h-screen ">
      <div className="container mx-auto">
        {/* Title */}
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h2 className="font-sarbaz section-title mb-8 xl:mb-16 text-center mx-auto">
            درباره ما
          </h2>
        </Fade>

        <div className="flex flex-col xl:flex-row items-center justify-evenly mx-24">

          {/* Right Section: Content */}
          <div className="flex container ">
            <div className="text-lg mt-12 xl:mt-0">
              <div className="text-center xl:text-right">
                <Fade
                  direction="right"
                  delay={400}
                  cascade
                  damping={0.1}
                  triggerOnce={true}
                ></Fade>

                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={0.1}
                  triggerOnce={true}
                >
                  <p className="font-vazir subtitle max-w-xl mx-auto xl:mx-0">
                    گروه فناوری البرز کاران پویا در سال 1403 تاسیس شد و در حوزه
                    های امنیت شبکه هاب کامپیوتری و هوش مصنوعی و ... فعالیت میکند
                    خوش حال می شویم شما را در کنار خود ببینیم
                  </p>
                </Fade>

                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={0.1}
                  triggerOnce={true}
                >
                  <p className="font-vazir subtitle max-w-xl mx-auto xl:mx-0 mt-4">
                    با مراجعه به ما میتواتیم به شما عزیزان خدمت رسانی بکنیم
                  </p>
                </Fade>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <Fade
                    direction="right"
                    delay={1000}
                    cascade
                    damping={0.1}
                    triggerOnce={true}
                  >
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary rtl">{item.icon}</div>
                          <div className="font-vazir">{item.text}</div>
                        </div>
                      );
                    })}
                  </Fade>
                </div>
              </div>
            </div>
          </div>


          <div className="relative flex-1 flex justify-center xl:justify-start mb-8 xl:mb-0 mt-5">
            <Fade
              direction="left"
              delay={600}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108435.30933939982!2d46.3614977!3d38.0603225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ3JzQyLjAiTiA0NsKwMjknMzMuNCJF!5e0!3m2!1sen!2sau!4v1632748357601!5m2!1sen!2sau"
    className="w-[90%] sm:w-[450px] sm:h-[450px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative rounded-lg shadow-sm"
    allowFullScreen={true}
></iframe>

            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
