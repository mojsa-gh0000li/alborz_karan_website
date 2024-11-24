"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Fag = () => {
  return (
    <section className="py-8 bg-blue-50">
      <div className="container mx-auto rtl">
        <div className="w-full pt-6 mb-6 xl:mb-12">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <h2 className="font-sarbaz text-2xl xl:text-3xl mb-6 text-center text-blue-700">
              سوالات متداول
            </h2>
          </Fade>

          <div>
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {/* First Accordion Item */}
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="ms-3 font-sarbaz text-base text-blue-800 hover:text-blue-600">
                      چه خدماتی در زمینه IT ارائه می‌دهید؟
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-vazir text-sm bg-white rounded-md p-3 shadow-md text-gray-600 leading-relaxed">
                    ما مجموعه‌ای از خدمات IT شامل توسعه نرم‌افزار، مدیریت
                    زیرساخت‌های فناوری اطلاعات، مشاوره در حوزه امنیت سایبری و
                    پیاده‌سازی راهکارهای شبکه را ارائه می‌دهیم.
                  </AccordionContent>
                </AccordionItem>

                {/* Second Accordion Item */}
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="ms-3 font-sarbaz text-base text-blue-800 hover:text-blue-600">
                      چگونه می‌توانم پروژه IT خود را با شما آغاز کنم؟
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-vazir text-sm bg-white rounded-md p-3 shadow-md text-gray-600 leading-relaxed">
                    برای شروع، شما می‌توانید با تیم ما تماس بگیرید یا از طریق
                    فرم تماس در وب‌سایت ما درخواست خود را ثبت کنید. پس از آن،
                    تیم ما با شما در تماس خواهد بود تا نیازهای دقیق شما را بررسی
                    کند.
                  </AccordionContent>
                </AccordionItem>

                {/* Third Accordion Item */}
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="ms-3 font-sarbaz text-base text-blue-800 hover:text-blue-600">
                      چگونه می‌توانم از امنیت داده‌هایم اطمینان حاصل کنم؟
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-vazir text-sm bg-white rounded-md p-3 shadow-md text-gray-600 leading-relaxed">
                    از به‌روزترین تکنولوژی‌ها و پروتکل‌های امنیتی استفاده
                    می‌کنیم تا از اطلاعات شما در برابر تهدیدات سایبری محافظت
                    کنیم. همچنین، مشاوره‌های امنیتی برای افزایش سطح امنیت سازمان
                    شما ارائه می‌دهیم.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fag;
