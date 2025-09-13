import Image from "next/image"

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-12 sm:pt-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-wider text-teal-600">Full-Stack MERN Developer</p>
          <h1 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Building reliable web apps with React, Node.js, and modern tooling
          </h1>
          <p className="max-w-prose text-pretty text-gray-700">
            I&apos;m a full-stack developer focusing on MERN. Comfortable with TypeScript, Tailwind, Bootstrap, Prisma,
            and PostgreSQL. I also practice Data Structures and Algorithms in Java, good with CS Fundamentals and have basics in C++. I craft
            performant, accessible UIs and robust APIs.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-gray-200">
            <Image
              src="/developer-avatar.png"
              alt="Developer avatar placeholder"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
