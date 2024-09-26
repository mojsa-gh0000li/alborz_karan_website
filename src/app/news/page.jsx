"use client";

import { Fade } from "react-awesome-reveal";
import Link from "next/link"; // Import Link from Next.js
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect } from "react";

// Sample data for projects including image URLs
const projectData = [
  {
    id: 1,
    category: "همایش", // Updated category
    name: "Project 1",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    id: 2,
    category: "بروزه", // Updated category
    name: "Project 2",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    id: 3,
    category: "همایش", // Updated category
    name: "Project 3",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
  },
];

// Sample data for other pages
const otherPages = [
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

// Updated categories
const uniqueCategories = [
  "همه", // Updated to "All"
  "همایش", // Updated to "Conference"
  "بروزه", // Updated to "Recent"
];

const News = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState("همه"); // Default category updated



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
              console.log(res);
              setCards(res); // Set the state with the API data
          })
          .catch((e) => console.log(e));
  }

  // Call the `get` function on component mount
  useEffect(() => {
      get();
  }, []);



  // Filter projects by category
  const filterProject = projectData.filter((project) => {
    return category === "همه" ? true : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12 rtl">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            اخبار
          </h2>
        </Fade>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((cat, index) => (
                <TabsTrigger
                  value={cat}
                  key={index}
                  onClick={() => setCategory(cat)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              {filterProject.map((project) => (
                <TabsContent value={category} key={project.id}>
                  {/* Link to project slug page */}
                  <Link href={`/news/${project.name}`} className="block border p-4 rounded-md shadow hover:bg-gray-100">
                    <div className="flex flex-col items-center">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-32 object-cover mb-2 rounded-md"
                      />
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="mt-2 text-gray-600">دسته‌بندی: {project.category}</p>
                    </div>
                  </Link>
                </TabsContent>
              ))}
            </Fade>
          </div>
        </Tabs>

        {/* Section for Other Pages */}
       
      </div>
    </section>
  );
};

export default News;
