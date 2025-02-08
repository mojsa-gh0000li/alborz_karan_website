"use client";
import { useEffect, useState } from "react";

const ServiceDetail = ({ params }) => {
  const { slug } = params;
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

  // Fetch service data based on slug
  useEffect(() => {
    fetch(`http://194.5.188.17:3002/api/cards/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setService(data);
        }
      })
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-red-500">سرویس یافت نشد</h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-500 animate-pulse">در حال بارگذاری...</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-6 bg-[#0000800e]">
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={`http://194.5.188.17:3002${service.photo}`}
            alt={service.title}
            width={180}
            height={180}
            className="rounded-full object-cover shadow-lg border-4 border-lime-400"
          />
          <h1 className="text-4xl font-extrabold font-sarbaz">{service.title}</h1>
        </div>

        {/* Description */}
        <p className="text-lg mt-6 leading-relaxed font-vazir">
          {service.description}
        </p>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="font-sarbaz bg-lime-400 text-black  py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-lime-500 hover:scale-105"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
