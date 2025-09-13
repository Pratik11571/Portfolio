import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="mb-6">
        <h2 className="text-balance text-2xl font-semibold text-gray-900">Contact</h2>
        <div className="mt-1 h-1 w-10 rounded bg-teal-500" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <a
          href="mailto:pratikmalwade100@gmail.com"
          className="group flex items-center gap-3 rounded-lg border border-gray-200 p-4 hover:border-gray-300"
        >
          <span className="rounded-md bg-blue-600/10 p-2 text-blue-600">
            <Mail size={18} aria-hidden />
          </span>
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <p className="text-sm text-gray-700">pratikmalwade100@gmail.com</p>
          </div>
        </a>

        <div className="rounded-lg border border-gray-200 p-4">
          <p className="font-medium text-gray-900">Social</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Pratik11571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pratik11571/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
