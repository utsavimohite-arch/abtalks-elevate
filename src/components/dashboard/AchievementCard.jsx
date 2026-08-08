import { Lock } from "lucide-react"

export default function AchievementCard({ achievement }) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        achievement.unlocked
          ? "border-white/10 bg-white/[0.04]"
          : "border-white/5 bg-white/[0.02] opacity-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl">
          {achievement.unlocked ? (
            achievement.icon
          ) : (
            <Lock size={17} className="text-zinc-600" />
          )}
        </div>

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