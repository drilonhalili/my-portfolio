import { Skills } from "./Skills"
import { Profile } from "./Profile"

export const Sidebar = () => {
  return (
    <aside className="md:col-span-1">
      <Profile />
      <Skills />
    </aside>
  )
}
