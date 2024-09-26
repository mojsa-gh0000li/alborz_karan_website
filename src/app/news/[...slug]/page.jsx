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
      const res = await fetch(`http://127.0.0.1:5000/api/news/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    return <div>Loading...</div>;
  }

  if (!newsItem) {
    return <div>No news found</div>;
  }

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
            <div className="col-span-2">
              <img
                src={`/uploads/news/${newsItem.image_path}`}
                alt={newsItem.title}
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                <p>{newsItem.description}</p>
              </div>

              {/* Category & Date */}
              <div className="flex items-center justify-between mt-6">
                <span className="inline-block bg-blue-500 text-white py-1 px-3 rounded-lg">
                  {newsItem.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(newsItem.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Related News
              </h3>
              {/* This can be populated dynamically based on related news */}
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-md">
                  <a href="#" className="text-blue-500 hover:underline">
                    Related News Title 1
                  </a>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  <a href="#" className="text-blue-500 hover:underline">
                    Related News Title 2
                  </a>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  <a href="#" className="text-blue-500 hover:underline">
                    Related News Title 3
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default NewsSlugPage;
