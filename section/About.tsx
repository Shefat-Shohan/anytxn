"use client";
import React from "react";
import model from "@/public/assets/backgrounds/financeFigure.png";
import Image from "next/image";
import financeForeGround from "@/public/assets/backgrounds/financeforeground.png";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import FutureFinance from "@/app/components/icons/FutureFinance";
import Card from "@/app/components/icons/Card";
import Graph from "@/app/components/icons/Graph";
import Finance from "@/app/components/icons/Finance";
import Path from "@/app/components/icons/Path";
export default function About() {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );
  return (
    <section className="overflow-hidden lg:mt-0 mt-6">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[15px] lg:gap-10 items-center">
          {/* left content */}
          <div className="max-w-xl space-y-6">
            <h2 className="font-sans_serif text-xs lg:text-[16px] font-bold lg:leading-6 text-[#1F80F0] tracking-widest uppercase">
              POWERING THE FUTURE OF FINANCE
            </h2>
            <h1 className="font-sans_serif font-semibold lg:text-[56px] lg:leading-[62px] text-[#0B305B] text-[32px] leading-[38px]">
              Uncovering new ways to delight customers
            </h1>
            <div className="hidden md:block">
              <h3 className="font-sans font-bold text-[16px] text-[#204B7D] leading-[26px]">
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </h3>
              <p className="font-sans pt-6 text-[16px] leading-[26px] text-[#204B7D]">
                Our modern approach surpasses traditional banking and card
                processing systems, empowering you with the most advanced
                technology for lasting success.
              </p>
            </div>
          </div>

          {/* right images */}
          <div className="relative w-full lg:w-[600px] h-[550px] mx-auto overflow-clip md:mt-0 lg:mt-0 -mt-20">
            {/* SVG (Larger and Filling the Parent) */}
            <motion.div
              style={{ translateY, transition: "transform 0.5s ease-out" }}
              className="absolute inset-0 w-full h-full mx-auto"
            >
              <FutureFinance />
            </motion.div>

            {/* Image (Centered on the SVG) */}
            <Image
              src={model}
              alt="model"
              className="absolute bottom-10 md:bottom-[6%] left-8 md:left-5 w-[80%] h-[auto] lg:h-full lg:left-[10%] lg:top-[12%] md:h-[350px] md:w-[70%] sm:h-[460px] object-cover z-1 shadow-lg"
            />

            {/* Foreground Image */}
            <Image
              src={financeForeGround}
              alt="foreground"
              className="absolute h-[50%] w-[90%] z-10 -bottom-[20%] left-[5%] sm:left-[0%] md:w-[80%] rotate-12 md:h-[45%]"
            />
            {/* Card Component */}
            <motion.div
              animate={{ translateY: [-20, 15] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 9,
                ease: "easeInOut",
              }}
              className="absolute top-[50%] md:top-[45%] left-[2%] sm:left-[3%] md:left-[0%]  lg:left-[5%] lg:top-[35%]"
            >
              <Card className="size-16 lg:size-auto" />
            </motion.div>

            {/* Graph Component */}
            <motion.div
              animate={{ translateY: [-15, 15] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 12,
                ease: "easeInOut",
              }}
              className="absolute top-[60%] md:top-[60%] md:left-[20%] left-[25%]  lg:top-[50%]"
            >
              <Graph className="size-16 lg:size-auto" />
            </motion.div>

            {/* Finance Component */}
            <motion.div
              animate={{ translateY: [-20, 20] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 15,
                ease: "easeInOut",
              }}
              className="absolute lg:top-[30%] lg:right-[8%] top-[45%] right-[0%] sm:right-[15%]  md:top-[40%] md:right-[8%] "
            >
              <Finance className="lg:size-auto size-24" />
            </motion.div>
          </div>
          {/* mobile content */}
          <div className="md:hidden block mt-6">
            <h3 className="font-sans font-bold text-[16px] text-[#204B7D] leading-[26px]">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </h3>
            <p className="font-sans text-[16px] leading-[26px] text-[#204B7D]">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>
      </div>
      <Path className="-mt-20 lg:mt-0" />
    </section>
  );
}
