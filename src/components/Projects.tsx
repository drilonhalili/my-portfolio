import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Expenses tracker",
    description:
      "A full-stack web app tutorial using Vite, React, Bun, Hono, Drizzle, Kinde, and TanStack, built step by step.",
    tech: "Vite",
    url: "https://coonwerks.com/",
    githubUrl: "https://github.com/drilonhalili/businesshealth"
  },
  {
    title: "Business Health",
    description:
      "Developed a responsive and user-friendly business health landing page using Next.js and React.",
    tech: "Next.js",
    url: "https://www.businesshealth.co.uk/",
    githubUrl: "https://github.com/drilonhalili/businesshealth"
  },
  {
    title: "My Portfolio",
    description:
      "Designed and developed a modern, responsive portfolio using Next.js and Tailwind CSS.",
    tech: "Next.js",
    url: "https://www.drilonhalili.pro/",
    githubUrl: "https://github.com/drilonhalili/portfolio"
  }
]

const techColors = {
  React: "bg-blue-500",
  "Vue.js": "bg-purple-500",
  "Next.js": "bg-yellow-500",
  "Vite": "bg-red-500"
}

export const Projects = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {projects.map((p, i) => (
            <Card key={i}>
              <CardContent className="pt-6 h-full">
                <div className="flex flex-col h-full">
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    {p.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">
                    {p.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={cn(
                          "size-4 rounded-full",
                          techColors[p.tech as keyof typeof techColors]
                        )}
                      />
                      <span className="text-xs font-medium text-muted-foreground">
                        {p.tech}
                      </span>
                    </div>
                    <Link
                      href={p.githubUrl}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View Project
                      <ExternalLink className="inline-block size-3" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    )
}
