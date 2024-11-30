'use client'

import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2"
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 rounded-lg blur-lg opacity-75" />
      </div>
      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
        Alexxe Dev
      </span>
    </motion.div>
  )
}

