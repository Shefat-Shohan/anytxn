"use client";
import { CounterProps } from "@/data/type";
import { useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function Counter({ targetNumber, before, after }: CounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = React.useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let currentCount = 0;
    const duration = 2000; // Total animation duration in milliseconds
    const steps = 60; // Number of updates per second (for smooth animation)
    const intervalTime = duration / steps; // Time per update
    const stepSize = targetNumber / steps; // Adjust step size dynamically

    const interval = setInterval(() => {
      currentCount += stepSize;
      if (currentCount >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(Math.round(currentCount)); // Round to avoid decimals
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView, targetNumber]);

  return (
    <div ref={counterRef}>
      <h1 className="lg:text-[96px] lg:leading-[96px] text-[64px] leading-[64px] font-semibold bg-gradient-to-t from-[#0861C8] to-[#1674E0] bg-clip-text text-transparent">
        <span>{before}</span>
        <span>{count}</span>
        <span>{after}</span>
      </h1>
    </div>
  );
}
