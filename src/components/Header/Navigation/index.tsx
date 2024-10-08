import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from '../MenuItem'

export const navbarItems = [
  { text: 'Home', link: '/' },
  { text: 'Contato', link: '/Contato' },
]

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'block',
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

export const Navigation = () => (
  <motion.ul variants={variants} className="m-0 p-6 ">
      {navbarItems.map(({ text, link }) => (
        <MenuItem text={text} key={text} link={link} />
      ))}
    </motion.ul>
)