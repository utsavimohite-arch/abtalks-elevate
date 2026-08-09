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

  // ---------------------------------------
  // Day 12 synchronization
  // ---------------------------------------

  const day12Completed =
    localStorage.getItem("day12_completed") === "true"

  // ---------------------------------------
  // Student state
  // ---------------------------------------

  const hasStartedChallenge =
    challenge.completedDays > 0 || day12Completed

  const hasMissedDay =
    localStorage.getItem("challenge_missed_day") === "true"

  // ---------------------------------------
  // Synchronize dashboard values
  // ---------------------------------------

  const completedDays = day12Completed
    ? Math.max(challenge.completedDays, 12)
    : challenge.completedDays

  const currentDay = day12Completed
    ? Math.max(challenge.currentDay, 13)
    : challenge.currentDay

  const currentStreak = hasMissedDay
    ? 0
    : day12Completed
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

  // ---------------------------------------
  // Momentum message
  // ---------------------------------------

  let momentumTitle
  let momentumDescription

  if (!hasStartedChallenge) {
    momentumTitle = "Today is Day 1 of your journey."
    momentumDescription =
      "Complete your first build and start your public streak."
  } else if (hasMissedDay) {
    momentumTitle = "One missed day doesn't erase your progress."
    momentumDescription =
      "Your streak has reset, but everything you've built so far still counts. Complete today's build to start again."
  } else if (day12Completed) {
    momentumTitle =
      "You're 12 days stronger than when you started."
    momentumDescription =
      "You completed Day 12. Keep the momentum going and start your next build."
  } else {
    momentumTitle =
      `You're ${currentStreak} days stronger than when you started.`
    momentumDescription =
      "Don't break the chain today. Finish your build and keep your progress visible."
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
            {hasMissedDay
              ? "Let's get your momentum back."
              : hasStartedChallenge
                ? "Keep your momentum going."
                : "Your 60-day journey starts today."}
          </p>

          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
            <span className="text-xs text-zinc-400">
              {track}
            </span>
          </div>
        </motion.section>

        {/* First day notice */}
        {!hasStartedChallenge && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-500/[0.06] p-4"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-400">
              Welcome to Elevate
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              You haven't completed a challenge day yet.
              Start today's build and make your first day count.
            </p>
          </motion.section>
        )}

        {/* Missed day notice */}
        {hasMissedDay && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-4"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
              Streak reset
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              You missed a day, so your active streak has reset.
              Your completed work is still part of your journey.
            </p>
          </motion.section>
        )}

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
            {momentumTitle}
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {momentumDescription}
          </p>
        </motion.section>

        {/* Empty profile awareness */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Build your presence
          </p>

          <h2 className="mt-2 text-xl font-bold">
            Make your progress visible.
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Keep your profile and social links updated so your
            learning journey becomes something you can share.
          </p>
        </motion.section>

      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </main>
  )
}