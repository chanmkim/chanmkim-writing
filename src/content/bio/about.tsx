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
          &ldquo;기술은 이해될 수 있을때만 의미가 있습니다&rdquo;
        </blockquote>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            기술은 이해될 수 있을 때만 의미를 지니고 있습니다.
          </p>
          
          <p>
            기술 자체도 중요하지만 그것이 Marketing적인 관점에서 설명이 되어야만
          </p>
          
          <p>
            기술은 비로소 유통되고 상업화가 이뤄질 수 있습니다.
          </p>
          
          <p>
            저는 기술을 잘 이해하고 있는 세일즈맨이자 PM입니다.
          </p>
          
          <p>
            오히려 컴퓨터 공학을 전공하지 않았기 때문에 이것이 얼마나 어렵게 느껴질지를 잘 알고 있습니다.
          </p>
          
          <p>
            기술 도메인에 대한 소통능력은 복잡한 이해관계자의 조율, 프로젝트의 진행, Go-to-Market 측면에 있어 중요한 요소입니다.
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
            Dev Rel에 강점이 있는 Builer입니다
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
