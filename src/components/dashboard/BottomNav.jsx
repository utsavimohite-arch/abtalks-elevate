import { Home, User, Trophy } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function BottomNav() {
  const location = useLocation()

  const items = [
    {
      label: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      label: "Achievements",
      icon: Trophy,
      path: "/achievements",
    },
    {
      label: "Profile",
      icon: User,
      path: "/profile",
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#08080c]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[430px] items-center justify-around px-4">

        {items.map((item) => {
          const Icon = item.icon

          const active =
            location.pathname === item.path

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex min-w-[80px] flex-col items-center gap-1.5 py-1 transition ${
                active
                  ? "text-violet-400"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              <Icon
                size={19}
                strokeWidth={active ? 2.5 : 2}
              />

              <span className="text-[10px] font-medium">
                {item.label}
              </span>
            </Link>
          )
        })}

      </div>
    </nav>
  )
}