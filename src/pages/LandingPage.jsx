import { motion } from 'framer-motion'
import { ArrowRight, Flame } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#08080c] px-5 py-6 text-white">
      <div className="mx-auto max-w-[430px]">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <span className="text-sm font-bold tracking-[0.2em]">
              ABTALKS
            </span>

            <span className="ml-2 text-sm font-semibold text-violet-400">
              ELEVATE
            </span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Flame size={16} className="text-violet-400" />
          </div>
        </header>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-24"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
            60-day coding challenge
          </p>

          <h1 className="text-[52px] font-bold leading-[0.94] tracking-[-0.05em]">
            Build.
            <br />
            Show up.
            <br />
            <span className="text-violet-400">Level up.</span>
          </h1>

          <p className="mt-6 max-w-sm text-base leading-7 text-zinc-400">
            Build something every day for 60 days and turn your consistency
            into public proof of what you can do.
          </p>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-6 py-4 text-sm font-bold shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
          >
            Start your 60-day journey
            <ArrowRight size={18} />
          </motion.button>
        </motion.section>

        {/* Challenge highlight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15">
              <Flame size={20} className="text-violet-400" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                One day. One build.
              </p>

              <p className="text-xs text-zinc-500">
                60 days of visible progress.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-2xl font-bold">60</p>
              <p className="mt-1 text-xs text-zinc-500">
                days to build
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-2xl font-bold">2</p>
              <p className="mt-1 text-xs text-zinc-500">
                proofs every day
              </p>
            </div>
          </div>
                </motion.section>

        {/* How it works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              How it works
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Small steps.
              <br />
              Real progress.
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              You don't need to be perfect. You just need to keep showing up.
            </p>
          </div>

          <div className="space-y-3">

            {/* Step 1 */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-sm font-bold text-violet-400">
                01
              </div>

              <div>
                <h3 className="font-semibold">
                  Choose your track
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Pick the coding path that matches what you want to learn
                  and build.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-sm font-bold text-violet-400">
                02
              </div>

              <div>
                <h3 className="font-semibold">
                  Build every day
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Complete one focused task and turn today's idea into
                  something you can show.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-sm font-bold text-violet-400">
                03
              </div>

              <div>
                <h3 className="font-semibold">
                  Share your proof
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Submit your GitHub commit and LinkedIn post to make your
                  progress visible.
                </p>
              </div>
            </div>

          </div>
        </motion.section>

        {/* Daily proof */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
            Make your work visible
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Your work shouldn't
            <br />
            disappear after you build it.
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Every completed day becomes public proof of your consistency,
            learning and ability to ship.
          </p>

          <div className="mt-6 space-y-3">

            {/* GitHub */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-white"
                  aria-hidden="true"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </div>

              <div className="flex-1">
                <p className="font-semibold">GitHub proof</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Your code and daily commit
                </p>
              </div>

              <span className="text-zinc-600">✓</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <span className="text-sm font-bold text-white">
                  in
                </span>
              </div>

              <div className="flex-1">
                <p className="font-semibold">LinkedIn proof</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Share what you learned today
                </p>
              </div>

              <span className="text-zinc-600">✓</span>
            </div>

          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 mb-8 overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-violet-500/5 p-6"
        >
          <div className="h-10 w-10 rounded-full bg-violet-400/20" />

          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Your next 60 days
            <br />
            start today.
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            One build at a time. One proof at a time. Keep your momentum
            alive.
          </p>

          <button className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-zinc-200 active:scale-[0.98]">
            Start your journey →
          </button>
        </motion.section>

      </div>
    </main>
  )
}