"use client";
import Image from "next/image";
import modelImage from "@/public/assets/backgrounds/figure.png";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { motion, useMotionValue, useTransform } from "framer-motion";
import HeroDesktopPattern1 from "@/app/components/icons/HeroDesktopPattern1";
import HeroDesktopPattern2 from "@/app/components/icons/HeroDesktopPattern2";
import HeaderMobilePattern from "@/app/components/icons/HeaderMobilePattern";
import HeaderMobilePattern2 from "@/app/components/icons/HeaderMobilePattern2";
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tranform value to move elements in opposite directions
  const leftX = useTransform(mouseX, [-500, 500], [10, -10]);
  const leftY = useTransform(mouseY, [-500, 500], [10, -10]);

  const rightX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const rightY = useTransform(mouseY, [-500, 500], [-10, 10]);

  // handle mouse movement using motion value

  const handleMotionValue = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();

    const centerX = width / 2;
    const centerY = height / 2;

    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };
  return (
    <section className="relative">
      <div className="primary-gradient md:h-[60vh] h-[100vh] lg:h-[90vh] relative overflow-clip slanteMobiledDiv lg:slantedDiv">
        {/* desktop pattern */}

        <motion.div onMouseMove={handleMotionValue}>
          <motion.div
            style={{ x: rightX, y: leftY, transition: "all 0.5s ease-out" }}
            initial={{ x: "-30%", y: "-30%" }}
            animate={{ x: "0%", y: "0%" }}
            transition={{
              duration: 1.3,
              ease: "easeIn",
            }}
            className="lg:block hidden object-cover absolute top-0 -left-[5%] w-[125%]  h-[155%] z-10"
          >
            <HeroDesktopPattern1 />
          </motion.div>
          <motion.div
            style={{ x: leftX, y: rightY, transition: "all 0.5s ease-out" }}
            initial={{ x: "30%", y: "-30%" }}
            animate={{ x: "0%", y: "0%" }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 0.2,
            }}
            className="absolute object-cover -top-[5%] z-10"
          >
            <HeroDesktopPattern2 />
          </motion.div>
        </motion.div>

        {/* hero mobile pattern */}
        <div>
          <HeaderMobilePattern className="lg:hidden block absolute -top-14 md:-top-2 md:left-6 left-0 w-full h-[80%]" />
        </div>
        <div>
          <HeaderMobilePattern2 className="lg:hidden block absolute w-full h-full" />
        </div>

        <div className="container h-full">
          <div className="flex h-full items-center justify-between">
            {/* left content */}
            <div className="lg:flex-[75] space-y-[16px] items-start z-10">
              <h1 className="max-w-3xl font-sans_serif lg:text-[80px] lg:leading-[92px] text-[56px] leading-[64px] font-semibold text-white mt-20 lg:mt-0">
                Embrace the future of finance
              </h1>
              <p className="text-[16px] font-semibold leading-7 font-sans_serif text-white max-w-[600px]">
                Reimagine financial services with AnyTech&apos;s open platform,
                distributed banking solution that powers transformation
              </p>

              <button className="text-[18px] text-white bg-[#FE8B53] px-10 py-[14px] font-sans  font-semibold leading-6 flex items-center justify-center gap-2 rounded shadow-md w-full lg:w-auto group">
                <span className="transform group-hover:-translate-x-1 transition-all duration-300">
                  Reach Out To Us
                </span>
                <span className="transform group-hover:translate-x-1 transition-all duration-300">
                  <ChevronRightIcon className="size-4" />
                </span>
              </button>
            </div>

            {/* right image */}
            <div className="h-full hidden lg:block">
              <Image
                src={modelImage}
                className="parallelpgram-Image slideImage w-[75%] h-[125%] object-cover absolute top-0 -right-20 z-2"
                alt="model image"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={modelImage}
        className="parallelpgramMobile-Image lg:hidden -mt-[50px] md:-mt-[80px]"
        alt="model image"
      />
    </section>
  );
}
