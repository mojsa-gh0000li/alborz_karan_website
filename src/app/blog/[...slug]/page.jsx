"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const blogPostDetails = {

  "human-computer-interaction": {
    id: 1,
    title: "Human-computer interaction HCI",
    content:
      "Photography is a never-ending learning process. Here are 5 tips to take your skills to the next level: Tip 1: Understand your camera settings. Tip 2: Practice composition rules. Tip 3: Master the light. Tip 4: Keep shooting in different scenarios. Tip 5: Always look for inspiration.",
    image: "/blog1.jpg",
    
    
  },
  "understanding-light-in-photography": {
    id: 2,
    title: "Understanding Light in Photography",
    content:
      "Light is the essence of photography. Learn how to control light to create stunning visuals. Natural light is unpredictable but often gives the best results. Meanwhile, studio lighting allows for precision but requires technical skills.",
    image: "/blog2.jpg",
    date: "August 25, 2024",
    author: "Admin",
  },
  "top-10-photography-gear-for-beginners": {
    id: 3,
    title: "Top 10 Photography Gear for Beginners",
    content:
      "Starting in photography? Here are the top 10 essential items every beginner needs in their kit: 1. A good camera, 2. A versatile lens, 3. Tripod, 4. Memory cards, 5. Camera bag, 6. External hard drive, 7. Camera strap, 8. Lens cleaner, 9. Remote shutter release, and 10. A light reflector.",
    image: "/blog3.jpg",
    date: "July 10, 2024",
    author: "Admin",
  },
};

const BlogPostSlug = () => {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchedPost = blogPostDetails[slug];
      setPost(fetchedPost || null);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="container mx-auto text-center py-24">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <section className="pb-12 xl:py-24 min-h-screen rtl bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-4xl xl:text-5xl font-bold font-sarbaz mb-4 text-gray-800 dark:text-gray-200">
              {post.title}
            </h1>
            <p className="font-vazir text-sm text-gray-500 dark:text-gray-400">
              نوشته شده توسط {post.author} در {post.date}
            </p>
          </div>
        </Fade>

        {/* Blog Post Image */}
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Fade>

        {/* Blog Post Content */}
        <Fade direction="up" delay={500} cascade damping={0.1} triggerOnce>
          <div className="text-lg leading-relaxed font-vazir text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p>{post.content}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default BlogPostSlug;
