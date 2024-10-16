"use client";
import { Fade } from "react-awesome-reveal";
import HeroImg from "./HeroImg";

const Hero = () => {
  const videos = [
    "/hero/video1.mp4",
    "/hero/video2.mp4",
    "/hero/video3.mp4"
  ];

  return (
    <section className="py-1 xl:py-1 mx-1 w-full bg-transparent mb-12">
      <div className="container mx-auto px-0">
        <div className="relative h-full">
          {/* Full-screen video slider */}
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
            <HeroImg
              videos={videos}
              containerStyles="w-full h-full bg-no-repeat relative bg-center"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
