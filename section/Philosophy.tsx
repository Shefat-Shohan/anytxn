import React from "react";
import Image from "next/image";
import innovation from "@/public/assets/backgrounds/innovation.png";
import innovationMobile from "@/public/assets/backgrounds/innovationmobile.png";
import share from "@/public/assets/icons/Share.svg";
import chip from "@/public/assets/icons/chip.svg";
import Cards from "@/app/components/Cards";
import Title from "@/app/components/Title";
import bulb from "@/public/assets/icons/bulb.svg";
export default function Philosophy() {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <Title subtitle="OUR PHILOSOPHY" title="Human-centred innovation" />
        <Image
          src={innovation}
          alt="bridge"
          className="mt-12 hidden md:block"
        />
        <Image
          src={innovationMobile}
          alt="bridge"
          className="mt-12 sm:block md:hidden"
        />
        <div className="pt-[26px] overflow-x-auto md:overflow-hidden scrollbar-hide">
          <div className="flex sm:grid lg:grid-cols-3 md:grid-cols-2 gap-[26px]">
            <Cards
              duration={0.3}
              image={share}
              title="Full-suite solutions"
              paragraph="Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions."
            />
            <Cards
              duration={0.5}
              image={bulb}
              title="Simplify the complex"
              paragraph="Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data."
            />
            <Cards
              duration={0.7}
              image={chip}
              title="Cutting-edge tech"
              paragraph="We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
