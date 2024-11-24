import HeroImg from "./HeroImg";

const Hero = () => {
  const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];

  return (
    <HeroImg images={images} containerStyles="w-full bg-no-repeat bg-center" />
  );
};

export default Hero;
