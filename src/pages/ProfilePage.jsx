import { ArrowLeft, Code2, ExternalLink, User } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { studentData } from "../data/challengeData"

export default function ProfilePage() {
  const navigate = useNavigate()

  const { name, track } = studentData

  return (
    <main className="min-h-screen bg-[#08080c] px-5 py-6 text-white">
      <div className="mx-auto max-w-[430px]">

        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:bg-white/10"
            aria-label="Back to dashboard"
          >
            <ArrowLeft size={18} className="text-zinc-400" />
          </button>

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              ABTALKS ELEVATE
            </p>

            <p className="mt-1 text-xs font-semibold text-violet-400">
              Profile
            </p>
          </div>

          <div className="w-10" />
        </header>

        {/* Profile Hero */}
        <section className="mt-10 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
            <User size={38} className="text-violet-400" />
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight">
            {name}
          </h1>

          <p className="mt-2 text-sm text-violet-400">
            {track}
          </p>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-zinc-500">
            Developer building consistently, learning every day, and
            turning progress into visible proof.
          </p>

        </section>

        {/* About */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            About me
          </p>

          <h2 className="mt-2 text-xl font-bold">
            Keep building. Keep learning.
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            I'm participating in the ABTalks Elevate 60-day coding
            challenge to build consistently and create a public record
            of my learning journey.
          </p>

        </section>

        {/* Skills */}
        <section className="mt-6">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Technical skills
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            What I build with
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Python",
              "Git",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-400"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* Projects */}
        <section className="mt-8">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
            Projects
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Things I've built
          </h2>

          <div className="mt-4 space-y-3">

            {/* Project 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15">
                  <Code2 size={21} className="text-violet-400" />
                </div>

                <div className="flex-1">

                  <h3 className="font-semibold">
                    AI Chatbot
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    An AI-powered chatbot built to interact with users
                    and provide intelligent responses.
                  </p>

                </div>

              </div>

              <button
                className="mt-4 flex items-center gap-2 text-xs font-semibold text-violet-400"
                type="button"
              >
                View project
                <ExternalLink size={13} />
              </button>

            </div>

            {/* Project 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15">
                  <Code2 size={21} className="text-violet-400" />
                </div>

                <div className="flex-1">

                  <h3 className="font-semibold">
                    ABTalks Elevate
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    A 60-day coding challenge experience focused on
                    consistency, daily building, and public proof of work.
                  </p>

                </div>

              </div>

              <button
                className="mt-4 flex items-center gap-2 text-xs font-semibold text-violet-400"
                type="button"
              >
                View project
                <ExternalLink size={13} />
              </button>

            </div>

          </div>

        </section>

        {/* Social Links */}
        <section className="mt-8">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Find me online
          </p>

          <div className="mt-4 space-y-3">

            {/* GitHub */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <span className="text-sm font-bold">
                  GH
                </span>
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  GitHub
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  View my code and projects
                </p>
              </div>

              <ExternalLink
                size={16}
                className="text-zinc-600"
              />

            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <span className="text-sm font-bold">
                  in
                </span>
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  LinkedIn
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Follow my learning journey
                </p>
              </div>

              <ExternalLink
                size={16}
                className="text-zinc-600"
              />

            </div>

          </div>

        </section>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 mb-8 flex w-full items-center justify-center rounded-2xl bg-violet-500 px-5 py-4 text-sm font-bold shadow-lg shadow-violet-500/20 transition hover:bg-violet-400 active:scale-[0.98]"
        >
          Back to Dashboard
        </button>

      </div>
    </main>
  )
}