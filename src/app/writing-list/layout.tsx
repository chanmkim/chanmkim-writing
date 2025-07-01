import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '글 목록 - 김찬민',
  description: '김찬민이 작성한 글들을 확인해보세요.',
}

export default function WritingListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 