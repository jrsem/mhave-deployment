"use client"
import React, { useState } from 'react'
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

import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { C, LOGO, NAV_ROUTES } from '@/constants';

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";


type Lang = "FR" | "HT" | "EN" | "ESP";
type ModalKey = null | string;



const MobileNavbar = () => {
 const navT = useTranslations("Navigation");
 const LANGS: Lang[] = ["FR", "HT", "EN", "ESP"];
    const pathname = usePathname();
     const navLabels = navT.raw("labels") as string[];
      const params = useParams();
        const [nntvOpen, setNntvOpen] = useState(false);
          const [modal, setModal] = useState<ModalKey>(null);
     const currentLocale = (params?.locale as string) || 'fr';

       function closeModal() {
    setModal(null);
  }
  
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
              <RiMenu3Fill className='w-6 h-6 text-white'/>
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
                
         {/* Navigation */}
        <nav className="hidden md:flex md:flex-wrap">
          {navLabels.map((item: string, i: number) => (
            <button
              key={i}
              onClick={() => {
                if (i === 5) {
                  setNntvOpen(true);
                  setModal(null);
                } else if (i === 0) {
                  closeModal();
                } else {
                  setModal(`nav-${i}`);
                }
              }}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  modal === `nav-${i}` ||
                  (i === 0 && modal === null && !nntvOpen)
                    ? `2px solid ${C.bord}`
                    : "2px solid transparent",
                color:
                  modal === `nav-${i}` ||
                  (i === 0 && modal === null && !nntvOpen)
                    ? C.white
                    : C.muted,
                fontSize: 10,
                fontWeight:
                  modal === `nav-${i}` ||
                  (i === 0 && modal === null && !nntvOpen)
                    ? 700
                    : 400,
                padding: "8px 9px",
                cursor: "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              {item}
              {i > 0 && (
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>
          ))}
        </nav>
                 <Separator/>

{/* lnaguage */}
 <div  className="md:hidden flex gap-6 items-center mt-8">
          {LANGS.map((l) => {
            const localeMap: Record<string, string> = { FR: 'fr', HT: 'ht', EN: 'en', ESP: 'es' };
            const targetLocale = localeMap[l];
            const isActive = currentLocale.toUpperCase() === l;
            return (
              <SheetClose asChild key={l}>
              <Link
                key={l}
                href="/"
                locale={targetLocale}
                style={{
                  background: isActive ? C.bord : C.navy,
                  border: `1px solid ${isActive ? C.bord : "#375080"}`,
                  color: C.white,
                  fontSize: 10,
                  fontWeight: isActive ? 700 : 400,
                  padding: "3px 7px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textDecoration: "none",
                }}
              >
                {l}
              </Link>
              </SheetClose>
            );
          })}
        </div>
            
            <SheetHeader>
            <SheetTitle>MHAVE</SheetTitle>
            <SheetDescription>Ministère des Haïtiens vivant à lÉtranger.</SheetDescription>
            </SheetHeader>
        </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavbar
