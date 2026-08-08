import { Bell, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { studentData } from "../data/challengeData"
import StreakCard from "../components/dashboard/StreakCard"
import TodayTask from "../components/dashboard/TodayTask"
import ProgressCard from "../components/dashboard/ProgressCard"
import AchievementCard from "../components/dashboard/AchievementCard"
import BottomNav from "../components/dashboard/BottomNav"

export default function DashboardPage() {
  const {
    name,
    track,
    challenge,
    today,
    week,
    achievements,
  } = studentData

  // Check whether Day 12 has been completed
  const day12Completed =
    localStorage.getItem("day12_completed") === "true"

  // Synchronize dashboard values
  const completedDays = day12Completed
    ? Math.max(challenge.completedDays, 12)
    : challenge.completedDays

  const currentDay = day12Completed
    ? Math.max(challenge.currentDay, 13)
    : challenge.currentDay

  const currentStreak = day12Completed
    ? Math.max(challenge.currentStreak, 12)
    : challenge.currentStreak

  // ---------------------------------------
  // Achievement synchronization
  // ---------------------------------------

  const synchronizedAchievements = achievements.map(
    (achievement) => {
      let unlocked = false

      if (achievement.id === 1) {
        // First Week
        unlocked = completedDays >= 7
      }

      if (achievement.id === 2) {
        // 10 Day Streak
        unlocked = currentStreak >= 10
      }

      if (achievement.id === 3) {
        // Consistent Builder
        unlocked = completedDays >= 15
      }

      return {
        ...achievement,
        unlocked,
      }
    }
  )

  // ---------------------------------------
  // Today's task synchronization
  // ---------------------------------------

  const synchronizedToday = {
    ...today,
    completed: day12Completed,
  }

  return (
    <main className="min-h-screen bg-[#08080c] px-5 py-6 text-white">
      <div className="mx-auto max-w-[430px] pb-24">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-zinc-500">
              ABTALKS
            </p>

            <p className="mt-1 text-sm font-semibold text-violet-400">
              ELEVATE
            </p>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            aria-label="Notifications"
          >
            <Bell size={17} className="text-zinc-400" />
          </button>
        </header>

        {/* Welcome */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <p className="text-sm text-zinc-500">
            Good evening,
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            {name} 👋
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Keep your momentum going.
          </p>

          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
            <span className="text-xs text-zinc-400">
              {track}
            </span>
          </div>
        </motion.section>

        {/* Streak */}
        <section className="mt-7">
          <StreakCard
            currentStreak={currentStreak}
            bestStreak={challenge.bestStreak}
            week={week}
          />
        </section>

        {/* Today's task */}
        <section className="mt-5">
          <TodayTask task={synchronizedToday} />
        </section>

        {/* Progress */}
        <section className="mt-5">
          <ProgressCard
            currentDay={currentDay}
            totalDays={challenge.totalDays}
            completedDays={completedDays}
          />
        </section>

        {/* Achievements */}
        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Your achievements
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Keep collecting wins.
              </h2>
            </div>

            <button
              className="flex items-center gap-1 text-xs font-medium text-violet-400"
            >
              View all
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {synchronizedAchievements.map(
              (achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                />
              )
            )}
          </div>
        </section>

        {/* Momentum message */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-3xl border border-violet-400/15 bg-violet-500/[0.06] p-5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
            Momentum check
          </p>

          <h2 className="mt-3 text-xl font-bold">
            {day12Completed
              ? "You're 12 days stronger than when you started."
              : `You're ${currentStreak} days stronger than when you started.`}
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {day12Completed
              ? "You completed Day 12. Keep the momentum going and start your next build."
              : "Don't break the chain today. Finish your build and keep your progress visible."}
          </p>
        </motion.section>

      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </main>
  )
}