import { motion } from "framer-motion"

export default function ProgressCard({ currentDay, totalDays, completedDays }) {
  const percentage = Math.round((completedDays / totalDays) * 100)

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.2 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
    >
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Challenge progress
          </p>

          <p className="mt-2 text-xl font-bold">
            Day {currentDay} of {totalDays}
          </p>
        </div>

        <span className="text-2xl font-bold text-violet-400">
          {percentage}%
        </span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-full rounded-full bg-violet-500"
        />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-lg font-bold">{completedDays}</p>
          <p className="text-[10px] text-zinc-600">completed</p>
        </div>

        <div>
          <p className="text-lg font-bold">
            {totalDays - currentDay}
          </p>
          <p className="text-[10px] text-zinc-600">remaining</p>
        </div>

        <div>
          <p className="text-lg font-bold">{60 - completedDays}</p>
          <p className="text-[10px] text-zinc-600">to go</p>
        </div>
      </div>
    </motion.section>
  )
}