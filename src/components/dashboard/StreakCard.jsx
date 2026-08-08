import { Flame, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export default function StreakCard({ currentStreak, bestStreak, week }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Flame size={18} className="text-violet-400" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
              Current streak
            </p>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">
              {currentStreak}
            </span>

            <span className="text-sm text-zinc-500">
              days
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
          <Trophy size={13} className="text-zinc-400" />

          <span className="text-xs text-zinc-400">
            Best {bestStreak}
          </span>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        {week.map((item, index) => (
          <div
            key={`${item.day}-${index}`}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium text-zinc-600">
              {item.day}
            </span>

            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                item.completed
                  ? "bg-violet-500 text-white"
                  : "border border-white/10 bg-white/5 text-zinc-600"
              }`}
            >
              {item.completed ? "✓" : "·"}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}