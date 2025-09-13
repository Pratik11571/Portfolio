import type React from "react"
type SkillGroup = {
  title: string
  items: string[]
}

const GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java (DSA)", "TypeScript", "JavaScript", "C++ (basics)"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Bootstrap","Redux"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases & ORM",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Vercel","MongoDB Atlas","Render"],
  },
  {
    title: "CS Fundamentals",
    items: ["OOPs", "DBMS", "Computer Networks"],
  },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-900">
      {children}
    </span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="mb-6">
        <h2 className="text-balance text-2xl font-semibold text-gray-900">Skills</h2>
        <div className="mt-1 h-1 w-10 rounded bg-teal-500" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {GROUPS.map((group) => (
          <div key={group.title} className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
