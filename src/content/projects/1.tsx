import React from 'react'
import ImageModal from '@/components/image-modal'

interface Project1Props {
  meta?: {
    title?: string
    description?: string
    order?: number
  }
}

export default function Project1({ meta }: Project1Props) {
  return (
    <div className="min-h-screen p-6 md:p-24">
      <article className="prose dark:prose-invert max-w-5xl mx-auto">
        {/* 헤더 섹션 */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {meta?.title || "미디어 스타트업 - Founder & Product Lead"}
          </h1>
          <p className="text-xl opacity-80 leading-relaxed">
            {meta?.description || "오가닉 컨텐츠를 통한 마케팅, 그리고 AI에이전트 기반의 프로덕트로 매출을 만들었습니다"}
          </p>
        </header>

        {/* 헤더 아래 이미지 */}
        <div className="mb-16">
          <ImageModal
            src="/1.png"
            alt="Stealth Mode 프로젝트"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* 비즈니스 성과 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-pink-200/50 dark:border-pink-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🚀 비즈니스 성과
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  미디어 스타트업 - Founder & Product Lead
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>오가닉 컨텐츠로 오디언스 6000명 달성: 
                      <a href="https://www.youtube.com/@jacob.language" 
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-2 underline">
                        YouTube 채널
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>리드고객 200명 확보: 
                      <a href="https://mlanguage.xyz" 
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-2 underline">
                        mlanguage.xyz
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>운영기간 매출: XXX만원 달성 (24.12 ~ 25.06)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>광고비 0원, API 사용비용을 제외하면 모두 Operating Income으로 전환</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  마케팅 퍼널 - AVG CTOR 30% / CAC $0
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between bg-pink-100 dark:bg-pink-900/30 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎥</span>
                        <div>
                          <div className="font-semibold">유튜브</div>
                          <div className="text-sm opacity-70">오가닉 오디언스 6,000명</div>
                        </div>
                      </div>
                      <div className="text-pink-600 dark:text-pink-400">→</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🌐</span>
                        <div>
                          <div className="font-semibold">웹사이트</div>
                          <div className="text-sm opacity-70">방문 mlanguage.xyz</div>
                        </div>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">→</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">👥</span>
                        <div>
                          <div className="font-semibold">리드 고객</div>
                          <div className="text-sm opacity-70">200명</div>
                        </div>
                      </div>
                      <div className="text-green-600 dark:text-green-400">→</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💰</span>
                        <div>
                          <div className="font-semibold">매출</div>
                          <div className="text-sm opacity-70">XXX만원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI & 머신러닝 스택 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🤖 AI & 머신러닝 스택
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  LLM & 벡터 데이터베이스
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    LangChain
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                    OpenAI
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">LangChain</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• OpenAI GPT-4 통합</li>
                      <li>• 프롬프트 체이닝</li>
                      <li>• 에이전트 오케스트레이션</li>
                      <li>• 메모리 관리</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Vector Database</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 지식베이스 구축</li>
                      <li>• 시맨틱 검색</li>
                      <li>• 컨텍스트 기반 응답 생성</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  AI 에이전트
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-medium">
                    Chatbot
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    Analytics
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">챗봇 시스템</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• LangChain 기반 대화 관리</li>
                      <li>• 컨텍스트 인식 응답</li>
                      <li>• 학습 진도 추적</li>
                      <li>• 실시간 피드백</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">학습 분석 에이전트</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 데이터 기반 학습 패턴 분석</li>
                      <li>• 개인화된 학습 경로 제안</li>
                      <li>• 성과 예측 및 개선점 도출</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 프레임워크 & 라이브러리 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🎯 프레임워크 & 라이브러리
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  핵심 프레임워크
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  상태 관리
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                    Zustand
                  </span>
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                    TanStack Query
                  </span>
                  <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium">
                    React Hook Form
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Zustand: 전역 상태 관리</li>
                  <li>• @tanstack/react-query: 서버 상태 관리</li>
                  <li>• react-hook-form: 폼 상태 관리</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  UI/UX
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    shadcn/ui
                  </span>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    Lucide
                  </span>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    date-fns
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• shadcn/ui: 접근성 높은 UI 컴포넌트</li>
                  <li>• lucide-react: 아이콘</li>
                  <li>• date-fns: 날짜/시간 처리</li>
                  <li>• ts-pattern: 타입 안전한 분기 처리</li>
                  <li>• react-use: React 유틸리티 훅</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 백엔드 서비스 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🗄️ 백엔드 서비스
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  데이터베이스 & 인증
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-medium">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    PostgreSQL
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Supabase</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• PostgreSQL 데이터베이스</li>
                    <li>• 사용자 인증 (Auth)</li>
                    <li>• 실시간 구독</li>
                    <li>• Edge Functions</li>
                    <li>• Storage</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  CMS & 콘텐츠
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    Sanity
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sanity.io</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 콘텐츠 관리</li>
                    <li>• 이미지 최적화</li>
                    <li>• 실시간 프리뷰</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API 통합 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-200/50 dark:border-orange-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🔌 API 통합
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  인공지능 API
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                    OpenAI
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">OpenAI GPT-4</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 챗봇 기능</li>
                    <li>• 문장 분석</li>
                    <li>• 문맥 이해</li>
                    <li>• 발음 평가</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  외부 서비스 API
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                    Channel.io
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    Microsoft Clarity
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                    Google Analytics
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Channel.io: 고객 지원 채팅</li>
                  <li>• Microsoft Clarity: 사용자 행동 분석</li>
                  <li>• Google Analytics: 웹 분석</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 인프라 & 배포 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              ☁️ 인프라 & 배포
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  호스팅 & CDN
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    Vercel
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Vercel</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Edge Functions</li>
                    <li>• CDN</li>
                    <li>• 자동 배포</li>
                    <li>• SSL/TLS</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  개발 도구
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                    ESLint
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium">
                    Prettier
                  </span>
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
                    PostCSS
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• ESLint: 코드 품질 관리</li>
                  <li>• Prettier: 코드 포맷팅</li>
                  <li>• PostCSS: CSS 처리</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 보안 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-red-200/50 dark:border-red-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🔒 보안
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  인증 & 권한
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    NextAuth.js
                  </span>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    JWT
                  </span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
                    OAuth2
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    RBAC
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Next-Auth</li>
                  <li>• JWT 토큰</li>
                  <li>• Role-based 접근 제어</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  데이터 보안
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                    HTTPS
                  </span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                    Encryption
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    SQL Security
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 암호화된 통신 (HTTPS)</li>
                  <li>• 데이터 암호화</li>
                  <li>• SQL 인젝션 방지</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export const meta = {
  title: "에듀테크 스타트업 - Founder & Product Lead",
  description: "오가닉 컨텐츠를 통한 마케팅, 그리고 AI에이전트 기반의 프로덕트로 매출을 만들었습니다",
  order: 1
}
