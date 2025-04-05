'use client'

import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hook/useMediaQuery";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const socials = [
  {
    name: "Github",
    link: "https://github.com/drilonhalili",
    icon: <FaGithub className="size-4" />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/drilonhalili",
    icon: <FaLinkedin className="size-4" />
  },
  {
    name: "X (Twitter)",
    link: "https://x.com/drilonhalili12",
    icon: <FaXTwitter className="size-4" />
  }
]

export const Profile = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");

    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-start gap-2 ">
            <div className="w-full flex flex-row justify-between items-top ">
              <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                <Image
                  width={150}
                  height={150}
                  quality={100}
                  src="/avatar.jpeg"
                  alt="Profile Picture"
                  className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                />
                <div className="flex flex-col items-start justify-center">
                  <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                    Drilon Halili
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>
              {!isDesktopOrLaptop && <ThemeSwitcher />}
            </div>

            <p className="mt-2 text-start text-sm text-muted-foreground">
              Front End Web Developer | Never stop learning new technologies and
              stacks to implement into your projects!
            </p>
            <Button className="mt-4 w-full" asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="font-semibold uppercase"
              >
                CONTACT ME
              </Link>
            </Button>
            <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
              {socials.map((s, i) => {
                const parts = s.link.split("/")
                const username = parts[parts.length - 1]

                return (
                  <Link
                    key={i}
                    href={s.link}
                    target="_blank"
                    className="cursor-pointer flex items-center gap-2 group"
                  >
                    {s.icon}
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                      /{username}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    )
}
