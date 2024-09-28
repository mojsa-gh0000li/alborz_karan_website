"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const BlogPostSlug = () => {
  const params = useParams();
  const slug = params.slug; // Get the slug from the URL
  const [post, setPost] = useState(null); // State to hold the blog post details
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://194.5.188.17:3000/api/blog/${slug}`);
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setPost(data); // Set the fetched post to state
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null); // Set post to null in case of error
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    if (slug) {
      fetchPost(); // Call the fetch function if slug exists
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto text-center py-24">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

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
              src={`http://194.5.188.17:3000${post.image_path}`} // Use image_path from the API response
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
