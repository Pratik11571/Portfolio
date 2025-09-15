"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-blue-600">
          {"<"}Pratik Malwade{"/>"}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-700 transition-colors hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
