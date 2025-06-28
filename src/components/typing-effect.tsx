'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
  repeatDelay?: number
}

export default function TypingEffect({ text, speed = 100, className = '', repeatDelay = 2000 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length) {
      // 타이핑 완료 후 대기
      const timeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
        setIsTyping(true)
      }, repeatDelay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isTyping, repeatDelay])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
} 