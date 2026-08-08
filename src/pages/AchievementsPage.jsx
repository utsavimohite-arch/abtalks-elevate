import { ArrowLeft, Lock, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import { studentData } from "../data/challengeData"
import BottomNav from "../components/dashboard/BottomNav"

export default function AchievementsPage() {
  const navigate = useNavigate()

  const day12Completed =
    localStorage.getItem("day12_completed") === "true"

  const completedDays = day12Completed
    ? Math.max(studentData.challenge.completedDays, 12)
    : studentData.challenge.completedDays

  const currentStreak = day12Completed
    ? Math.max(studentData.challenge.currentStreak, 12)
    : studentData.challenge.currentStreak

  const achievements = studentData.achievements.map(
    (achievement) => {
      let unlocked = false

      if (achievement.id === 1) {
        unlocked = completedDays >= 7
      }

      if (achievement.id === 2) {
        unlocked = currentStreak >= 10
      }

      if (achievement.id === 3) {
        unlocked = completedDays >= 15
      }

      return {
        ...achievement,
        unlocked,
      }
    }
  )

  const unlockedCount = achievements.filter(
    (achievement) => achievement.unlocked
  ).length

  return (
    <main className="min-h-screen bg-[#08080c] px-5 py-6 text-white">
      <div className="mx-auto max-w-[430px] pb-24">

        {/* Header */}
        <header className="flex items-center justify-between">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            aria-label="Back to dashboard"
          >
            <ArrowLeft size={18} className="text-zinc-400" />
          </button>

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              ABTALKS ELEVATE
            </p>

            <p className="mt-1 text-xs font-semibold text-violet-400">
              Achievements
            </p>
          </div>

          <div className="w-10" />

        </header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15">
            <Trophy
              size={24}
              className="text-violet-400"
            />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
            Your achievements
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Keep collecting wins.
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Every milestone you reach becomes another piece of
            proof that you kept showing up.
          </p>
        </motion.section>

        {/* Achievement summary */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                Unlocked
              </p>

              <p className="mt-2 text-3xl font-bold">
                {unlockedCount}
                <span className="text-lg text-zinc-600">
                  /{achievements.length}
                </span>
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                Progress
              </p>

              <p className="mt-2 text-sm font-semibold text-violet-400">
                {completedDays} days completed
              </p>
            </div>

          </div>

        </section>

        {/* Achievement list */}
        <section className="mt-8">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Milestones
          </p>

          <div className="mt-4 space-y-3">

            {achievements.map((achievement, index) => (

              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className={`rounded-3xl border p-5 ${
                  achievement.unlocked
                    ? "border-violet-400/20 bg-violet-500/[0.06]"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >

                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ${
                      achievement.unlocked
                        ? "bg-violet-500/15"
                        : "bg-white/5"
                    }`}
                  >
                    {achievement.unlocked ? (
                      achievement.icon
                    ) : (
                      <Lock
                        size={19}
                        className="text-zinc-600"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <h2
                          className={`font-semibold ${
                            achievement.unlocked
                              ? "text-white"
                              : "text-zinc-500"
                          }`}
                        >
                          {achievement.title}
                        </h2>

                        <p className="mt-1 text-sm leading-5 text-zinc-600">
                          {achievement.description}
                        </p>
                      </div>

                      {achievement.unlocked && (
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-lime-400">
                          Unlocked
                        </span>
                      )}

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* Motivation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-3xl border border-violet-400/15 bg-violet-500/[0.06] p-5"
        >

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
            Keep going
          </p>

          <h2 className="mt-3 text-xl font-bold">
            Your next win is still ahead.
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Complete 15 challenge days to unlock your next
            achievement.
          </p>

        </motion.section>

      </div>

      {/* Bottom navigation */}
      {/* Bottom navigation */}
<BottomNav />

    </main>
  )
}