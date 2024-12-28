"use client";

import { Fade } from "react-awesome-reveal";

import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-[ md:rounded-t-full py-12 ">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-between">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <Socials
              containerStyles="flex flex-row gap-x-4 mx-auto xl:mx-0 mb-4"
              iconStyles="text-white text-[20px] transitions-all hover:text-white dark:hover:text-primary dark:text-white/70"
            />
            {/* <Socials
            containerStyle="flex flex-row gap-x-6 "
            iconStyle="text-white text-[20px] transitions-all hover:text-white dark:hover:text-primary dark:text-white/70"
          /> */}
          </Fade>

          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className="text-white flex flex-col text-center font-vazir">
              حقوق محتوای تمام صفحات (متون، تصاویر، فایل‌های ویدئویی) محفوظ است
              و کپی‌برداری از آنها بدون ذکر نام گروه فناوری البرز کاران پویا
              مجاز نمی باشد.
            </div>
          </Fade>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
