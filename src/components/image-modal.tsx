'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageModal({ src, alt, width, height, className }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <>
      {/* 클릭 가능한 이미지 */}
      <div 
        className="cursor-pointer transition-transform hover:scale-[1.02]"
        onClick={openModal}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>

      {/* 모달 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
              aria-label="모달 닫기"
            >
              ✕
            </button>
            
            {/* 확대된 이미지 */}
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-full object-contain rounded-lg"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
} 