'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface menuItemProps {
  text: string
  link: string
}

const variants = {
  open: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ text, link }: menuItemProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 list-none mb-5 flex items-center cursor-pointer text-2xl"
    >
      <Link
        href={link}
        className="w-52 h-5 flex-[1] border-white rounded-sm z-40 text-white"
      >
        {text}
      </Link>
    </motion.li>
  )
}
