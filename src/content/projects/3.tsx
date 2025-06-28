import React from 'react'

const meta = {
  title: "G마켓 - Product Manager",
  description: "수수료 프로모션 세팅 자동화 프로젝트",
  order: 3
}

interface Project3Props {
  meta?: {
    title?: string
    description?: string
    order?: number
  }
}

const Project3 = ({ meta: propMeta }: Project3Props) => {
  const finalMeta = propMeta || meta

  return (
    <div className="min-h-screen p-6 md:p-24">
      <article className="prose dark:prose-invert max-w-5xl mx-auto">
        {/* 헤더 섹션 */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {finalMeta?.title || "G마켓 - Product Manager"}
          </h1>
          <p className="text-xl opacity-80 leading-relaxed">
            {finalMeta?.description || "수수료 프로모션 세팅 자동화 프로젝트"}
          </p>
        </header>

        {/* 프로젝트 이미지 */}
        <div className="mb-16">
          <img
            src="/3.webp"
            alt="G마켓 수수료 프로모션 세팅 자동화 프로젝트"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* 문제정의 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-pink-200/50 dark:border-pink-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🎯 문제정의
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>중국플랫폼의 내습에 따라 카테고리와 상품별로 유동적인 수수료 프로모션이 필요한 상황이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>다만 지마켓 플랫폼이 20년 가까이 됨에 따라 대규모의 상품에 대해 수수료 조정이 어려운 구조였음</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 가설수립 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              💡 가설수립
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>수수료 조정에 있어 병목현상이 일어나는 구간은 크게 2가지 였음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>첫째로 수수료를 인하할 상품을 검색하는 로직이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>둘째로 실제 프로모션 해당일에 인하된 수수료로 세팅되는 로직이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>그 중에서도 실제 수수료가 누락없이 반영되는 것이 중요하였고, 개발리소스가 한정되었기 때문에 두번째 영역의 병목현상을 해소하는 것으로 우선순위를 수립함</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 액션 및 검증 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-200/50 dark:border-orange-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              🔍 액션 및 검증
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  핵심문제
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">⚡</span>
                      <span>특정 상품에 대한 특정 수수료를 적용할 수 있는가가 핵심문제였음</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  해결방안
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>프로모션의 수수료와 기간은 언제든지 변경될 수 있었기 때문에 수수료 정보를 변경할 수 있는 구조로 로직을 설계하는 것이 필요했음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>이를 위해 수수료세팅이라는 큰 모듈을 만들고 그 안에서 상품코드를 넣었다, 뺏다 할 수 있는 형식으로 로직을 구성함</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 결과의 요소 섹션 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              📊 결과의 요소
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  성과
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                        20만건 → 100만건
                      </div>
                      <div className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        1일 수수료 세팅 가능 건수
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  운영안
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 mt-1">ℹ️</span>
                      <span>수수료 영역의 리스크를 고려하여 1일에 딱 1개의 프로모션만 세팅할 수 있도록 운영안을 구성함</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export { meta }
export default Project3
