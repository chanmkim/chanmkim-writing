'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import TypingEffect from '@/components/typing-effect'
import { useEffect, useState } from 'react'

export default function Home() {
  const [matrixChars, setMatrixChars] = useState<string[]>([])
  const [windowHeight, setWindowHeight] = useState(1000) // 기본값 설정

  useEffect(() => {
    // window 객체가 있을 때만 높이 설정
    setWindowHeight(window.innerHeight)

    // resize 이벤트 리스너 추가
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'
    const matrixCharsArray = Array.from({ length: 100 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    )
    setMatrixChars(matrixCharsArray)

    const interval = setInterval(() => {
      setMatrixChars(prev => 
        prev.map(() => chars[Math.floor(Math.random() * chars.length)])
      )
    }, 100)

    // cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* 매트릭스 배경 */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* 매트릭스 문자들 */}
        <div className="absolute inset-0 overflow-hidden">
          {matrixChars.map((char, index) => (
            <motion.div
              key={index}
              className="absolute text-green-400 text-xs font-mono opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              animate={{
                y: [0, windowHeight],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>

        {/* 매트릭스 그리드 효과 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-green-900/20" />
        
        {/* 추가적인 매트릭스 레이어 */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`column-${i}`}
              className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent"
              style={{ left: `${(i * 5) % 100}%` }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* 매트릭스 코드 레인 효과 */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`rain-${i}`}
              className="absolute top-0 text-green-400 text-sm font-mono opacity-60"
              style={{ 
                left: `${(i * 7) % 100}%`,
                fontSize: `${12 + Math.random() * 8}px`
              }}
              animate={{
                y: [0, windowHeight],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            >
              {Array.from({ length: 20 }, () => 
                String.fromCharCode(0x30A0 + Math.random() * 96)
              ).join('')}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 상단 소개 섹션 */}
      <motion.div 
        className="z-10 max-w-5xl w-full text-center pt-8 sm:pt-12 md:pt-16 min-h-[160px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">안녕하세요, 김찬민입니다</span> 👋
        </h1>
      </motion.div>

      {/* 중앙 메인 문구 */}
      <motion.div 
        className="flex-1 flex items-center justify-center z-10 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-shimmer bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage: 'linear-gradient(to right, #f1f1f1, #ffffff, #e2e2e2, #ffffff)',
              backgroundSize: '200% 200%',
              textShadow: '0 0 15px rgba(255,255,255,0.3), 0 0 25px rgba(255,255,255,0.2)',
              filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.4))'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              filter: [
                'drop-shadow(0 0 3px rgba(255,255,255,0.4))',
                'drop-shadow(0 0 12px rgba(255,255,255,0.6))',
                'drop-shadow(0 0 3px rgba(255,255,255,0.4))'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TypingEffect 
              text="Creator(Software) is eating the world!"
              speed={100}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
              repeatDelay={5000}
            />
          </motion.h2>
        </div>
      </motion.div>

      {/* 하단 메뉴 섹션 */}
      <motion.div 
        className="z-10 max-w-5xl w-full pb-8 sm:pb-12 md:pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="group block rounded-xl border border-green-400/30 px-6 py-4 transition-all duration-300 hover:border-green-300 hover:bg-green-900/20 backdrop-blur-sm bg-black/20"
            >
              <h2 className="mb-3 text-xl sm:text-2xl font-semibold text-green-400">
                프로젝트{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-green-300/80">
                지금까지 진행했던 프로젝트들을 소개합니다.
              </p>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/about"
              className="group block rounded-xl border border-cyan-400/30 px-6 py-4 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-900/20 backdrop-blur-sm bg-black/20"
            >
              <h2 className="mb-3 text-xl sm:text-2xl font-semibold text-cyan-400">
                소개{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-cyan-300/80">
                제 이력과 기술 스택을 확인해보세요.
              </p>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/writing-list"
              className="group block rounded-xl border border-blue-400/30 px-6 py-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-900/20 backdrop-blur-sm bg-black/20"
            >
              <h2 className="mb-3 text-xl sm:text-2xl font-semibold text-blue-400">
                글 목록{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-blue-300/80">
                Contents, AI, Crypto에 대한 생각을 공유합니다
              </p>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
