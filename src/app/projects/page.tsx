import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  slug: string
  order?: number
  icon?: string
}

async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects')
  const fileNames = fs.readdirSync(projectsDirectory)
  
  const projects = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.tsx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.tsx$/, '')
        
        try {
          // TSX 파일에서 메타데이터를 동적으로 import
          const projectModule = await import(`@/content/projects/${slug}`)
          const meta = projectModule.meta || {}
          
          // slug에 따라 아이콘 경로 지정
          let icon = ''
          if (slug === '1') {
            icon = '/stealthmode.jpeg'
          } else if (['2', '3', '4'].includes(slug)) {
            icon = '/gmarket.png'
          } else if (slug === '5') {
            icon = '/aidkr_logo.jpg'
          }
          
          return {
            title: meta.title || slug.charAt(0).toUpperCase() + slug.slice(1),
            description: meta.description || '프로젝트 설명',
            slug: slug,
            order: meta.order || 999,
            icon,
          }
        } catch {
          // import 실패 시 기본값 사용
          let icon = ''
          if (slug === '1') {
            icon = '/stealthmode.jpeg'
          } else if (['2', '3', '4'].includes(slug)) {
            icon = '/gmarket.png'
          } else if (slug === '5') {
            icon = '/aidkr_logo.jpg'
          }
          return {
            title: slug.charAt(0).toUpperCase() + slug.slice(1),
            description: '프로젝트 설명',
            slug: slug,
            order: 999,
            icon,
          }
        }
      })
  )
  
  // order로 정렬
  return projects.sort((a, b) => a.order - b.order)
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-y-auto">
      {/* 배경 장식 요소들 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'blob 7s infinite'
          }}
        ></div>
        <div 
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'blob 7s infinite 2s'
          }}
        ></div>
        <div 
          className="absolute top-20 sm:top-40 left-20 sm:left-40 w-48 h-48 sm:w-96 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'blob 7s infinite 4s'
          }}
        ></div>
      </div>
      
      <div className="relative p-4 sm:p-8 md:p-12 lg:p-24">
        <div className="max-w-6xl mx-auto">
          {/* 뒤로가기 버튼 */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
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
          
          {/* 헤더 섹션 */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              프로젝트
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              프로덕트의 성장/실행/운영에 대한 경험을 공유합니다
            </p>
          </div>
          
          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project: Project, index: number) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02] dark:bg-gray-800/80 dark:border-gray-700/50 dark:hover:border-purple-400"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                
                <div className="relative p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                          {project.icon && (
                            <Image
                              src={project.icon}
                              alt="프로젝트 아이콘"
                              width={24}
                              height={24}
                              className="object-contain sm:w-8 sm:h-8"
                            />
                          )}
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {project.title}
                        </h2>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* 화살표 아이콘 */}
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 self-start sm:self-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* 하단 장식 요소 */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div 
                        className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                        style={{animationDelay: '0.2s'}}
                      ></div>
                      <div 
                        className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                        style={{animationDelay: '0.4s'}}
                      ></div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                      자세히 보기 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* 하단 뒤로가기 버튼 */}
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-4 sm:px-6 py-3 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
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
        </div>
      </div>
    </div>
  )
} 