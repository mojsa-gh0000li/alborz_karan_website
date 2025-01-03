"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "صفحه اصلی" },
  { path: "/news", name: "پروژه ها" },
  { path: "/blog", name: "پایگاه دانش" },
  { path: "/contact", name: "ارتباط با ما" },
  { path: "/about", name: "درباره ما" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles} font-vazir`}
            onClick={onLinkClick} // بستن منو بعد از کلیک روی لینک
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
