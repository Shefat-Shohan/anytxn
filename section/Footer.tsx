"use client";
import Link from "next/link";
import React from "react";
import siteLogo from "@/public/assets/backgrounds/logo.webp";
import Image from "next/image";
import { ChevronRightIcon, LucideLinkedin } from "lucide-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import CtaMobileBg from "@/public/assets/backgrounds/ctaMobileBg.svg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FooterDesktopPatternDark from "@/app/components/icons/FooterDesktopPatternDark";
import FooterDesktopPatternLight from "@/app/components/icons/FooterDesktopPatternLight";
export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const leftX = useTransform(mouseX, [-500, 500], [8, -8]);
  const leftY = useTransform(mouseY, [-500, 500], [8, -8]);

  const rightX = useTransform(mouseX, [-500, 500], [8, -8]);
  const rightY = useTransform(mouseX, [-500, 500], [8, -8]);

  const hadnleMotionValue = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <footer className="relative overflow-clip">
      {/* footer bottom */}

      <div className="cta-gradient slantedMobileFooterDiv lg:slantedFooterDiv w-full h-[60vh]">
        <Image
          src={CtaMobileBg}
          alt="ctaBg"
          className="lg:hidden absolute top-20 left-0 object-cover -z-10 w-full"
        />
        {/* desktop background pattern */}
        <motion.div onMouseMove={hadnleMotionValue}>
          <motion.div
            style={{ x: leftX, y: leftY, opacity: 1 }}
            transition={{ type: "spring", shiftness: 200, damping: 25 }}
            className="hidden lg:block absolute object-cover -top-20 right-[10%] w-full"
          >
            <FooterDesktopPatternDark className="slide-in-left" />
          </motion.div>

          <motion.div
            className="hidden lg:block absolute object-cover bottom-[15%] right-0 -z-10 w-full"
            style={{ x: rightX, y: rightY, opacity: 1 }}
            transition={{ type: "spring", shiftness: 200, damping: 25 }}
          >
            <FooterDesktopPatternLight className="slide-in-right" />
          </motion.div>
        </motion.div>

        <div className="container w-full h-full flex flex-col justify-center items-start">
          <div className="mt-12">
            <h2 className="max-w-3xl font-sans_serif lg:text-[56px] lg:leading-[62px] text-[32px] leading-[38px] font-semibold text-white mb-[24px]">
              Legacy no longer
            </h2>
            <p className="text-[16px] font-semibold leading-7 font-sans_serif text-white mb-[30px]">
              Talk to us to find out how we can transform your organisation for
              the future
            </p>

            <button className="text-[16px] text-white bg-[#FE8B53] px-10 py-[14px] font-sans  font-semibold leading-6 flex items-center justify-center gap-2 rounded shadow-md w-full lg:w-auto group">
              <span className="transform group-hover:-translate-x-1 transition-all duration-300">
                Contact Us
              </span>
              <span className="transform group-hover:translate-x-1 transition-all duration-300">
                <ChevronRightIcon className="size-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* footer mid */}
      <div className="bg-[#002045] py-11 border-b border-blue-900">
        <div className="container flex flex-row lg:gap-0 gap-2 justify-between items-center">
          <Link href={"/"}>
            <Image src={siteLogo} alt="site logo" />
          </Link>
          <div className="lg:flex hidden items-center gap-6">
            <p className="text-[#00e9ea] font-sans font-semibold text-[16px] leading-[26px] border-r border-[#1f80f0]  px-6 py-4">
              Our Solutions
            </p>
            <ul className="flex gap-4 font-sans text-[16px] leading-[26px] text-[#00e9ea]">
              <li className="">
                <Link
                  className="hover:text-[#1f80f0] transition-colors"
                  href={"/"}
                >
                  AnyCaaS
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#1f80f0] transition-colors"
                  href={"/"}
                >
                  AnyBaaS
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="hover:text-[#1f80f0] transition-colors"
                  href={"/"}
                >
                  AnyPaaS
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex">
            {/* social icon for tablet */}
            <ul className="flex gap-3">
              <li>
                <EnvelopeIcon className="size-6 text-[#1D7FF0]" />
              </li>
              <li>
                <PhoneIcon className="size-6 text-[#1D7FF0]" />
              </li>
              <li>
                <LucideLinkedin className="size-6 text-[#1D7FF0]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="bg-[#00152D] py-8">
        <div className="container flex lg:flex-row flex-col lg:gap-0 gap-2 justify-between items-center">
          <p className="text-[#1F80F0] font-sans text-[12px] leading-5">
            <strong className="font-bold">©2023 All rights reserved. </strong>
            Any Technology Pte Ltd.
          </p>
          <Link
            href={"/"}
            className="text-[#1F80F0] font-sans text-[12px] font-bold hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
