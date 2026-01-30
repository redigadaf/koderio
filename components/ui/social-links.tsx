"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Social {
  name: string
  image: string
  icon?: React.ReactNode
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[]
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null)
  const [rotation, setRotation] = React.useState<number>(0)
  const [clicked, setClicked] = React.useState<boolean>(false)

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  }

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true)
      setTimeout(() => {
        setClicked(false)
      }, 200)
    }
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [clicked])

  return (
    <div
      className={cn("flex items-center justify-center gap-0", className)}
      {...props}
    >
      {socials.map((social, index) => (
        <div
          className={cn(
            "relative cursor-pointer px-2 py-2 transition-opacity duration-200",
            hoveredSocial && hoveredSocial !== social.name
              ? "opacity-50"
              : "opacity-100"
          )}
          key={index}
          onMouseEnter={() => {
            setHoveredSocial(social.name)
            setRotation(Math.random() * 20 - 10)
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => {
            setClicked(true)
          }}
        >
          {social.icon ? (
            <span className="block text-lg font-medium text-gray-400 hover:text-purple-600 transition-colors">{social.icon}</span>
          ) : (
            <span className="block text-lg font-medium">{social.name}</span>
          )}
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center z-50 pointer-events-none"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="h-10 w-10 rounded-md object-contain"
                  initial={{
                    y: -20, // Reduced initial offset
                    rotate: rotation,
                    opacity: 0,
                    filter: "blur(2px)",
                  }}
                  animate={{ y: -35, opacity: 1, filter: "blur(0px)" }} // Reduced animate offset
                  exit={{ y: -20, opacity: 0, filter: "blur(2px)" }} // Reduced exit offset
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}