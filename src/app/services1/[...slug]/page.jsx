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
        <h2 className="text-2xl font-bold text-red-500">Service not found</h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-500">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 bg-[#0000800e]">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
        <div className="flex items-center gap-6">
          <img
            src={`http://194.5.188.17:3002${service.photo}`}
            alt={service.title}
            width={150}
            height={150}
            className="rounded-full object-cover shadow-lg"
          />
          <h1 className="text-4xl font-extrabold text-primary dark:text-white font-sarbaz">
            {service.title}
          </h1>
        </div>
        
        <p className="text-lg text-black dark:text-gray-300 mt-6 font-vazir">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;



