import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWritingById, getAllWritings } from '@/content/writings'

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

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="z-10 max-w-4xl w-full">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/writing-list"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          글 목록으로 돌아가기
        </Link>

        {/* 글 헤더 */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                {writing.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {writing.readTime} 읽기
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {writing.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
              {writing.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>작성자: {writing.author}</span>
              <span>{writing.date}</span>
            </div>
          </header>

          {/* 글 내용 */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: writing.content }}
          />
        </article>

        {/* 관련 글 추천 */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6">다른 글들도 읽어보세요</h3>
          <div className="grid gap-4">
            {getAllWritings()
              .filter(w => w.id !== writing.id)
              .slice(0, 2)
              .map((relatedWriting) => (
                <Link
                  key={relatedWriting.id}
                  href={`/writing-list/${relatedWriting.id}`}
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <h4 className="font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                    {relatedWriting.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {relatedWriting.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
} 