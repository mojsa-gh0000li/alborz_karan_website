"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const NewsSlugPage = () => {
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams(); // Get slug from the URL

  // Fetch news by slug
  const fetchNewsItem = async () => {
    try {
      const res = await fetch(`http://194.5.188.17:3000/api/news/${slug}`);
      if (!res.ok) {
        throw new Error("Failed to fetch news data");
      }
      const data = await res.json();
      setNewsItem(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchNewsItem();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        No news found
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-12 bg-gray-50 flex flex-col items-center">
      <div className="container mx-auto px-4 md:px-8">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center text-3xl md:text-4xl font-bold text-gray-800">
            {newsItem.title}
          </h2>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            {/* News Content */}
            <div className="col-span-1 lg:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 mx-auto">
              <img
                src={`http://194.5.188.17:3000${newsItem.image_path}`} // Ensure image_path from API is used
                alt={newsItem.title}
                className="w-full h-64 object-cover mb-4 rounded-t-lg md:h-72 lg:h-80"
              />
              <div className="p-4 md:p-6">
                <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  <p>{newsItem.description}</p>
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between mt-6">
                  <span className="inline-block bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold">
                    {newsItem.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(newsItem.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default NewsSlugPage;
