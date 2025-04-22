import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Software Engineer",
    company: "Enterprise Alumni",
    logo: "/ea.png",
    logoDark: "/ea-dark.png",
    dateStart: "2022-05-01",
    dateEnd: null,
    description:
      "Working as a React and Angular Developer for a project that provides alumni management software.",
    link: "https://enterprisealumni.com",
    images: ["/enterprisealumni.png"]
  },
  {
    role: "Freelance Software Engineer",
    company: "Tarmac",
    logo: "/tarmac.png",
    dateStart: "2021-05-01",
    dateEnd: "2022-05-01",
    description:
      "As a Frontend Developer, I contributed to the development of Swytchboard, a customizable live video chat platform that enhances one-on-one customer experiences. Utilizing Twilio's Programmable Video API, I implemented real-time video communication features, ensuring seamless integration and an intuitive user interface.",
    link: "https://joinswytchboard.com/",
    images: []
  },
  {
    role: "Web developer",
    company: "SLS - Solutions",
    logo: "/sls.png",
    dateStart: "2019-06-01",
    dateEnd: "2021-05-01",
    description:
      "Developed several websites using HTML, CSS and WordPress on the freelancing regime.",
    link: "https://slssolutions.com",
    images: []
  },
  {
    role: "Stock controller | Operation",
    company: "Ecolog International FZE",
    logo: "/ecolog.png",
    dateStart: "2016-06-01",
    dateEnd: "2019-06-01",
    description:
      "Responsible for team organization and daily warehouse operations. Managed inventory, recorded purchases, maintained databases, and reconciled stock counts. Coordinated shipments and assisted the Operations Manager with financial analysis, forecasting, budgeting, and cost control.",
    link: "https://ecolog-international.com/",
    images: []
  },
  {
    role: "Web developer",
    company: "SLS - Solutions",
    logo: "/sls.png",
    dateStart: "2014-07-01",
    dateEnd: "2016-06-01",
    description: "Developed several websites using HTML, CSS and Wordpress.",
    link: "https://slssolutions.com",
    images: ["/devvault.png", "/devvault.png"]
  }
]

export const Experience = () => {
    const formatDateRange = (start: string, end: string | null = null) => {
      const format = (dateStr: string) => {
        const date = new Date(dateStr)
        return date.toLocaleString("default", {
          month: "short",
          year: "numeric"
        })
      }

      const startDate = new Date(start)
      const endDate = end ? new Date(end) : new Date()

      const formattedStart = format(start)
      const formattedEnd = end ? format(end) : "Present"

      // Calculate rounded duration in years
      const diffInMs = endDate.getTime() - startDate.getTime();
      const diffInYears = Math.round(diffInMs / (1000 * 60 * 60 * 24 * 365))
      const yearString = ` (${diffInYears} year${diffInYears !== 1 ? "s" : ""})`

      return `${formattedStart} - ${formattedEnd}${yearString}`
    }

    return (
      <>
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
          Work Experience
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-8">
              {jobs.map((j, i) => (
                <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-[100px] h-[40px]">
                      <Image
                        src={j.logo}
                        alt={j.company}
                        fill
                        priority
                        sizes="auto"
                        quality={80}
                        className="rounded-md object-contain block dark:hidden"
                      />
                      <Image
                        src={j.logoDark ?? j.logo}
                        alt={j.company}
                        fill
                        priority
                        sizes="auto"
                        quality={80}
                        className="rounded-md object-contain hidden dark:block"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{j.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {j.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center">
                    <CalendarDays className="size-3 mr-2" />
                    {formatDateRange(j.dateStart, j.dateEnd)}
                  </p>
                  <p className="text-sm mt-2">{j.description}</p>
                  <JobImages
                    role={j.role}
                    link={j.link}
                    images={j.images}
                    duration={formatDateRange(j.dateStart, j.dateEnd)}
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </>
    )
}
