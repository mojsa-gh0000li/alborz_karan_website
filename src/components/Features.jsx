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
    <section className="py-12 xl:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto rtl">
        {/* Title Section */}
        <div className="text-center relative mb-16">
          {/* Background Accent Text */}
          <h2 className="absolute top-1/4.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-extrabold text-gray-200 opacity-20 select-none">
            Technology
          </h2>

          {/* Main Title */}
          <div className="flex items-center justify-center">
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
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center transform transition-transform hover:scale-105"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src={feature.gif}
                  alt={`${feature.name} gif`}
                  className="h-20 w-20"
                />
              </div>

              {/* Feature Title */}
              <h3 className="font-sarbaz text-xl font-bold text-black dark:text-white">
                {feature.name}
              </h3>

              {/* Feature Description */}
              <p className="font-vazir mt-2 text-sm text-gray-600 dark:text-gray-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
