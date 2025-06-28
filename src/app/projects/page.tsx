import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Project {
  title: string
  description: string
  slug: string
}

async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects')
  const fileNames = fs.readdirSync(projectsDirectory)
  
  const projects = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      title: data.title as string,
      description: data.description as string,
      slug: fileName.replace(/\.mdx$/, ''),
    }
  })
  
  return projects
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">프로젝트</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {project.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 