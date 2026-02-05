"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false);

  const handleBookCall = () => {
    window.open("https://cal.com/jatin-yadav05/15min", "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-center px-6 py-12 md:py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/50"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147 51 234 / 0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl opacity-50 md:opacity-100"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl opacity-50 md:opacity-100"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200"
          >
            <span className="text-sm font-semibold text-purple-700">Let's Create Something Amazing</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
            >
              <span className="block text-gray-900">Ready to start</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                your project?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Let's discuss your vision and create something extraordinary together.
              Book a free consultation call today.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <button
              onClick={handleBookCall}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-5 sm:px-12 sm:py-6 bg-purple-600 text-white rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700"
                animate={{
                  backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />

              {/* Button content */}
              <span className="relative flex items-center gap-3">
                Book a Free Call
                <motion.div
                  animate={{
                    x: isHovered ? 5 : 0,
                    y: isHovered ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </motion.div>
              </span>

              {/* Shine effect */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ width: '50%' }}
                  />
                )}
              </AnimatePresence>
            </button>

            {/* Decorative elements around button */}
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-full bg-purple-500 blur-xl -z-10"
            />
          </motion.div>

          {/* Info text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
            <a
              href="mailto:hello@koderio.com"
              className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              hello@koderio.com
            </a>
          </motion.div>

          {/* Stats or social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-8 sm:gap-16 pt-8 border-t border-purple-200/50 max-w-3xl w-full"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-purple-600">50+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-purple-600">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-purple-600">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

