"use client";

import { Fade } from "react-awesome-reveal";

const features = [
  {
    name: "واقعیت ترکیبی (MR)",
    description:
      "واقعیت ترکیبی (MR) فناوری‌ای است که دنیای واقعی و مجازی را با هم ترکیب می‌کند و امکان تعاملات پویا بین آن‌ها را فراهم می‌آورد.",
    gif: "/gif/hologram.gif", // لینک گیف برای MR
  },
  {
    name: "هوش مصنوعی (AI)",
    description:
      "هوش مصنوعی یکی از مهم‌ترین فناوری‌های روز است که قابلیت‌های یادگیری و تصمیم‌گیری ماشینی را در اختیار ما قرار می‌دهد.",
    gif: "/gif/artificial-intelligence.gif", // لینک گیف برای AI
  },
  {
    name: "اینترنت اشیا (IoT)",
    description:
      "اینترنت اشیا (IoT) به ارتباط و تعامل دستگاه‌های مختلف در یک شبکه هوشمند اشاره دارد که قابلیت‌های خودکار و هوشمند را بهبود می‌بخشد.",
    gif: "/gif/brain.gif", // لینک گیف برای IoT
  },
  {
    name: "ارتباطات (Connection)",
    description:
      "ارتباطات پیشرفته، اساس رشد و توسعه فناوری است و بستری را برای انتقال سریع اطلاعات بین دستگاه‌ها و افراد فراهم می‌کند.",
    gif: "/gif/communication.gif", // لینک گیف برای Connection
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
            تکنولوژی
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

          </div>
        </div>

        {/* feature lists */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Fade
              direction="up"
              delay={800}
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
                    <div className="flex flex-col w-[100px] h-[100px] bg-blue-400 rounded-2xl items-center mb-4 justify-center">
                      <img
                        src={feature.gif}
                        alt={`${feature.name} gif`}
                        className="h-[83px] w-[83px] rounded-xl" // لینک گیف به جای آیکون
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
