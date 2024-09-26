"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // اصلاح نام به accordion

const Fag = () => {
  return (
    <section>
      <div className="container mx-auto rtl">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <h2 className="font-sarbaz section-title mb-12 text-center mx-auto">
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
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="ms-3 font-sarbaz">
                    چه خدماتی در زمینه IT ارائه می‌دهید؟                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-vazir">
                  ما مجموعه‌ای از خدمات IT شامل توسعه نرم‌افزار، مدیریت زیرساخت‌های فناوری اطلاعات، مشاوره در حوزه امنیت سایبری و پیاده‌سازی راهکارهای شبکه را ارائه می‌دهیم.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2 ">
                  <AccordionTrigger>
                    <div className="ms-3 font-sarbaz">
                    چگونه می‌توانم پروژه IT خود را با شما آغاز کنم؟  
                    </div>{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-vazir">
                    برای شروع، شما می‌توانید با تیم ما تماس بگیرید یا از طریق فرم تماس در وب‌سایت ما درخواست خود را ثبت کنید. پس از آن، تیم ما با شما در تماس خواهد بود تا نیازهای دقیق شما را بررسی کند.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="ms-3 font-sarbaz">
                    چگونه می‌توانم از امنیت داده‌هایم اطمینان حاصل کنم؟                    </div>{" "}
                  </AccordionTrigger>
                  <AccordionContent className="font-vazir">
                  ا از به‌روزترین تکنولوژی‌ها و پروتکل‌های امنیتی استفاده می‌کنیم تا از اطلاعات شما در برابر تهدیدات سایبری محافظت کنیم. همچنین، مشاوره‌های امنیتی برای افزایش سطح امنیت سازمان شما ارائه می‌دهیم.
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