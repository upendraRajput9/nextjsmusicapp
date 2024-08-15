// 'use client';
// import React, { useState } from "react";
// import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//     className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <Link href='/'>
//         <MenuItem setActive={setActive} active={active} item="Home">
//         </MenuItem>
//         </Link>
//         <MenuItem setActive={setActive} active={active} item="Our Course">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src=""
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src=""
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src=""
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src=""
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Contact Us">
//         </MenuItem>
//       </Menu>
//     </div>
//   )
// }

// export default Navbar

"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
