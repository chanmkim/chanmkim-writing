import { Writing } from './types'
import { writing1 } from './1'
import { writing2 } from './2'
import { writing3 } from './3'

// 모든 글 데이터를 배열로 export
export const writings: Writing[] = [
  writing1,
  writing2,
  writing3
]

// 특정 ID로 글을 찾는 함수
export function getWritingById(id: string): Writing | undefined {
  return writings.find(writing => writing.id === id)
}

// 모든 글을 가져오는 함수
export function getAllWritings(): Writing[] {
  return writings
}

// 카테고리별로 글을 필터링하는 함수
export function getWritingsByCategory(category: string): Writing[] {
  return writings.filter(writing => writing.category === category)
}

// 제목으로 글을 검색하는 함수
export function searchWritingsByTitle(searchTerm: string): Writing[] {
  const term = searchTerm.toLowerCase().trim()
  if (!term) return writings
  
  return writings.filter(writing => 
    writing.title.toLowerCase().includes(term) ||
    writing.description.toLowerCase().includes(term)
  )
}

// 제목과 카테고리로 글을 검색하는 함수
export function searchWritings(searchTerm: string, category?: string): Writing[] {
  let filteredWritings = writings
  
  // 카테고리 필터링
  if (category && category !== 'all') {
    filteredWritings = getWritingsByCategory(category)
  }
  
  // 검색어 필터링
  if (searchTerm) {
    const term = searchTerm.toLowerCase().trim()
    filteredWritings = filteredWritings.filter(writing => 
      writing.title.toLowerCase().includes(term) ||
      writing.description.toLowerCase().includes(term)
    )
  }
  
  return filteredWritings
} 