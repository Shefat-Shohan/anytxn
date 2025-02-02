"use client";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { buttonLabel, carousel } from "@/data";
import SliderContent from "./SliderContent";
import Path from "../icons/Path";

export default function Slider() {
  const swiperRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Change 1024px as per your breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index); // Update active button
    }
  };

  return (
    <div className="relative">
      {/* Custom Navigation Buttons at the Top */}
      <div className="lg:flex justify-center gap-6 my-8 hidden">
        {buttonLabel.map((label, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`px-8 py-2 mx-2 rounded-full transition ${
              activeIndex === index
                ? "bg-[#B9D9FF]" // Active button style
                : "bg-tranaparent hover:bg-[#F5FAFF]"
            }`}
          >
            <span className="font-sans text-[18px] leading-8 font-semibold text-[#1F80F0]">
              {label}
            </span>
          </button>
        ))}
      </div>
      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        pagination={isMobile ? { clickable: true } : false}
        spaceBetween={10}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active button when slide changes
      >
        {carousel.map((item, index) => (
          <SwiperSlide key={index} className="pb-10 px-0 lg:px-7 mt-8 lg:mt-0">
            <SliderContent
              subtitle={item.subtitle}
              title={item.title}
              strongParagraph={item.strongParagraph}
              paragraph={item.paragraph}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
