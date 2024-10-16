"use client";

import { Fade } from "react-awesome-reveal";
import React from "react";
import {
  RiSendPlaneFill,
  RiVidiconFill,
  RiVipCrown2Fill,
} from "react-icons/ri"; // Imported icons

const infoData = [
  // {
  //   icon: <RiSendPlaneFill size={20} />,
  //   text: "3715 350 0914",
  // },
  // {
  //   icon: <RiVidiconFill size={20} />,
  //   text: "photography@gmail.com",
  // },
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
                    گروه فناوری البرز کاران پویا با هدف حضور فعال و موثر در حوزه
                    امنیت شبکه های کامپیوتری تحلیل داده مبتنی بر مدل های محتلف
                    یادگیری در مراکز بزرگ داده و به کار گیری هوش مصنوعی در حوزه
                    شهری و تلفیق فناوری نوین اطلاعات بر پایه تکنولوژی های واقعیت
                    مجازی و افزوده در صنایع و با هم آوایی سه شرکت در حوزه
                    کامپیوتر تشکیل یافته است این گروه برای ایفای هدف تعیین شده
                    با بهرمندی از نیرو های متخصص و خبره و نیز اموزش نیرو های
                    جوان سعی دارد در حوزه پروژه های کلان IT حضور تاثیر گذاری
                    داشته باشد.
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3171.6312242056013!2d46.37242177640003!3d38.05970417161807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a068ec8b0d315%3A0x3c926d7401c8776a!2sUniversity%20of%20Tabriz%20Center%20for%20Growth%20and%20Innovation!5e0!3m2!1sen!2sau!4v1696865358532!5m2!1sen!2sau&q=38.059704,46.372421"
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
