import { Bell, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { studentData } from "../data/challengeData"
import StreakCard from "../components/dashboard/StreakCard"
import TodayTask from "../components/dashboard/TodayTask"
import ProgressCard from "../components/dashboard/ProgressCard"
import AchievementCard from "../components/dashboard/AchievementCard"
import BottomNav from "../components/dashboard/BottomNav"

export default function DashboardPage() {
  const { name, track, challenge, today, week, achievements } = studentData

  return (
    <main className="min-h-screen bg-[#08080c] px-5 pb-28 pt-6 text-white">
      <div className="mx-auto max-w-[430px]">

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
            currentStreak={challenge.currentStreak}
            bestStreak={challenge.bestStreak}
            week={week}
          />
        </section>

        {/* Today's task */}
        <section className="mt-5">
          <TodayTask task={today} />
        </section>

        {/* Progress */}
        <section className="mt-5">
          <ProgressCard
            currentDay={challenge.currentDay}
            totalDays={challenge.totalDays}
            completedDays={challenge.completedDays}
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

            <button className="flex items-center gap-1 text-xs font-medium text-violet-400">
              View all
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
              />
            ))}
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
            You're 11 days stronger than when you started.
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Don't break the chain today. Finish your build and keep your
            progress visible.
          </p>
        </motion.section>

      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </main>
  )
}