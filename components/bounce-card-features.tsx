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
      className="mx-auto max-w-7xl px-4 py-12 text-foreground"
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Why Choose Us?
          <span className="text-muted-foreground block text-2xl md:text-3xl mt-2"> The complete marketplace for digital assets</span>
        </h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-500/30">
            Start Selling
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Row 1 */}
        <BounceCard className="col-span-12 md:col-span-4 bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <CardTitle>Daily Progress Report</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-purple-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              Get daily updates & quick turnarounds
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <CardTitle>Flat Monthly Pricing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Unlimited Revisions & Tasks
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <CardTitle>Dedicated Designer</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-cyan-50">
              + Dedicated Project Manager
            </span>
          </div>
        </BounceCard>

        {/* Row 2 */}
        <BounceCard className="col-span-12 md:col-span-4 bg-indigo-100 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
          <CardTitle>Seamless Workflow</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-indigo-400 to-purple-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-purple-50">
              Tailored for MVPs and redesigns
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8 bg-pink-100 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800">
          <CardTitle>Industry Experience</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-rose-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-rose-50">
              Finance, Ecommerce, CRM, Sales, Marketing & more
            </span>
          </div>
        </BounceCard>

        {/* Row 3 */}
        <BounceCard className="col-span-12 md:col-span-4 bg-cyan-100 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
          <CardTitle>Free Custom Icons</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-cyan-400 to-teal-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-teal-50">
              Tailored illustrations to your needs
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <CardTitle>Clutch 5.0</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-red-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Proven Client Satisfaction
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-emerald-100 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
          <CardTitle>Quick Communication</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-emerald-400 to-green-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-green-50">
              Flexible & Responsive
            </span>
          </div>
        </BounceCard>

        {/* Row 4 */}
        <BounceCard className="col-span-12 md:col-span-8 bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
          <CardTitle>Time Zone Agility</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-fuchsia-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-fuchsia-50">
              Continuous attention, any time zone
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <CardTitle>Work Together?</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-yellow-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-yellow-900">
              Start Your Project Today
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
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold dark:text-white">{children}</h3>
  );
};