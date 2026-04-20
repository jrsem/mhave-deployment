"use client"
import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HiOutlineMenu } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { C, LOGO, NAV_ROUTES } from '@/constants';
// import { C } from "@/constants/colors";
import { useMhave } from "@/context/MhaveContext";

import { usePathname } from "next/navigation";
import { NAV_LABELS } from '@/data';
import Ninu from '../Dialogue/Ninu';
import { Button } from '../ui/button';
import NinuMobile from '../Dialogue/NinuMobile';
const MobileNavbar = () => {

  const { lang, setLang } = useMhave();
    const pathname = usePathname();
    const nav: string[] = NAV_LABELS[lang];
  return (
    <div className='md:hidden z-99'>
      <Sheet>
        <SheetTrigger>
          {/* <HiOutlineMenu className='text-white cursor-pointer'size={30}/> */}
        <div className=" flex flex-col items-end cursor-pointer text-white lg:hidden">
       {/* <Image
                src='/mobile-menu.png'
                width={35}
                height={35}
                alt='mhave'
                className='text-white bg-transparent'
              /> */}
              <RiMenu3Fill className='w-6 h-6 text-navy'/>
      </div>
        </SheetTrigger>
        <SheetContent side='left' className=" border-none bg-white flex flex-col px-4!">
        {/* <div className="flex flex-col items-center mt-8!"> */}
    
              <div
                className="px-8! flex items-center gap-3 shrink-0 mt-10!"
              >
                <Image
                  src={LOGO}
                  alt="Sceau MHAVE"
                  width={60}
                  height={60}
                  unoptimized
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(255,255,255,0.25)",
                    flexShrink: 0,
                  }}
                />
                <div className="flex flex-col">
                  <div
                    className="text-dark font-bold text-sm leading-tight"
                  >
                    Ministère des Haïtiens
                  </div>
                  <div
                    style={{
                      color: C.dark,
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.25,
                    }}
                  >
                    Vivant à l&apos;Étranger –{" "}
                    <span style={{ color: "#fca5a5" }}>MHAVE</span>
                  </div>
                  <div style={{ color: C.dark, fontSize: 10, marginTop: 1 }}>
                    mhave.gouv.ht
                  </div>
                </div>
              </div>
    
    {/* </div> */}
           <Separator/>

            {/* Navigation */}
                 <nav className="md:hidden flex flex-col">
                   {nav.map((item: string, i: number) => {
                     const route = NAV_ROUTES[i];
                     const isActive =
                       route === "/"
                         ? pathname === "/"
                         : pathname === route || pathname.startsWith(`${route}/`);
                     return (
                      <SheetClose asChild key={i}>
                       <Link
                         
                         href={route}
                         style={{
                           background: "none",
                           border: "none",
                          //  borderBottom: isActive
                          //    ? `2px solid ${C.bord}`
                          //    : "2px solid transparent",
                           color: isActive ? C.navy : C.dark,
                           fontSize: 14,
                           fontWeight: isActive ? 700 : 400,
                           padding: "8px 9px",
                           cursor: "pointer",
                           fontFamily: "inherit",
                           whiteSpace: "nowrap",
                           display: "flex",
                           alignItems: "center",
                           gap: 3,
                           textDecoration: "none",
                         }}
                       >
                         {item}
                         {i > 0 && (
                           <svg
                             width={12}
                             height={12}
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             strokeWidth="2.5"
                           >
                             <path d="M6 9l6 6 6-6" />
                           </svg>
                         )}
                       </Link>
                       </SheetClose>
                     );
                   })}
                 </nav>
                 <Separator/>

                 <SheetClose asChild >
                  <NinuMobile/>
                  </SheetClose>
            <SheetHeader>
            <SheetTitle>MHAVE</SheetTitle>
            <SheetDescription>Ministère des Haïtiens vivant à l'Étranger.</SheetDescription>
            </SheetHeader>
        </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavbar
