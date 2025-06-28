import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from 'next/link'

interface ProjectMeta {
  title?: string
  description?: string
  order?: number
}

interface ProjectComponentProps {
  meta?: ProjectMeta
}

async function getProject(slug: string) {
  const fullPath = path.join(process.cwd(), 'src/content/projects', `${slug}.tsx`)
  
  // 파일이 존재하는지 확인
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  try {
    // 메타데이터를 import
    const projectModule = await import(`@/content/projects/${slug}`)
    const meta = projectModule.meta || {}
    
    return {
      slug,
      fullPath,
      meta
    }
  } catch (error) {
    console.warn(`Failed to import project ${slug}:`, error)
    return {
      slug,
      fullPath,
      meta: {}
    }
  }
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  
  const project = await getProject(slug)
  
  if (!project) {
    notFound()
  }
  
  // TSX 파일을 동적으로 import
  const ProjectComponent = dynamic(() => import(`@/content/projects/${slug}`), {
    loading: () => <div>Loading...</div>,
    ssr: true
  }) as React.ComponentType<ProjectComponentProps>
  
  return (
    <div className="min-h-screen p-24">
      {/* 뒤로가기 버튼 */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
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
          프로젝트 목록으로 돌아가기
        </Link>
      </div>
      
      <ProjectComponent meta={project.meta} />
      
      {/* 하단 뒤로가기 버튼 */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
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
          프로젝트 목록으로 돌아가기
        </Link>
      </div>
    </div>
  )
} 