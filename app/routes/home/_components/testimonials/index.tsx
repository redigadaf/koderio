"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials as initialTestimonials } from './data';
import { Testimonial } from './types';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialHeader } from './TestimonialHeader';
import { NavigationButtons } from './NavigationButtons';

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(initialTestimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-gradient-to-b from-purple-100/50 via-purple-100/30 to-purple-100/50"
      style={{ height: cardSize === 290 ? 600 : 750 }}
    >
      <TestimonialHeader />

      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      <NavigationButtons
        onPrevious={() => handleMove(-1)}
        onNext={() => handleMove(1)}
      />
    </motion.div>
  );
};