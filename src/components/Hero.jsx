// "use client";

// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import Link from "next/link";

// //react awesome reveal animation
// import { Fade } from "react-awesome-reveal";

// import { RiMenFill, RiBookmark3Fill } from "react-icons/ri";

// import Socials from "./Socials";
// import HeroImg from "./HeroImg";
// import Badge from "./Badge";

// const Hero = () => {
//   return (
//     <section className="py-1 xl:py-1  mx-1  h-[auto] bg-bottom">
//       <div className="container mx-auto px-10">
//         <div className="flex justify-between gap-x-1 ">
//           {/*left side*/}
//           <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-right ">
//             <Fade
//               direction="up"
//               delay={400}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <div className="font-sarbaz text-x-sm  mb-4 text-primary tracking-[1px] ">
//               گروه فناوری البرز  کاران  پویا
//               </div>
//             </Fade>

//             <Fade
//               direction="up"
//               delay={600}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <h1 className=" uppercase text-5xl font-sarbaz my-2">
//               با فناوری، دنیا را دوباره تعریف کنید
//               </h1>
//             </Fade>

//             <Fade
//               direction="up"
//               delay={800}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
//               <p className="font-vazir subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
//               گروه فناوری البرز کاران پویا با تکیه بر تخصص و تجربه، به شما کمک می‌کند تا با استفاده از آخرین دستاوردهای فناوری، تحولی بزرگ در کسب‌وکار خود ایجاد کنید. ما معتقدیم که دنیای دیجیتال فرصتی است برای توسعه، پیشرفت و رشد. با ما، آینده را با چشمی بازتر و دنیایی بزرگ‌تر تجربه کنید.{" "}
//               </p>
//             </Fade>

//             <Fade
//               direction="up"
//               delay={1000}
//               cascade
//               damping={1e-1}
//               triggerOnce={true}
//             >
              
//             </Fade>
           

//             {/* 
//                     <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
//                         <div className="flex w-full gap-x-4">
                     
//                         </div>
//                     </div> */}
//           </div>

//           <Fade
//             direction="right"
//             delay={600}
//             cascade
//             damping={1e-1}
//             triggerOnce={true}
//           >
//             {/*right side*/}
//             <div className="hidden xl:flex relative pt-24">
//               <HeroImg
//                 imgSrc="/heromain.svg"
//                 containerStyles="w-[600px] h-[500px] bg-no-repeat relative bg-bottom"
//               />
//             </div>
//           </Fade>
//         </div>

//         {/* <div className="py-24  sm:py-32 ">
//                 <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
//                     <dl className=" grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 bg-primary">
//                         <div>
//                             <dt className="uppercase text-primary font-bold text-sm mb-2">photography</dt>
//                             <dd className="text-sm mb-4">
//                                 <Badge 
//                                 icon={<RiBookmark3Fill />}
//                                 endCountNum={12}
//                                 endCountText='+'
//                                 BadgeText=''
//                                 />
//                             </dd>

//                         </div>
//                     </dl>
//                 </div>
//             </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import { Fade } from "react-awesome-reveal";
import HeroImg from "./HeroImg";

const Hero = () => {
  const videos = [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4"
  ];

  return (
    <section className="py-1 xl:py-1 mx-1 h-screen bg-black">
      <div className="container mx-auto px-0 h-full">
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
