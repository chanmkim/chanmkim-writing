import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">안녕하세요, 김찬민입니다 👋</h1>
        <p className="text-xl mb-8">
          스토리텔링에 관심이 많은 Creator, Builder, PM입니다
        </p>
        
        {/* 그래픽 인포그래픽 섹션 */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-gray-700">
          {/* 메인 타이틀 */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-pulse">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span className="font-bold">스토리텔링 중심의 다면적 역량</span>
            </div>
          </div>

          {/* 3개 역할 카드와 연결선 */}
          <div className="relative">
            {/* 연결선 SVG */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 z-0" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path d="M 150 100 Q 400 50 650 100" stroke="url(#lineGradient)" strokeWidth="3" fill="none" className="animate-pulse"/>
              <path d="M 150 100 Q 400 150 650 100" stroke="url(#lineGradient)" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Creator 카드 */}
              <div className="group cursor-pointer">
                <div className="relative p-8 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-200 dark:border-pink-700">
                  {/* 배경 데코레이션 */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-800 dark:to-rose-800 rounded-full opacity-20"></div>
                  
                  {/* SVG 아이콘 */}
                  <div className="relative mb-6">
                    <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto group-hover:scale-110 transition-transform duration-300">
                      <circle cx="32" cy="32" r="30" fill="url(#creatorGradient)" className="animate-pulse"/>
                      <defs>
                        <linearGradient id="creatorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f472b6"/>
                          <stop offset="100%" stopColor="#ec4899"/>
                        </linearGradient>
                      </defs>
                      <path d="M20 24 L32 18 L44 24 L40 36 L32 42 L24 36 Z" fill="white" opacity="0.9"/>
                      <circle cx="32" cy="28" r="3" fill="#ec4899"/>
                      <path d="M28 34 Q32 38 36 34" stroke="#ec4899" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center text-pink-800 dark:text-pink-200">Creator</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                    창의적 아이디어와<br/>혁신적 사고로<br/>새로운 가치 창조
                  </p>
                  
                  {/* 스킬 바 */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>창의성</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-pink-200 dark:bg-pink-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-400 to-rose-500 h-2 rounded-full w-[95%] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Builder 카드 */}
              <div className="group cursor-pointer">
                <div className="relative p-8 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-200 dark:border-emerald-700">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-800 dark:to-teal-800 rounded-full opacity-20"></div>
                  
                  <div className="relative mb-6">
                    <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto group-hover:scale-110 transition-transform duration-300">
                      <rect x="16" y="16" width="32" height="32" rx="4" fill="url(#builderGradient)" className="animate-pulse"/>
                      <defs>
                        <linearGradient id="builderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981"/>
                          <stop offset="100%" stopColor="#059669"/>
                        </linearGradient>
                      </defs>
                      <rect x="20" y="20" width="8" height="8" fill="white" opacity="0.9"/>
                      <rect x="32" y="20" width="8" height="8" fill="white" opacity="0.7"/>
                      <rect x="20" y="32" width="8" height="8" fill="white" opacity="0.7"/>
                      <rect x="32" y="32" width="8" height="8" fill="white" opacity="0.9"/>
                      <path d="M24 44 L40 44" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center text-emerald-800 dark:text-emerald-200">Builder</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                    기술적 전문성으로<br/>아이디어를 현실로<br/>구현하는 실행력
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>구현력</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full w-[92%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PM 카드 */}
              <div className="group cursor-pointer">
                <div className="relative p-8 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200 dark:border-blue-700">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 rounded-full opacity-20"></div>
                  
                  <div className="relative mb-6">
                    <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto group-hover:scale-110 transition-transform duration-300">
                      <circle cx="32" cy="32" r="28" fill="url(#pmGradient)" className="animate-pulse"/>
                      <defs>
                        <linearGradient id="pmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6"/>
                          <stop offset="100%" stopColor="#1d4ed8"/>
                        </linearGradient>
                      </defs>
                      <path d="M20 28 L32 20 L44 28 L44 40 L32 48 L20 40 Z" fill="white" opacity="0.2"/>
                      <circle cx="26" cy="30" r="2" fill="white"/>
                      <circle cx="32" cy="26" r="2" fill="white"/>
                      <circle cx="38" cy="30" r="2" fill="white"/>
                      <path d="M26 30 L32 26 L38 30" stroke="white" strokeWidth="1.5"/>
                      <rect x="28" y="36" width="8" height="3" fill="white" opacity="0.8"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center text-blue-800 dark:text-blue-200">PM</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                    전략적 사고와<br/>데이터 기반으로<br/>제품 방향성 제시
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>전략성</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full w-[90%] animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 중앙 스토리텔링 허브 */}
          <div className="relative mt-12">
            <div className="text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-2xl">
                  <div className="flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" className="animate-pulse">
                      <path d="M16 2 L19.09 10.26 L28 11 L19.09 11.74 L16 20 L12.91 11.74 L4 11 L12.91 10.26 L16 2Z" fill="currentColor"/>
                    </svg>
                    <span className="text-lg font-bold">스토리텔링</span>
                    <svg width="32" height="32" viewBox="0 0 32 32" className="animate-bounce">
                      <path d="M8 12 L16 8 L24 12 L20 20 L16 24 L12 20 Z" fill="currentColor" opacity="0.8"/>
                    </svg>
                  </div>
                  <p className="text-sm mt-2 opacity-90">모든 영역을 연결하는 핵심 역량</p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 통계 */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-1">5+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">창의적 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">10+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">개발 경험</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">전략 수립</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/projects"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              프로젝트{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              지금까지 진행했던 프로젝트들을 소개합니다.
            </p>
          </Link>

          <Link
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              소개{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              제 이력과 기술 스택을 확인해보세요.
            </p>
          </Link>

          <Link
            href="/read-list"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              읽은 글{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              관심있게 읽은 아티클들을 모아놓았습니다.
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
