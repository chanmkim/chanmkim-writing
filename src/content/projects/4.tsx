import React from 'react'
import ImageModal from '@/components/image-modal'

const meta = {
  title: "G마켓 - Product Manager",
  description: "저품질 상품 관리 및 사업자 ID 제한 프로젝트",
  order: 4
}

interface Project4Props {
  meta?: {
    title?: string
    description?: string
    order?: number
  }
}

const Project4 = ({ meta: propMeta }: Project4Props) => {
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
            {finalMeta?.description || "저품질 상품 관리 및 사업자 ID 제한 프로젝트"}
          </p>
        </header>

        {/* 프로젝트 이미지 */}
        <div className="mb-16">
          <ImageModal
            src="/4.webp"
            alt="G마켓 프로젝트"
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
                    <span>더 많은 상품를 갖추는 것이 더 많은 매출로 이어진다는 전제가 있었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>그러나 상품수가 늘어날수록 그에 따른 저품질 상품의 증가와 더불어 서버부하가 늘어난다는 리스크가 존재하였음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>상품수를 늘리는 것 대비 서버용량에 따른 비용이 더 늘어나는 수준에 도달하게 되어 플랫폼 내 상품수관리가 필요한 상황이었음</span>
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
                    <span>저품질의 상품이 급증하게 되는 것에는 2가지 요인이 존재하였음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>첫번째로 판매자들이 저품질의 상품을 계정당 5000개씩 등록하였기 때문이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>두번째로 저품질의 상품을 등록하는 판매자의 숫자 자체가 늘어났기 때문이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">💭</span>
                    <span>이에 따라 판매자의 아이디당 등록가능한 상품수를 하향조정하였음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">⚠️</span>
                    <span>그러나 여전히 상품수는 줄어들지 않았고 다른 방향의 가설이 필요하였음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">⚠️</span>
                    <span>등록가능한 상품수 하향에 따라 판매자들의 항의 역시 늘어나는 상황이었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">🔍</span>
                    <span>저품질의 판매자가 복수의 ID를 생성하는 정황이 발견되었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">🔍</span>
                    <span>사업자ID별 상품수의 리스트를 보다보니 한가지 특이점이 발견되었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">🔍</span>
                    <span>ID형식이 XXX01, XXX02와 같이 동일한 형식의 아이디가 한번에 20~30개씩 있는 것이 발견되었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">🔍</span>
                    <span>사업자회원정보를 기반으로 직접 사업자들의 주소지를 지도에서 검색해보니 동일한 사업장에서 수십개의 사업자등록번호를 발급한 것이 발견되었음</span>
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
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span>따라서 저품질의 상품수 자체를 줄이는 작업보다 저품질의 사업자가 복수의 ID를 생성하는 것을 막자는 판단을 내리게 되었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span>동일한 명의의 사람이 여러 개의 사업자주소로 20~30개의 사업자등록증을 발급하는 것은 제한할 수 없음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span>다만 플랫폼 자체적으로 동일한 명의인 경우, ID 생성의 개수는 제한할 수 있었음</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span>따라서 명의당 사업자 ID의 개수를 3개까지로 제한시켰음</span>
                  </li>
                </ul>
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
                  직접적 성과
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>직접적으로 판매자 계정당 등록가능한 상품수를 추가적으로 조정하지 않았음에도 명의당 ID 생성을 제한 후 곧바로 상품수 증가추이가 변동되었음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>기존에는 1일에 10~100만건의 상품이 등록되었으나</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>ID 생성 제한 이후 1일에 1~3만건으로 신규등록 상품이 감소하였음</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  외부 검증
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">ℹ️</span>
                      <span>동시에 역삼동 세무서쪽에서도 연락이 왔음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">ℹ️</span>
                      <span>온라인사업자들이 무분별하게 사업자 신규등록을 하여 세무서 업무가 마비되었다는 정보였음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">ℹ️</span>
                      <span>이에 따라 플랫폼 담당자들로부터 무분별한 사업자 신규등록에 대한 제안을 듣고자 하는 내용이었음</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 mt-1">⚠️</span>
                      <span>그러나 특정 플랫폼의 판매자 제재 정책에 대해 대표적인 사례가 되는 경우, 판매자 항의가 접수되는 리스크가 존재하여 정부기관에는 제안을 드리지 않고, 내부 법적검토로만 해당 정책을 수립 후 적용함</span>
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
export default Project4
