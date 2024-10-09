'use client'
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import { AlignJustify } from "lucide-react";
import Socials from "./Socials";
import { Fade } from "react-awesome-reveal";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // ایجاد state برای باز و بسته شدن منو

  const handleLinkClick = () => {
    setIsOpen(false); // بستن منو بعد از کلیک روی یک لینک
  };

  return (
    <Fade
    direction="up"
    delay={1000}
    cascade
    damping={1e-1}
    triggerOnce={true}
  >
    
 
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} // باز و بسته کردن منو
        />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl"
              onLinkClick={handleLinkClick} // ارسال تابع بستن منو به کامپوننت Nav
            />
          </div>

          <Socials
            containerStyles="flex flex-row gap-x-4"
            iconStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
    </Fade>
  );
};

export default MobileNav;
