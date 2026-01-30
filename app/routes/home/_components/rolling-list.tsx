"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: "purple";
}

interface RollingTextItemProps {
  item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
  purple: "text-purple-600",
};

function RollingTextItem({ item }: RollingTextItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-6"
    >
      {/* Rolling text */}
      <div className="relative overflow-hidden h-[60px] md:h-20">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          {/* State 1: Normal */}
          <div className="h-[60px] md:h-20 flex items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground uppercase tracking-tighter">
              {item.title}
            </h2>
          </div>

          {/* State 2: Hover (Italic + Color) */}
          <div className="h-[60px] md:h-20 flex items-center">
            <h2
              className={cn(
                "text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter italic",
                colorClassMap[item.color]
              )}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Category Label */}
      <span className="absolute top-8 right-0 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
        {item.category}
      </span>

      {/* Image Reveal Effect - Hidden on mobile, visible on desktop */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl hidden md:block",
          "transition-all duration-500 ease-out",
          "opacity-0 scale-95 rotate-3 translate-x-4",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0"
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-purple-600/15 mix-blend-overlay" />
        </div>
      </div>

    </motion.div>
  );
}

function RollingTextList() {
  const items: ListItem[] = [
    {
      id: 1,
      title: "Web Dev",
      category: "Full Stack",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
      alt: "Web Development",
      color: "purple",
    },
    {
      id: 2,
      title: "App Dev",
      category: "iOS & Android",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=60",
      alt: "Mobile App Development",
      color: "purple",
    },
    {
      id: 3,
      title: "UI/UX",
      category: "Design System",
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=60",
      alt: "UI/UX Design",
      color: "purple",
    },
    {
      id: 4,
      title: "Consulting",
      category: "Tech Strategy",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop&q=60",
      alt: "IT Consulting",
      color: "purple",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-6 sm:px-8 lg:px-12 py-32"
    >
      <div className="mb-20 px-2 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6"
        >
          <span className="text-sm font-semibold text-purple-700">Our Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          <span className="block text-gray-900">What we</span>
          <span className="block text-purple-600">
            provide
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed"
        >
          Comprehensive digital solutions tailored to elevate your business.
        </motion.p>
      </div>
      <motion.div
        className="w-full flex flex-col px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {items.map((item) => (
          <RollingTextItem key={item.id} item={item} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export { RollingTextList };
