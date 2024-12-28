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
    <section className="py-12 xl:py-24 bg-transparent dark:from-gray-800 dark:to-gray-900 mt-6">
      <div className="container mx-auto rtl">
        {/* Title Section */}
        <div className="text-center relative mb-16 ">
          

          {/* Main Title */}
          <div className="flex items-center justify-center ">
            {/* Left Green Line */}
            <div className="w-full h-0.5 bg-green-400" />
            <h2 className="mx-4 font-sarbaz text-5xl font-extrabold text-blue-600">
              تکنولوژی
            </h2>
            {/* Right Green Line */}
            <div className="w-full h-0.5 bg-green-400" />
          </div>

          {/* Subtitle */}
          <p className="font-vazir text-xl text-green-500 mt-2">
            هر آنچه می‌خواهی
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 px-6 sm:px-12 lg:px-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative text-center p-6 bg-blue-100 rounded-t-3xl shadow-lg transform transition-transform hover:scale-105 dark:bg-gray-800"
            >
              {/* Icon Container */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-md sm:w-24 sm:h-24">
                <img
                  src={feature.gif}
                  alt={`${feature.name} icon`}
                  className="h-16 w-16 rounded-full sm:h-20 sm:w-20 shadow-md"
                />
              </div>

              {/* Content Container */}
              <div className="mt-12 flex flex-col">
                {/* Feature Title */}
                <div className="flex flex-col mb-2">
                  <h3 className="font-sarbaz text-base font-bold text-blue-700 sm:text-lg">
                    {feature.name}
                  </h3>
                  <h3 className="font-sarbaz text-sm font-bold text-blue-700 sm:text-md">
                    {feature.englishName}
                  </h3>
                </div>

                {/* Divider */}
                <div className="my-2 h-0.5 bg-gray-300 w-11/12 mx-auto"></div>

                {/* Feature Description */}
                <p className="font-vazir text-xs text-gray-600 dark:text-gray-300 leading-6 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
