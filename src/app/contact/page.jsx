"use client";

import { Fade } from "react-awesome-reveal";
import Form from "@/components/Form";

const Contact = () => {  
  return (
    <section className="min-h-screen py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
          {/* Left Content */}
          <div className="flex-1 mb-12 lg:mb-0 lg:mr-8">
            <Fade
              direction="left"
              delay={400}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="font-sarbaz w-[30px] h-[2px] bg-primary"></span>
                ارتباط با گروه فناوری البرز کاران پویا
              </div>
            </Fade>

            <Fade
              direction="left"
              delay={600}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <h1 className="font-sarbaz text-3xl lg:text-4xl font-bold max-w-md mb-8">
                در کنار شما هستیم
              </h1>
            </Fade>

            <Fade
              direction="left"
              delay={800}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <p className="font-vazir text-lg max-w-md">
                برای ارتباط با ما و دریافت مشاوره در حوزه های مختلف فرم را پر
                کنید
              </p>
            </Fade>

            {/* <Fade
              direction="left"
              delay={1000}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <p className="font-vazir text-lg max-w-md">
                گروه فناوری البرز کاران پویابا هدفحضور فعال و موثر درحوزهامنیتشبکههای کامپیوتری،تحلیل دادهمبتنی
برمدل های مختلفیادگیریدرمراکز بزرگ داده،بکارگیریهوش مصنوعیدر حوزه شهریوتلفیق فناوری
نویناطالعاتبر پایهتکنولوژیهایواقعیت مجازیوافزودهدر صنایع،باهم آواییسه شرکتدر حوزه کامپیوتر
تشکیل یافته است.این گروهبرایایفای هدف تعیین شده،با بهره مندی از نیروهای متخصص و خبرهونیز
آموزشنیرویهایجوان،سعیدارد کهدرحوزهپروژههایکالنITحضور تاثیر گذاریداشته باشد.
              </p>
            </Fade> */}
          </div>

          {/* Right Content: Form */}
          <div className="flex-1 w-full lg:w-auto lg:max-w-md lg:ml-auto">
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <div className="bg-white p-6 shadow-md rounded-lg">
                <Form />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
