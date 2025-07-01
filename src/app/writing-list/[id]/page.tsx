import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWritingById, getAllWritings, getWritingComponent } from '@/content/writings'
import { Writing1 } from '@/content/writings/1'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const writing = getWritingById(id)
  
  if (!writing) {
    return {
      title: '글을 찾을 수 없습니다 - 김찬민',
    }
  }

  return {
    title: `${writing.title} - 김찬민`,
    description: writing.description,
  }
}

export default async function WritingPage({ params }: PageProps) {
  const { id } = await params
  const writing = getWritingById(id)

  if (!writing) {
    notFound()
  }

  // 글 컴포넌트 렌더링
  const WritingComponent = () => {
    switch (id) {
      case 'why_web3_250701':
        return <Writing1 />
      default:
        return <div>글을 찾을 수 없습니다.</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 헤더 섹션 */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* 뒤로가기 버튼 */}
          <Link
            href="/writing-list"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-200 group"
          >
            <svg className="mr-2 w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            글 목록으로 돌아가기
          </Link>

          {/* 카테고리 및 읽기 시간 */}
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30">
              {writing.category}
            </span>
            <div className="flex items-center text-white/70 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {writing.readTime} 읽기
            </div>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {writing.title}
          </h1>

          {/* 설명 */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            {writing.description}
          </p>

          {/* 작성자 및 날짜 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg">
                  {writing.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">{writing.author}</p>
                <p className="text-white/70 text-sm">작성자</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">{writing.date}</p>
              <p className="text-white/70 text-sm">작성일</p>
            </div>
          </div>
        </div>

        {/* 장식 요소 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* 콘텐츠 영역 */}
          <div className="p-8 sm:p-12">
            <WritingComponent />
          </div>
        </div>

        {/* 관련 글 추천 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            다른 글들도 읽어보세요
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {getAllWritings()
              .filter(w => w.id !== writing.id)
              .slice(0, 2)
              .map((relatedWriting) => (
                <Link
                  key={relatedWriting.id}
                  href={`/writing-list/${relatedWriting.id}`}
                  className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {relatedWriting.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {relatedWriting.readTime}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedWriting.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {relatedWriting.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {relatedWriting.author}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {relatedWriting.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/writing-list"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            모든 글 보기
          </Link>
        </div>
      </main>
    </div>
  )
} 