// // src/components/Header.js

// import Link from 'next/link';
// import Image from 'next/image'; // Import Image component from Next.js
// import ThemeToggler from './ThemeToggler';


// const Header = () => {
//   return (
//     <header className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Replace MyApp with an image */}
//         <ThemeToggler />
//         <nav>
//           <ul className="flex space-x-5">
//             <li>
//               <Link href="/" className="hover:underline">صفحه اصلی</Link>
//             </li>
//             <li className="ml-4"> {/* Add margin-left for spacing */}
//               <Link href="/news" className="hover:underline">اتاق خبر</Link> 
//             </li>
//             <li>
//               <Link href="/about" className="hover:underline">درباره ما</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline">ارتباط با ما</Link>
//             </li>
//           </ul>
//         </nav>
//         <Link href="/">
//           <Image 
//             src="/akp.png" // Correct path to your logo image
//             alt="MyApp Logo"
//             width={150} // Adjust width as needed
//             height={50} // Adjust height as needed
//           />
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

'use client'

import React , {useEffect , useState} from "react"
import ThemeToggler from "./ThemeToggler"

//import components
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {

  const [header  , setHeader] =useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll' , () =>{
      window.scrollY >  50 ? setHeader(true) : setHeader(false);
    });

    //remove events
    return () => window.removeEventListener('scroll' , scrollYPos);
  });

  return (
    <header
    className={`${
        header 
        ? "px-4 py-2 bg-white shadow-lg dark:bg-accent" 
        : "px-4 py-4 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}
    >
      <div className="container mx-auto px-10 py-2">
        <div className=" flex justify-between items-center">
          

          <div className="flex items-center gap-x-10">
             <ThemeToggler />
             
             <Nav
             containerStyles='hidden xl:flex gap-x-8 items-center'
             linkStyles='relative hover:text-primary transition-all'
             underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full '
             />
             

            

             {/*mobile navigate */}
             <div className="xl:hidden">
              <MobileNav />
             </div>
          </div>
          
          <Logo />
        </div>
       
      </div>
        
    </header>
  )
}
 
export default Header