"use client";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "@/public/assets/backgrounds/logo.webp";
import { ChevronDown, ChevronRightIcon, ChevronUp, Divide } from "lucide-react";
import coloredLogo from "@/public/assets/backgrounds/coloredLogo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { dropdown, language, mobileLanguage } from "@/data";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Globe from "@/app/components/icons/Globe";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        // @ts-ignore
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // change navigation menu background
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  // show navigation on scroll up
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 90) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative"
    >
      {/* Mobile Header */}
      <div className="py-6 border-b md:border-none border-white/15 fixed w-full z-10 bg-[#1F80F0] lg:hidden">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Image src={siteLogo} width={134} height={21} alt="site logo" />

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            {menuOpen ? (
              <XMarkIcon className="size-6 text-white" />
            ) : (
              <Bars3Icon className="size-6 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-[70px] w-full  bg-[#1B76E9] z-30 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col items-stretch justify-between gap-8">
          <nav className="flex flex-col gap-4 text-white">
            {/* mobile Services Dropdown */}
            <div>
              <Link
                href="#"
                onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown
                className="text-sm font-normal leading-[22px] flex justify-between items-center font-sans"
              >
                Solutions
                <span className="ml-2">&#9662;</span> {/* Dropdown indicator */}
              </Link>
              {dropdownOpen && (
                <div className="flex flex-col gap-4 text-white p-4">
                  <Link href="#" className="text-sm font-normal leading-[22px]">
                    AnyCaaS
                  </Link>
                  <Link href="#" className="text-sm font-normal leading-[22px]">
                    AnyBaaS
                  </Link>
                  <Link href="#" className="text-sm font-normal leading-[22px]">
                    AnyPaaS
                  </Link>
                </div>
              )}
            </div>

            <Link href="#" className="text-sm font-normal">
              Service
            </Link>
            <Link href="#" className="text-sm font-normal">
              About
            </Link>
          </nav>

          {/* Mobile Language Change Dropdown */}

          <div className="w-full max-w-[200px] mx-auto">
            {/* Dropdown Trigger Button */}
            <button
              onClick={() => setLanguageDropdown((prev) => !prev)}
              className={`outline-none border px-3 py-2 rounded-full flex items-center justify-center gap-2 w-full transition-colors text-white border-gray-200/15 `}
            >
              <Globe className="size-5" />
              <span>English</span>
              <ChevronDown
                className={`size-5 transition-transform duration-300 ${
                  languageDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: languageDropdown ? 1 : 0,
                height: languageDropdown ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.35 },
                height: { duration: 0.35 },
              }}
            >
              {languageDropdown && (
                <div className="mt-2 border border-gray-200/15 bg-transprent rounded-md">
                  {mobileLanguage.map((lan) => (
                    <div
                      key={lan.id}
                      className="last:border-0 px-4 py-2 cursor-pointer text-white whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                    >
                      {lan.menu}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          <button
            className={`text-[16px] text-white  font-sans font-semibold leading-6 flex items-center justify-center gap-2 rounded shadow-md w-full transition-colors duration-300 px-8 py-[14px] bg-transparent border hover:bg-white hover:text-[#005BC4] border-white mt-[40px]`}
          >
            Contact Us
            <span>
              <ChevronRightIcon className="size-6" />
            </span>
          </button>
        </div>
      </div>

      {/* desktop */}
      <div
        className={`py-5 border-b md:border-none border-white/15 fixed w-full z-40 transition-all hidden lg:block duration-300 ${
          color ? "bg-white shadow-lg" : "bg-transparent "
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              {color ? (
                <Image src={coloredLogo} alt="site logo" />
              ) : (
                <Image src={siteLogo} alt="site logo" />
              )}
            </Link>
            {/* navigation menu */}
            <div className="flex z-50 gap-10 items-center">
              <NavigationMenu>
                <NavigationMenuList
                  className={`flex gap-4 list-none ${
                    color ? "text-[#005BC4]" : "text-white"
                  }`}
                >
                  <NavigationMenuItem className="font-sans">
                    <NavigationMenuTrigger
                      style={{ backgroundColor: "transparent" }}
                      className={`bg-transparent text-[16px] leading-[26px] font-regular p-0 ${
                        color ? "hover:text-[#005BC4]" : "hover:text-white"
                      }`}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col min-w-[240px] list-none">
                      {dropdown.map((item) => (
                        <NavigationMenuItem
                          key={item.id}
                          className="border-b border-gray-100/70 px-4 py-2"
                        >
                          <Link
                            href="/"
                            className=" text-[16px] text-[#0B305B] leading-[26px] font-sans transition-colors hover:text-[#4380F0]"
                          >
                            <NavigationMenuLink>{item.menu}</NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/"
                      className={`font-sans text-[16px] leading-[26px] font-regular px-6 py-3 hover:border-b transition-colors duration-700 ${
                        color ? "border-[#005BC4]" : "border-white"
                      }`}
                    >
                      <NavigationMenuLink>Service</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/"
                      className={`font-sans text-[16px] leading-[26px] font-regular px-6 py-3 hover:border-b transition-colors duration-700 ${
                        color ? "border-[#005BC4]" : "border-white"
                      }`}
                    >
                      <NavigationMenuLink>About Us</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* location component */}
              <div className="relative" ref={dropdownRef}>
                {/* Dropdown Trigger Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`outline-none border px-3 py-2 rounded-full flex items-center gap-2 transition-colors ${
                    color
                      ? "text-[#005BC4] border-[#005BC4]"
                      : "text-white border-white"
                  }`}
                >
                  <Globe className="size-5" />
                  <span>En</span>
                  <ChevronDown
                    className={`size-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute min-w-[210px] top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden">
                    {language.map((lan) => (
                      <div
                        key={lan.id}
                        className="border-b border-gray-100 last:border-0 px-4 py-2 cursor-pointer text-[#0B305B] transition-colors hover:text-[#4380F0] whitespace-nowrap"
                        onClick={() => setIsOpen(false)}
                      >
                        {lan.menu}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              className={`text-[16px] text-white  font-sans font-semibold leading-6 flex items-center justify-center gap-2 rounded shadow-md hover:shadow-xl w-full lg:w-auto transition-colors duration-100 px-8 py-[14px] group ${
                color
                  ? "bg-[#FE8B53] hover:bg-[#FF8144] text-white"
                  : "bg-transparent border hover:bg-white hover:text-[#005BC4] border-white "
              }`}
            >
              <span>Contact Us</span>
              <span className="transform group-hover:translate-x-1 transition-all duration-300">
                <ChevronRightIcon className="size-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
