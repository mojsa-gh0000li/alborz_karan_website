"use client";

import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import Link from 'next/link'; // Import Next.js Link component
import { Button } from "@/components/ui/button"; // Ensure you import the Button component

const projectData = [
  {
    image: "/work/2.jpg",
    name: "مرکز رشد دانشگاه",
    category: "February 11, 2024",
    description: "فعالیت ما در مرکز رشد دانشگاه تبریز",
    slug: "university-incubator", // Add a slug field for routing
  },
  {
    image: "/work/2.jpg",
    name: "مرکز رشد دانشگاه",
    category: "February 11, 2024",
    description: "فعالیت ما در مرکز رشد دانشگاه تبریز",
    slug: "university-incubator-2",
  },
  {
    image: "/work/2.jpg",
    name: "مرکز رشد دانشگاه",
    category: "February 11, 2024",
    description: "فعالیت ما در مرکز رشد دانشگاه تبریز",
    slug: "university-incubator-3",
  },
];

const Gallery = () => {
  const [cards1, setCards] = useState([]);

  // Fetch cards from the API
  function get() {
    fetch("http://127.0.0.1:5000/api/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        setCards(res);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <section className="relative mb-12 xl:mb-36 rtl">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="font-sarbaz section-title mb-8 xl:mb-16 text-center mx-auto tracking-[1px]">
            آلبوم تصویری
          </h2>
        </Fade>

        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
          {/* Add grid layout here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <div key={index} className="max-w-sm rounded-lg border bg-white shadow-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>

                  {/* Use Next.js Link for navigation */}
                  <Link href={`/gallary/${project.slug}`} passHref>
                    <Button className="hover:underline text-white">
                      بیشتر بدانید
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Gallery;
