"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceDetail = ({ params }) => {
  const { slug } = params;
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

  // Fetch service data based on slug
  useEffect(() => {
    fetch(`http://194.5.188.17/api/cards/${slug}`)
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
    <div className="container mx-auto py-12 px-6">
      <div className="bg-primary-light dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-5xl font-extrabold text-primary dark:text-white mb-6 font-sarbaz">
          {service.title}
        </h1>
        <p className="text-xl text-secondary dark:text-gray-300 mb-8 font-vazir">
          {service.description}
        </p>

        <div className="flex justify-center items-center">
          <img
            src={`http://194.5.188.17${service.photo}`} // Use service image if available
            alt={service.title}
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
