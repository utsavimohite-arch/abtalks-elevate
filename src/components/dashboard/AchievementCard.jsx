import { Lock } from "lucide-react"

export default function AchievementCard({ achievement }) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        achievement.unlocked
          ? "border-white/10 bg-white/[0.04]"
          : "border-white/5 bg-white/[0.02] opacity-50"
      }`}
    >
      <div className="flex items-center gap-4">

        {/* Achievement icon */}
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            achievement.unlocked
              ? "bg-violet-500/15"
              : "bg-white/5"
          }`}
        >
          {achievement.unlocked ? (
            <span className="text-xl">
              {achievement.icon}
            </span>
          ) : (
            <Lock
              size={17}
              className="text-zinc-600"
            />
          )}
        </div>

        {/* Achievement information */}
        <div>
          <p className="text-sm font-semibold">
            {achievement.title}
          </p>

          <p className="mt-1 text-xs leading-5 text-zinc-600">
            {achievement.description}
          </p>
        </div>

      </div>
    </div>
  )
}