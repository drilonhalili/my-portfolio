import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Next.js",
  "Vue.js",
  "CSS3",
  "HTML5",
  "Angular",
  "Redux",
  "Flux",
  "Storybook",
  "Gatsby",
  "Styled Components",
  "Bootstrap",
  "Ant Design",
  "Tailwind CSS",
  "Zustand",
  "Context API",
  "Jest",
  "Mocha",
  "Enzyme",
  "React Testing Library",
  "Webpack",
  "Babel",
  "NPM",
  "Yarn",
  "Vite",
  "Git",
  "GitHub",
  "GitLab",
  "REST API",
  "GraphQL",
  "WebSockets",
  "AJAX",
  "Firebase",
  "Clerk",
  "Auth0",
  "Supabase"
]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
