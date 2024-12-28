"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const ProjectSlugPage = () => {
  const { slug } = useParams(); // Get the slug from the URL

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch project details by slug
  const fetchProjectDetails = async () => {
    try {
      const response = await fetch(`http://194.5.188.17/api/gallery/${slug}`); // Change to your actual API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setProject(data);
    } catch (error) {
      console.error("Error fetching project details:", error);
      setProject(null); // Handle not found case
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchProjectDetails();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>No project found</div>;
  }

  return (
    <section className="min-h-screen pt-12 rtl bg-[#0000800e]">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            {project.title}
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
            {/* Project Content */}
            <div className="col-span-2">
              <img
                src={`${project.image_path.replace("\\", "/")}`} // Fixed the path
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                <p>{project.description}</p>
              </div>

              {/* Category or other relevant info */}
              <span className="inline-block bg-blue-500 text-white py-1 px-3 rounded-lg">
                {project.category} {/* Adjust if necessary */}
              </span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlugPage;
