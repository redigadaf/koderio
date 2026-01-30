"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const BouncyCardsFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-4 py-32 text-foreground bg-gradient-to-b from-white via-purple-50/30 to-white"
    >
      <div className="mb-16 flex flex-col items-center text-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200"
        >
          <span className="text-sm font-semibold text-purple-700">Why Choose Us</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-4xl md:text-6xl lg:text-7xl font-black tracking-tight"
        >
          <span className="block text-gray-900">Everything you need</span>
          <span className="block text-purple-600">
            to succeed
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          The complete marketplace for digital assets with world-class support
        </motion.p>
      </div>

      <div className="grid grid-cols-12 gap-6 px-4 md:px-16">
        {/* Row 1 */}
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200">
          <CardTitle>Daily Progress</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-purple-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Get daily updates & quick turnarounds
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-50 to-cyan-100/50 border-2 border-blue-200">
          <CardTitle>Flat Pricing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Unlimited Revisions & Tasks
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-teal-50 to-emerald-100/50 border-2 border-teal-200">
          <CardTitle>Dedicated Team</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-teal-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Designer + Project Manager
            </span>
          </div>
        </BounceCard>

        {/* Row 2 */}
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-pink-50 to-rose-100/50 border-2 border-pink-200">
          <CardTitle>Seamless Flow</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-600 to-rose-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Tailored for MVPs and redesigns
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-indigo-50 to-purple-100/50 border-2 border-indigo-200">
          <CardTitle>Industry Experience</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Finance, Ecommerce, CRM, Sales, Marketing & more
            </span>
          </div>
        </BounceCard>

        {/* Row 3 */}
        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-orange-50 to-amber-100/50 border-2 border-orange-200">
          <CardTitle>Custom Assets</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-orange-600 to-amber-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Free custom icons & illustrations tailored to your needs
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-green-50 to-emerald-100/50 border-2 border-green-200">
          <CardTitle>5.0 Rating</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-green-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Proven Client Satisfaction
            </span>
          </div>
        </BounceCard>

        {/* Row 4 */}
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-violet-50 to-fuchsia-100/50 border-2 border-violet-200">
          <CardTitle>24/7 Support</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Flexible & Responsive
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-sky-50 to-blue-100/50 border-2 border-sky-200">
          <CardTitle>Global Ready</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-sky-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Any time zone, continuous attention
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-purple-50 to-indigo-100/50 border-2 border-purple-200">
          <CardTitle>Start Today</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-lg">
            <span className="block text-center font-bold text-white">
              Begin Your Project Now
            </span>
          </div>
        </BounceCard>
      </div>
    </motion.section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[220px] cursor-pointer overflow-hidden rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold dark:text-white">{children}</h3>
  );
};