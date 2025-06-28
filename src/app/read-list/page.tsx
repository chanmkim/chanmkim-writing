import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Article {
  title: string
  description: string
  url: string
  author: string
  publishedAt: string
  tags: string[]
  slug: string
}

async function getArticles(): Promise<Article[]> {
  const articlesDirectory = path.join(process.cwd(), 'src/content/articles')
  
  // 디렉토리가 존재하지 않으면 빈 배열 반환
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(articlesDirectory)
  
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        title: data.title as string,
        description: data.description as string,
        url: data.url as string,
        author: data.author as string,
        publishedAt: data.publishedAt as string,
        tags: data.tags as string[] || [],
        slug: fileName.replace(/\.mdx$/, ''),
      }
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return articles
}

export default async function ReadListPage() {
  const articles = await getArticles()
  
  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">읽은 글 📚</h1>
          <p className="text-base sm:text-lg opacity-70">
            개발, 기술, 비즈니스 등 관심있게 읽은 아티클들을 모아놓았습니다.
          </p>
        </div>
        
        {articles.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <div className="text-4xl sm:text-6xl mb-4">📖</div>
            <p className="text-base sm:text-lg opacity-70">아직 등록된 아티클이 없습니다.</p>
            <p className="text-sm opacity-50 mt-2">
              곧 흥미로운 아티클들을 추가하겠습니다!
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {articles.map((article: Article) => (
              <article
                key={article.slug}
                className="group rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 transition-all hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title}
                        <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                          ↗
                        </span>
                      </Link>
                    </h2>
                    
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span>by {article.author}</span>
                      <span>•</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                  
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 