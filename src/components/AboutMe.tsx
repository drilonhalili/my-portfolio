'use client'

import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
          <CardTitle>About Me</CardTitle>
          {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Self-motivated Frontend Developer with expertise in React.js,
            Next.js, and modern web technologies. Passionate about building
            scalable, user-friendly applications and continuously improving my
            technical skills. Graduated from Code Academy with hands-on
            experience in developing web applications, including video-chat and
            streaming platforms.
          </p>
        </CardContent>
      </Card>
    )
}
