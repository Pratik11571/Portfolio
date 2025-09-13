export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="mb-6">
        <h2 className="text-balance text-2xl font-semibold text-gray-900">About</h2>
        <div className="mt-1 h-1 w-10 rounded bg-teal-500" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <p className="text-pretty text-gray-700">
          I build end-to-end web applications with the MERN stack. On the frontend, I focus on accessible, responsive
          interfaces using React and Tailwind/Bootstrap. On the backend, I design clear APIs with Node.js/Express and
          manage data using MongoDB or PostgreSQL with Prisma.
        </p>
        <p className="text-pretty text-gray-700">
          I regularly practice Data Structures and Algorithms in Java, good with CS Fundamentals and have a foundation in C++. I value clean code,
          type safety with TypeScript and thoughtful architecture that scales.
        </p>
      </div>
    </section>
  )
}
