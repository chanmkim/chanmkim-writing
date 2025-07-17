import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* About Me Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2">
          About Me
        </h2>
        
        <blockquote className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-blue-500 pl-4 italic">
          &ldquo;Creator(Software) is eating the world&rdquo;
        </blockquote>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            시간이 지나 이 시기를 되돌아 보았을 때 그 때가 컨텐츠 혁명의 시대였구나...라고 기억될거라는 생각이 있습니다.
          </p>
          
          <p>
            비록 지금은 AI영역에 많은 투자와 노력이 이루어지고 있지만요.
          </p>
          
          <p>
            이유는 간단하다고 생각합니다. 웹페이지는 지루하나 컨텐츠는 자극적이라는 것입니다.
          </p>
          
          <p>
            AI 모델, AI 에이전트, 지식베이스, 벡터모델링. 모두 흥미로운 개념입니다. 현실을 모두 라벨링한다면 그것을 모두 예측하고 계산할 수 있다는 의미에서 온톨로지철학은 매력을 지닙니다.
          </p>
          
          <p>
            공급자 관점에서는 무척 흥미롭지만 대중의 관점에서는 지루하다고 생각합니다.
          </p>
          
          <p>
            결국 사람들은 &lsquo;나를 재밌게 해주고, 부자되게 해주고, 자극적으로 만들어주는 것&rsquo;들에 집중하기 때문입니다.
          </p>
          
          <p>
            그렇게 시간이 흘러 이 시기를 되돌아 보았을 때 &lsquo;아, 그 때가 AI혁명이 아니라 컨텐츠 혁명의 시기였구나&rsquo;라는 것을 모두가 알게 될 것입니다.
          </p>
          
          <p>
            그리고 그러한 컨텐츠에 대한 Ownership을 증명할 수 있는 Web3 역시 따라오는 과정이라고 생각합니다.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-green-500 pb-2">
          Projects
        </h2>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            컨텐츠 기반의 그로스에 관심을 가지고 있는 Builder입니다.
          </p>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              💡 자세한 프로젝트 내역은 <Link href="/projects" className="underline hover:text-blue-600 dark:hover:text-blue-300">프로젝트 페이지</Link>에서 확인하실 수 있습니다!
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-purple-500 pb-2">
          Education
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  서울대학교 영어교육과
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">학사 학위</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📅 2015.03 ~ 2021.08
                </p>
                
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    📊 연구 프로젝트: 시대별 정서 분석
                  </h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• 각 시대의 주요소설들에 대한 말뭉치 데이터를 수집</li>
                    <li>• 전체 텍스트의 주요 키워드들을 분류하여 토픽모델링을 진행</li>
                    <li>• 그 결과 각 시대별 주요 정서를 통계적으로 검증할 수 있었음</li>
                  </ul>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full">
                  졸업
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const meta = {
  title: "About Me",
  description: "Creator(Software) is eating the world - 크리에이터 이코노미에 관심을 가지고 있는 Builder, PM, Creator입니다."
}
