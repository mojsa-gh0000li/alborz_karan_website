"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const ProjectSlugPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample project data, in practice this could come from an API
  const projectData = [
    {
      slug: "university-incubator",
      image: "/work/2.jpg",
      name: "مرکز رشد دانشگاه",
      category: "February 11, 2024",
      description: "فعالیت ما در مرکز رشد دانشگاه تبریز ",
      link: "/",
      codepen: "/",
    },
    // Add more projects as needed
  ];

  // Fetch project details by slug
  const fetchProjectDetails = () => {
    const foundProject = projectData.find((item) => item.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      setProject(null); // Handle not found case
    }
    setLoading(false);
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
            {project.name}
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
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                <p>{project.description}</p>
              </div>

              {/* Category */}
              <span className="inline-block bg-blue-500 text-white py-1 px-3 rounded-lg">
                {project.category}
              </span>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Related Projects
              </h3>
              {/* Add related projects as needed */}
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-md">
                  <a href="#" className="text-blue-500 hover:underline">
                    Related Project 1
                  </a>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  <a href="#" className="text-blue-500 hover:underline">
                    Related Project 2
                  </a>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                  <a href="#" className="text-blue-500 hover:underline">
                    Related Project 3
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

export default ProjectSlugPage;
