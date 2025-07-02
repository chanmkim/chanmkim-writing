import React from 'react'
import ImageModal from '@/components/image-modal'

const meta = {
  title: "G마켓 - Product Manager",
  description: "CS 응답률 개선을 통한 재구매율 증대 프로젝트",
  order: 2
}

interface Project2Props {
  meta?: {
    title?: string
    description?: string
    order?: number
  }
}

const Project2 = ({ meta: propMeta }: Project2Props) => {
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
            {finalMeta?.description || "CS 응답률 개선을 통한 재구매율 증대 프로젝트"}
          </p>
        </header>

        {/* 프로젝트 이미지 */}
        <div className="mb-16">
          <ImageModal
            src="/2.webp"
            alt="G마켓 CS 응답률 개선 프로젝트"
            width={1200}
            height={600}
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
                    <span>G마켓 플랫폼 전반에 걸쳐 누적되는 쿠폰, 광고비로 인해 손익개선이 어려운 상황이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>판매자 관점에서 구매자를 대상으로 한 마케팅 수단은 더 싼 가격을 제공하는 방법 외에는 존재하지 않았음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>판매자가 구매자에게 소구할 수 있는 부분은 빠른 응대였으나 현재 UX 상 직관적으로 접수된 CS건들을 알기 어려웠음</span>
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
                    <span>재구매와 CRM 관점에서 CS처리 기능을 생각함</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>CS와 리뷰영역에서 판매자의 답변퀄리티가 올라갈수록 구매자들의 신뢰도가 형성되며, 이로 인해 외부광고/쿠폰발급 없이도 구매자들이 지마켓에 재방문할 여지가 될 수 있다고 판단함</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>이를 위한 수단으로써 홈모듈과 CS처리 페이지에 공통 영역으로 &apos;일자별로 접수된 CS건들을 확인&apos;할 수 있는 영역을 배치하고자 하였음</span>
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
                  제약사항
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">⚡</span>
                      <span>개발리소스 상황이 부족하였고, 신규 DB를 생성하여 백엔드로직을 변경하는 것이 불가하였음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">⚡</span>
                      <span>CS 데이터를 임의적으로 변경하는 것은 불가하였음</span>
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
                      <span>오로지 프론트작업과 UX, 카피라이팅만으로 프러덕트에 대한 개선이 이루어져야 하였음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>CS기능 상단영역에 1일 내/3일 내/7일 내와 같이 기간별로 접수된 CS건을 곧바로 확인할 수 있도록 처리함</span>
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
                        70% → 80%
                      </div>
                      <div className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        답변률 증가
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  한계점
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 mt-1">ℹ️</span>
                      <span>판매자의 답변준수율이 얼마나 구매자의 재방문, 재구매로 이어지는지는 트래킹하지 못함</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 mt-1">ℹ️</span>
                      <span>해당 판매자에 대한 특정 구매자의 구매횟수별로 재구매여부를 라벨로서 발행하려 하였으나 개발리소스 상 곧바로 적용되지 못함</span>
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
export default Project2
