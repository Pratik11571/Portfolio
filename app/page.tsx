import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Pratik Malwade. All rights reserved.
        </p>
      </footer>
    </>
  )
}
