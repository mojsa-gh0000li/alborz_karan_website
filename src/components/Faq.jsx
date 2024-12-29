"use client";
import React from "react";

export default function Faq() {
  return (
    <div className=" py-16 bg-transparent">
      
        {/* عنوان */}
        <div className="flex items-center justify-center mb-5 ">
        {/* Left Green Line */}
        <div className="w-1/6 md:w-4/12 h-0.5 bg-green-400" />
        <div className="mx-8 font-sarbaz  text-2xl md:text-5xl font-extrabold -translate-x-2 text-blue-500">
        سوالات متداول
        </div>
        {/* Right Green Line */}
        <div className="w-1/6 md:w-4/12 h-0.5 bg-green-400" />
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* سوالات */}
        <div className="space-y-4 w-full max-w-6xl">
          {/* سوال اول */}
          <div className="px-6 py-2 radialGradientcolor  rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-1 font-vazir">
              چه خدماتی در زمینه IT ارائه می‌دهید؟
            </h3>
            <p className="text-gray-600 leading-relaxed text-base font-vazir">
              ما مجموعه‌ای از خدمات IT شامل توسعه نرم‌افزار، مدیریت زیرساخت‌های فناوری اطلاعات، 
              مشاوره در حوزه امنیت سایبری و پیاده‌سازی راهکارهای شبکه را ارائه می‌دهیم.
            </p>
            {/* Right Green Line */}
            <div className="w-5/12 mt-3 h-0.5 bg-green-400" />
          </div>

          {/* سوال دوم */}
          <div className="px-6  py-2 radialGradientcolor  rounded-2xl  flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-1 font-vazir">
              چگونه می‌توانم پروژه IT خود را با شما آغاز کنم؟
            </h3>
            <p className="text-gray-600 leading-relaxed text-base font-vazir">
              برای شروع، شما می‌توانید با تیم ما تماس بگیرید یا از طریق فرم درخواست خود را ثبت کنید. 
              پس از آن، تیم ما با شما در تماس خواهد بود تا نیازهای دقیق شما را بررسی کند.
            </p>
            {/* Right Green Line */}
        <div className="w-5/12 mt-3  h-0.5 bg-green-400" />
          </div>

          {/* سوال سوم */}
          <div className="px-6  py-2 radialGradientcolor  rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-1 font-vazir">
              چگونه می‌توانم از امنیت داده‌هایم اطمینان حاصل کنم؟
            </h3>
            <p className="text-gray-600 leading-relaxed text-base font-vazir">
              ما از به‌روزترین تکنولوژی‌ها و پروتکل‌های امنیتی استفاده می‌کنیم تا از اطلاعات شما 
              در برابر تهدیدات سایبری محافظت کنیم. همچنین، مشاوره‌های امنیتی سازمان شما ارائه می‌دهیم.
            </p>
            {/* Right Green Line */}
        <div className="w-5/12 mt-3 h-0.5 bg-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
