"use client";

import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect } from "react";

const uniqueCategories = [ "همایش", "پروژه","فناوری","همه"];

const News = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState("همه");
  const [cards, setCards] = useState([]); // State to store fetched news articles

  const getAllNews = () => {
    fetch("http://194.5.188.17:3000/api/news")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setCards(res); // Set the fetched news articles
      })
      .catch((error) => {
        console.error("Failed to fetch news articles:", error);
      });
  };

  useEffect(() => {
    getAllNews(); // Fetch all news articles on component mount
  }, []);

  // Filter news articles based on selected category
  const filteredCards = cards.filter((card) => {
    return category === "همه" ? true : card.category === category;
  });

  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto ">
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
              {filteredCards.map((card) => (
                <TabsContent value={category} key={card.id}>
                  <Link
                    href={`/news/${card.title}`} // Use card.slug for the link
                    className="block border p-4 rounded-md shadow hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={`http://194.5.188.17:3000${card.image_path}`} // Ensure this matches your backend's image URL structure
                        alt={card.title} // Adjusted to use card.title for better accessibility
                        className="w-full h-32 object-cover mb-2 rounded-md"
                      />
                      <h3 className="text-xl font-semibold">{card.title}</h3>{" "}
                      {/* Updated to use card.title */}
                      <p className="mt-2 text-gray-600 ">
                        دسته‌بندی: {card.category}
                      </p>
                    </div>
                  </Link>
                </TabsContent>
              ))}
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default News;
