"use client";

import { Fade } from "react-awesome-reveal";

const features = [
  {
    name: "تعامل انسان و کامپیوتر",
    description:
      "تعامل انسان و کامپیوتر یک زمینه بین رشته‌ای است که بر مطالعه، طراحی، اجرا و ارز یابی تعاملات بین کاربران انسانی و سیستم‌های کامپیوتری تمرکز دارد.",
    icon: "/work/interactive.png",
  },
  {
    name: "هوش مصنوعی",
    description:
      "فناوری مبتنی بر هوش مصنوعی به طور گسترده در توسعه بیشتر اجزای یک شهر هوشمند استفاده می‌شود.",
    icon: "/work/brain.png",
  },
  {
    name: "واقعیت مجازی",
    description:
      "واقعیت مجازی (VR) به محیط تولید شده توسط کامپیوتر اشاره دارد که امکان غوطه‌وری کامل در دنیای ساخته شده مصنوعی را فراهم می‌کند.",
    icon: "/work/augmented-reality.png",
  },
  {
    name: "شهر هوشمند",
    description:
      "ایده ارائه استانداردهای زندگی بهتر با گنجاندن فناوری در فعالیت‌های روزمره مردم موجب ظهور مفهوم شهرهای هوشمند شد.",
    icon: "/work/city.png",
  },
];

const Features = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto rtl">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="font-sarbaz section-title mb-2 xl:mb-3 text-center mx-auto">
            اطلاعات
          </h2>
        </Fade>

        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="font-vazir mt-2 text-3xl font-bold -tracking-tight text-black dark:text-white sm:text-4xl">
                هر آنچه می‌خواهی
              </p>
            </Fade>

            <Fade
              direction="up"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="font-vazir mt-6 text-lg leading-8 text-black dark:text-white">
                ویژگی‌های اینه هوشمند
              </p>
            </Fade>
          </div>
        </div>

        {/* feature lists */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative hover:scale-110 transition-all"
                >
                  <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                    <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                      <img
                        src={feature.icon}
                        alt={`${feature.name} icon`}
                        className="h-[80px] w-[80px]"
                      />
                    </div>
                    <div className="font-sarbaz text-black dark:text-white">
                      {feature.name}
                    </div>
                  </dt>
                  <dd className="font-vazir mt-2 text-base leading-7">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </Fade>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
