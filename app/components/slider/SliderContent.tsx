import { SliderContentProps } from "@/data/type";
import Image from "next/image";
import React from "react";
export default function SliderContent({
  subtitle,
  title,
  strongParagraph,
  paragraph,
  image,
}: SliderContentProps) {
  return (
    <div className="lg:p-14 p-6  rounded-[20px] bg-white shadow-blue w-full h-full">
      <div className="lg:flex lg:flex-row lg:gap-10 flex-col gap-8 items-center">
        {/* Content (60%) */}
        <div className="flex-[3] space-y-6">
          <h6 className="font-sans_serif text-xs lg:text-[16px] font-bold lg:leading-6 text-[#1F80F0] tracking-widest uppercase">
            {subtitle}
          </h6>
          <h3 className="font-sans_serif font-semibold lg:text-[40px] lg:leading-[48px] text-[#0B305B] text-2xl leading-9">
            {title}
          </h3>
          <div className="flex-[3] md:hidden ">
            <Image
              src={image}
              alt="image"
              className="w-full h-[425px] object-cover rounded-[16px]"
            />
          </div>
          <div>
            <strong className="font-sans font-bold text-sm md:text-[16px] text-[#204B7D] leading-[26px]">
              {strongParagraph}
            </strong>
            <p className="paragraph mt-6">{paragraph}</p>
          </div>
        </div>

        {/* Image (40%) */}
        <div className="flex-[3] md:block hidden pt-8">
          <Image
            src={image}
            alt="image"
            className="w-full h-[425px] object-cover rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
}
