type ProjectCardProps = {
  title: string
  description: string
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 p-4">
      <div
        className="mb-3 h-36 w-full rounded-md border border-dashed border-gray-300 bg-white"
        aria-hidden
      />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{description}</p>

      <div className="mt-3 flex gap-3">
        {/* Live Demo Link */}
        <a
          href="https://task-manager-roan-eight-84.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-teal-600 px-3 py-1 text-xs font-medium text-white hover:bg-teal-700"
        >
          Live Demo
        </a>

        {/* Source Code Link */}
        <a
          href="https://github.com/Pratik11571/Task-Manager"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-gray-800 px-3 py-1 text-xs font-medium text-white hover:bg-gray-900"
        >
          Source Code
        </a>
      </div>
    </article>

  )
}

export function Projects() {
  const placeholders = [
    {
      title: "Task Manager App",
      description: "Role-based MERN Task Manager with task assignment, progress tracking, and interactive reports.",
    },
    {
      title: "Project Two",
      description: "Emphasize interesting challenges, performance wins, or design decisions.",
    },
    {
      title: "Project Three",
      description: "Focus on measurable outcomes and technologies used (React, Node.js, Prisma, PostgreSQL).",
    },
  ]

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="mb-6">
        <h2 className="text-balance text-2xl font-semibold text-gray-900">Projects</h2>
        <div className="mt-1 h-1 w-10 rounded bg-teal-500" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {placeholders.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  )
}
