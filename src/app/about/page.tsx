'use client'

import About from '@/content/bio/about'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-4 sm:p-6 md:p-8 lg:p-24 relative overflow-hidden"
    >
      {/* 마우스 움직임에 반응하는 그라데이션 */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(167,139,250,0.15), transparent)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* 개선된 네온 효과 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500/30 rounded-full blur-3xl"
        />
        
        {/* 뒤로가기 버튼 */}
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            메인으로 돌아가기
          </Link>
        </motion.div>
        
        <motion.article 
          className="prose dark:prose-invert relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20"
            whileHover={{
              boxShadow: "0 0 50px rgba(167,139,250,0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="mdx-content">
              <About />
            </div>
          </motion.div>
        </motion.article>

        {/* 하단 중앙 뒤로가기 버튼 */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base font-medium text-white bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(167,139,250,0.6)] hover:scale-110 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            메인으로 돌아가기
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 