import { ArrowRight, Clock3, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export default function TodayTask({ task }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-violet-500/5"
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-violet-400/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-300">
            Day {task.day}
          </span>

          <span className="text-xs text-zinc-500">
            Today's build
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight">
          {task.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {task.description}
        </p>

        <div className="mt-5 flex gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5 text-xs text-zinc-400">
            <Clock3 size={13} />
            {task.estimatedTime}
          </span>

          <span className="flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5 text-xs text-zinc-400">
            <Code2 size={13} />
            {task.category}
          </span>
        </div>

        <button
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Continue today's build
          <ArrowRight size={17} />
        </button>
      </div>
    </motion.section>
  )
}