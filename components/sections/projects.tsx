import Image from "next/image"
type ProjectCardProps = {
  title: string
  description: string
  live_link: string
  source_code: string
  image: string
}


function ProjectCard({ title, description, live_link, source_code, image }: ProjectCardProps) {
  return (

    <article className="flex flex-col rounded-lg border border-gray-200 p-4">
      {/* Screenshot Preview */}
      <a href={live_link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center md:justify-end">
          <div className="relative h-65 w-full rounded-xl border border-gray-200 overflow-hidden">
            <Image
              src={image} // 👈 must be /task-manager-ss.png if in public/
              alt={`${title} screenshot`}
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </a>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{description}</p>

      <div className="mt-3 flex gap-3">
        <a
          href={live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-teal-600 px-3 py-1 text-xs font-medium text-white hover:bg-teal-700"
        >
          Live Demo
        </a>

        <a
          href={source_code}
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
      source_code: "https://github.com/Pratik11571/Task-Manager",
      live_link: "https://task-manager-roan-eight-84.vercel.app/",
      image: "/task-manager.png",
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
          <ProjectCard key={p.title} title={p.title} description={p.description} source_code={p.source_code} live_link={p.live_link} image={p.image} />
        ))}
      </div>
    </section>
  )
}
