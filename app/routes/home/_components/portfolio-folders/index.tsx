"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedFolder } from './AnimatedFolder';
import { portfolioData } from './data';

export default function PortfolioFolders() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-background px-6 py-24 text-foreground md:px-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl mb-4">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An interactive catalog of creative work. Hover over folders to reveal project previews.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {portfolioData.map((folder, index) => (
            <motion.div
              key={folder.title}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedFolder
                title={folder.title}
                projects={folder.projects}
                gradient={folder.gradient}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}