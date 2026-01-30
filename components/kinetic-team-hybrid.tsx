'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import Image from 'next/image';

/* ---------- Types ---------- */

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

/* ---------- Data ---------- */

const TEAM: TeamMember[] = [
  {
    id: '01',
    name: 'Sarah Chen',
    role: 'Principal Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '02',
    name: 'Michael Rodriguez',
    role: 'Senior Backend Developer',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '03',
    name: 'Emily Zhang',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '04',
    name: 'David Kim',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '05',
    name: 'Jessica Lee',
    role: 'Frontend Architect',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
  },
];

/* ---------- Main Component ---------- */

export default function KineticTeamHybrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeMember = TEAM.find((t) => t.id === activeId);

  // Detect mobile for conditional rendering logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      ref={containerRef}
      className="relative min-h-screen w-full cursor-default bg-background px-6 py-24 text-foreground md:px-12 transition-colors duration-300"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl">
              Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Devs</span>
            </h1>
          </div>
          <div className="h-px flex-1 bg-border mx-8 hidden md:block" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Core Team &apos;24
          </p>
        </motion.header>

        {/* The List */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {TEAM.map((member, index) => (
            <TeamRow
              key={member.id}
              data={member}
              index={index}
              isActive={activeId === member.id}
              setActiveId={setActiveId}
              isMobile={isMobile}
              isAnyActive={activeId !== null}
            />
          ))}
        </motion.div>
      </div>


    </motion.div>
  );
}

/* ---------- Row Component ---------- */

function TeamRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: TeamMember;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: isDimmed ? 0.3 : 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        backgroundColor: isActive ? '#9333ea' : 'transparent',
        color: isActive ? '#ffffff' : 'var(--foreground)',
      }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      className={`group relative border-b border-gray-200 transition-colors duration-300 ${isMobile ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div className="relative z-10 grid grid-cols-12 items-center py-6 px-4 md:px-8">

        {/* Index: 001, 002... */}
        <div className="col-span-2 hidden md:block">
          <span className={`font-mono text-sm tracking-widest ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
            {String(index + 1).padStart(3, '0')}
          </span>
        </div>

        {/* Name */}
        <div className="col-span-12 md:col-span-5 flex items-center gap-4">
          {/* Mobile Index */}
          <span className={`md:hidden font-mono text-xs ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
            {String(index + 1).padStart(3, '0')}
          </span>

          <h2 className="text-xl md:text-3xl font-bold tracking-tight">
            {data.name}
          </h2>

          {/* Arrow icon that appears when active */}
          {isActive && !isMobile && (
            <motion.div
              layoutId="activeArrow"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="hidden md:block"
            >
              <ArrowUpRight size={20} className="text-emerald-400" />
            </motion.div>
          )}
        </div>

        {/* Role */}
        <div className="col-span-12 md:col-span-5 mt-2 md:mt-0 flex items-center justify-between md:justify-start">
          <span className={`text-sm md:text-lg font-medium ${isActive ? 'text-white/90' : 'text-slate-600'}`}>
            {data.role}
          </span>

          {/* Mobile Toggle Icon */}
          <div className={`block md:hidden ${isActive ? 'text-white' : 'text-neutral-500'}`}>
            {isActive ? <Minus size={18} /> : <Plus size={18} />}
          </div>
        </div>
      </div>

      {/* Desktop Floating Image (Centered in Row) */}
      {!isMobile && (
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -10, y: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 6, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -10 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-32 w-28"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl border-4 border-white bg-background shadow-2xl shadow-purple-500/30">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* MOBILE ONLY: Inline Accordion Image */}
      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-black/20"
          >
            <div className="p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={data.image}
                  alt={data.name}
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}