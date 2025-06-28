import About, { meta } from '@/content/bio/about'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-5xl mx-auto">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
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
        </div>
        
        <article className="prose dark:prose-invert">
          {/* <h1 className="text-4xl font-bold mb-8">{meta.title}</h1> */}
          {/* <div className="mb-8">
            <p className="text-lg opacity-70">{meta.description}</p>
          </div> */}
          <div className="mdx-content">
            <About title={meta.title} description={meta.description} />
          </div>
        </article>
      </div>
    </div>
  )
} 