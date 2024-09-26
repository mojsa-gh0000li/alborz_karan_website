import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import Badge from "./Badge";
import { Button } from "./ui/button";
const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0 space-x-0 space-y-0">
        <div
          className="relative w-full h-[200px] flex items-center justify-center dark:bg-secondary/40
        xl:bg-[100%] xl:bg-no-repeat overflow-hidden"
        >
          <Image
            src={project.image}
            width={440}
            height={200}
            alt=""
            pariarity
            className="absolute top-0 shadow-2xl hover:scale-110 tranision-all"
          />
        </div>
      </CardHeader>
      
      <div className="p-5">
        

        <h4 className="h4 mb-1 font-vazir">
          {project.name}
        </h4>
        <p className="font-vazir text-muted-foreground text-lg font-vazir my-3">
          {project.description}
        </p>
        <Button
          className="text-white font-vazir font-medium hover:underline"
          onClick={() => router.push(`/blog/${generateSlug(post.title)}`)}
        >
          ادامه مطلب
        </Button>
      </div>

      
    </Card>
  );
};

export default ProjectCard;

// import React from "react";
// import { Card, CardHeader } from "./ui/card";
// import Image from "next/image";
// import Badge from "./Badge";
// import Link from "next/link";
// import { Button } from "./ui/button";


// const ProjectCard = ({ project }) => {
//   return (
//     <Card className="group overflow-hidden relative">
//       <CardHeader className="p-0">
//         <div
//           className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40
//         xl:bg-[100%] xl:bg-no-repeat overflow-hidden"
//         >
//           <Image
//             src={project.image}
//             width={440}
//             height={200}
//             alt=''
//             priority
//             className="absolute top-0 shadow-2xl hover:scale-110 transition-all"
//           />
//         </div>
//       </CardHeader>
//       <div >  
//       {/* Add padding for better spacing */}
//         <Badge className="font-sarbaz uppercase text-sm font-medium mb-2 absolute top-4 left-5">
//           {project.category}
//         </Badge>

//         <h4 className="h4 mb-1 font-vazir">{project.name}</h4>
//         <p className="font-vazir text-muted-foreground text-lg">
//           {project.description}
//         </p> 

//         {/* Add a link to the project's dynamic slug page */}
//         {/* <Link href={`/news/${project.slug}`} passHref>
//           <Button className="text-blue-500 hover:underline font-vazir mt-4 block">
//             مشاهده بیشتر
//           </Button>
//         </Link> */}
//       </div> 
//     </Card>
//   );
// };

// export default ProjectCard;
