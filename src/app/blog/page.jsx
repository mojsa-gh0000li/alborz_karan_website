"use client";

import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "Human computer interaction HCI",
    excerpt:
      "تعامل انسان و کامپیوتر",
    image: "/hci.jpg",
  
  },
  {
    id: 2,
    title: "Understanding Light in Photography",
    excerpt:
      "Light is the essence of photography. Learn how to control light to create stunning visuals.",
    image: "/blog2.jpg",

  },
  {
    id: 3,
    title: "Top 10 Photography Gear for Beginners",
    excerpt:
      "Starting in photography? Here are the top 10 essential items every beginner needs in their kit.",
    image: "/blog3.jpg",

  },
];

const generateSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const BlogPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState();

  function get() {
    fetch("http://127.0.0.1:5000/api/news", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        setPhone(res);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <section className="pb-12 xl:py-24 min-h-screen rtl">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold font-sarbaz mb-4">
              وبلاگ ما
            </h1>
            <p className="font-vazir text-xl xl:text-2xl text-gray-600">
              آخرین اخبار، مقالات و نکات تخصصی در زمینه IT
              امنیت شبکه مطالعه کنید.
            </p>
          </div>
        </Fade>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce key={post.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Blog Post Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                {/* Blog Post Content */}
                <div className="p-6">
                  <h3 className="font-vazir text-lg font-bold mb-2">
                    {post.title}
                  </h3>
                  <p className="font-vazir text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
               

                  <Button
                    className="text-white font-vazir font-medium hover:underline"
                    onClick={() => router.push(`/blog/${generateSlug(post.title)}`)}
                  >
                    ادامه مطلب
                  </Button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
