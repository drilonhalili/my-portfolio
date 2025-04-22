"use client"

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import ThemeSwitcher from "@/components/ui/ThemeSwitcher"
import useMediaQuery from "@/hook/useMediaQuery"

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)")
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          I&apos;m Drilon Halili — a front-end developer who loves building
          fast, clean, and modern web apps. I&apos;m passionate about developer
          experience, beautiful UI, and clean code.
        </p>
        <p className="text-muted-foreground">
          I specialize in React, Vite, and Tailwind, and recently I&apos;ve been
          diving into tools like Bun, Convex, and NeonDB. Whether it&apos;s
          building landing pages or full-stack apps, I aim to create seamless
          and fun user experiences.
        </p>
        <p className="text-muted-foreground">
          In my free time, I explore new technologies, work on open-source
          ideas, and occasionally post breakdowns of my projects on LinkedIn.
        </p>
      </CardContent>
    </Card>
  )
}
