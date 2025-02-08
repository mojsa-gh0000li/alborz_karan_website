"use client";

import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState([]); // Initialize state to hold blog posts
  const [loading, setLoading] = useState(true); // State to handle loading status

  // Fetch blog posts from the API
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://194.5.188.17:3002/api/blog");
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      const data = await response.json();
      console.log(data);
      setBlogPosts(data); // Set the fetched blog posts to state
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  useEffect(() => {
    fetchBlogPosts(); // Call fetch function on component mount
  }, []);

  // Helper function to generate slug from the title
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="pb-12 xl:py-24 min-h-screen rtl bg-[#0000800e]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold font-sarbaz mb-4 text-blue-600">
              پایگاه دانش ما
            </h1>
            <p className="font-vazir text-xl xl:text-2xl text-gray-600">
              آخرین اخبار، مقالات و نکات تخصصی در زمینه IT امنیت شبکه مطالعه
              کنید.
            </p>
          </div>
        </Fade>

        {/* Blog Posts Grid */}
        {loading ? ( // Show loading state while fetching
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={0.1}
                triggerOnce
                key={post.id}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Blog Post Image */}
                  <img
                    src={`http://194.5.188.17:3002${post.image_path}`} // Use image_path from the API response
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  {/* Blog Post Content */}
                  <div className="p-6">
                    <h3 className="font-vazir text-lg font-bold mb-2">
                      {post.title}
                    </h3>
                    <p className="font-vazir text-gray-700 mb-4">
                      {post.description}{" "}
                      {/* Use description from the API response */}
                    </p>

                    <Button
                      className="text-white font-vazir font-medium hover:underline"
                      onClick={() =>
                        router.push(`/blog/${generateSlug(post.title)}`)
                      }
                    >
                      ادامه مطلب
                    </Button>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
