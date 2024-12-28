import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";




export default function Home() {
  return (
    <>
      <main className="m-0 bg-[#0000800e]">
        <Hero />   
        <Features /> 
        <Services />  
        <Reviews />
        <Faq />
        <Gallery />
        {/* <Newsletter /> */}
      </main>
    </>
  );
}