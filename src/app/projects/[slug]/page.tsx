import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

async function getProject(slug: string) {
  const fullPath = path.join(process.cwd(), 'src/content/projects', `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    meta: data,
    content: content,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { meta, content } = await getProject(params.slug)
  
  return (
    <div className="min-h-screen p-24">
      <article className="prose dark:prose-invert max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{meta.title}</h1>
        <div className="mb-8">
          <p className="text-lg opacity-70">{meta.description}</p>
        </div>
        <div className="mdx-content">
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  )
} 