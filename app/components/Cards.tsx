"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardType } from "@/data/type";

export default function Cards({
  image,
  title,
  paragraph,
  duration = 0.5,
}: CardType) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, ease: "easeIn" }}
      viewport={{ once: true }}
      className="space-y-4 md:space-y-6 bg-[#F8FCFF] p-8 rounded-[20px] min-w-[240px]"
    >
      <Image src={image} alt="image" className="size-12" />
      <h2 className="font-sans_serif text-[24px] font-semibold leading-8 text-[#0b305b]">
        {title}
      </h2>
      <p className="paragraph">{paragraph}</p>
    </motion.div>
  );
}
