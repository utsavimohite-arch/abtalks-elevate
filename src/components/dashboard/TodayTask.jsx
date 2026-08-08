import { ArrowRight, Check, Clock3, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function TodayTask({ task }) {
  const navigate = useNavigate()

  const completed =
    localStorage.getItem("day12_completed") === "true"

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-violet-500/5"
    >
      <div className="p-5">

        {/* Day label */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-violet-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-300">
              Day {task.day}
            </span>

            {completed && (
              <span className="flex items-center gap-1 rounded-full bg-lime-400/10 px-3 py-1.5 text-[10px] font-semibold text-lime-400">
                <Check size={11} />
                Completed
              </span>
            )}
          </div>

          <span className="text-xs text-zinc-500">
            Today's build
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight">
          {task.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {task.description}
        </p>

        {/* Metadata */}
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

        {/* Button */}
        <button
          onClick={() => navigate("/day/12")}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold transition active:scale-[0.98] ${
            completed
              ? "border border-white/10 bg-white/10 text-white hover:bg-white/15"
              : "bg-white text-black hover:bg-zinc-200"
          }`}
        >
          {completed
            ? "View completed challenge"
            : "Continue today's build"}

          {completed ? (
            <Check size={17} />
          ) : (
            <ArrowRight size={17} />
          )}
        </button>

      </div>
    </motion.section>
  )
}