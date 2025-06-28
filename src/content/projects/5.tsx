import React from 'react'

const meta = {
  title: "한국축산데이터 - UI & Backend Engineer",
  description: "해외 고객사를 위한 로그인 시스템, 어드민 관리, 실시간 카메라 관리 시스템",
  order: 5
}

interface Project5Props {
  meta?: {
    title?: string
    description?: string
    order?: number
  }
}

const Project5 = ({ meta: propMeta }: Project5Props) => {
  const finalMeta = propMeta || meta

  return (
    <div className="min-h-screen p-6 md:p-24">
      <article className="prose dark:prose-invert max-w-5xl mx-auto">
        {/* 헤더 섹션 */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {finalMeta?.title || "해외 고객사 프로젝트 - Full Stack Developer"}
          </h1>
          <p className="text-xl opacity-80 leading-relaxed">
            {finalMeta?.description || "해외 고객사를 위한 로그인 시스템, 어드민 관리, 실시간 카메라 관리 시스템"}
          </p>
        </header>

        {/* 프로젝트 이미지 */}
        <div className="mb-16">
          <img
            src="/5.jpg"
            alt="해외 고객사 프로젝트"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* 프로젝트 개요 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🌍 프로젝트 개요
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  해외 고객사를 위한 종합적인 웹 애플리케이션 개발 프로젝트로, 
                  다국어 지원 로그인 시스템부터 실시간 카메라 관리까지 
                  전반적인 시스템을 구축하였습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 주요 기능 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🚀 주요 기능
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 로그인 시스템 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  🔐 로그인 시스템
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>해외 고객사를 위한 다국어 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>i18n 라이브러리를 활용한 자동번역 기능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>반응형 화면 설계 및 구현</span>
                  </li>
                </ul>
              </div>

              {/* 어드민 관리 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  👨‍💼 어드민 관리
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>회원등급 관리 시스템</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>React 기반 상태관리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>직관적인 관리자 인터페이스</span>
                  </li>
                </ul>
              </div>

              {/* 실시간 카메라 관리 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  📹 실시간 카메라 관리
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>TypeORM을 활용한 DB 설계</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>실시간 스트리밍 기능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>고객사별 카메라 접근 권한 관리</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-teal-200/50 dark:border-teal-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🛠️ 기술 스택
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  프론트엔드
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500">⚛️</span>
                      <span>React</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500">🌐</span>
                      <span>i18n (다국어 지원)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500">🎨</span>
                      <span>CSS/SCSS</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  백엔드 & 데이터베이스
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">🗄️</span>
                      <span>TypeORM</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">📊</span>
                      <span>데이터베이스 설계</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">🔌</span>
                      <span>API 개발</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 프로젝트 성과 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              📈 프로젝트 성과
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>해외 고객사의 다국어 요구사항을 충족하는 로그인 시스템 구축</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>효율적인 회원등급 관리 시스템으로 운영 효율성 증대</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>TypeORM을 활용한 확장 가능한 데이터베이스 구조 설계</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>실시간 카메라 관리 기능으로 고객사 만족도 향상</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export { meta }
export default Project5
