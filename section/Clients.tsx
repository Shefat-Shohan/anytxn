"use client";
import { clientLogo } from "@/data";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import Title from "@/app/components/Title";
import Path from "@/app/components/icons/Path";
export default function Clients() {
  return (
    <div className="overflow-clip relative">
      <div className="pb-10">
        <div className="container">
          <Title subtitle="TRUSTED BY THE BEST" />
          <div className="lg:flex lg:flex-row flex-col gap-y-6 justify-between lg:mx-24">
            {/* first counter */}
            <div className="lg:flex lg:flex-col flex justify-between items-center lg:border-0 border-b border-dashed border-[#b9d9ff] lg:pb-0 py-4">
              <Counter targetNumber={20} before={">"} />
              <h2 className="paragraph font-semibold mt-5 text-center">
                Years of Experience
              </h2>
            </div>
            {/* second counter */}
            <div className="lg:flex lg:flex-col flex justify-between items-center lg:border-0 border-b border-dashed border-[#b9d9ff] lg:pb-0 py-4">
              <Counter targetNumber={40} after={"+"} />
              <h2 className="paragraph font-semibold mt-5 text-center">
                Financial Institutions
              </h2>
            </div>
            {/* third counter */}
            <div className="lg:flex lg:flex-col flex justify-between items-center lg:border-0 border-b border-dashed border-[#b9d9ff] lg:pb-0 py-4">
              <Counter targetNumber={200} before={">"} after="m" />
              <h2 className="paragraph font-semibold mt-5 text-center">
                Customers Each
              </h2>
            </div>
          </div>
          {/* clients logo */}
          <div className="flex md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center overflow-x-auto whitespace-nowrap gap-x-4 md:gap-x-10 lg:gap-x-16 gap-y-[34px] md:mt-[128px] mt-10 scrollbar-hide">
            {clientLogo.map((logo, index) => (
              <div
                key={index}
                className="min-w-[50%] flex justify-center snap-center"
              >
                <Image
                  src={logo.iamge}
                  alt="client"
                  className="md:w-full md:h-full w-[160px] h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
