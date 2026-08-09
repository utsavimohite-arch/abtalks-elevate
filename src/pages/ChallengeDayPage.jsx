import {
  ArrowLeft,
  Check,
  Clock3,
  Code2,
} from "lucide-react"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  completeDay,
  getDayProofs,
  isDayCompleted,
  saveProof,
} from "../utils/challengeProgress"

export default function ChallengeDayPage() {
  const navigate = useNavigate()

  const DAY = 12

  const [github, setGithub] = useState("")
  const [linkedin, setLinkedin] = useState("")

  const [githubSaved, setGithubSaved] = useState(false)
  const [linkedinSaved, setLinkedinSaved] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const proofs = getDayProofs(DAY)

    if (proofs.github) {
      setGithub(proofs.github)
      setGithubSaved(true)
    }

    if (proofs.linkedin) {
      setLinkedin(proofs.linkedin)
      setLinkedinSaved(true)
    }

    if (isDayCompleted(DAY)) {
      setCompleted(true)
    }
  }, [])

  const requirements = [
    "Create a clean mobile-first developer profile layout.",
    "Add your name, short introduction and technical skills.",
    "Showcase at least two projects with short descriptions.",
    "Add GitHub and LinkedIn profile links.",
    "Make the page responsive for mobile and desktop screens.",
  ]

  const successCriteria = [
    "The page works correctly on a 390px mobile viewport.",
    "The layout is responsive on larger screens.",
    "Projects and skills are clearly visible.",
    "GitHub and LinkedIn links are included.",
    "The final project is committed to GitHub.",
  ]

  const saveGithub = () => {
    if (!github.trim()) {
      alert("Please enter your GitHub URL.")
      return
    }

    saveProof(DAY, "github", github.trim())
    setGithubSaved(true)
  }

  const saveLinkedin = () => {
    if (!linkedin.trim()) {
      alert("Please enter your LinkedIn post URL.")
      return
    }

    saveProof(DAY, "linkedin", linkedin.trim())
    setLinkedinSaved(true)
  }

  const handleCompleteDay = () => {
    if (!github.trim() || !linkedin.trim()) {
      alert(
        "Please add both your GitHub proof and LinkedIn proof before completing Day 12."
      )
      return
    }

    saveProof(DAY, "github", github.trim())
    saveProof(DAY, "linkedin", linkedin.trim())

    completeDay(DAY)

    setCompleted(true)
  }

  return (
    <main className="min-h-screen bg-[#08080c] px-5 py-6 text-white">
      <div className="mx-auto max-w-[430px]">

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
              Day {DAY}
            </p>

          </div>

          <div className="w-10" />

        </header>

        {/* Introduction */}
        <section className="mt-10">

          <div className="flex flex-wrap gap-2">

            <span className="rounded-full bg-violet-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-300">
              Day {DAY}
            </span>

            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[10px] text-zinc-400">
              <Clock3 size={12} />
              45 min
            </span>

            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[10px] text-zinc-400">
              <Code2 size={12} />
              Frontend
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight">
            Build a responsive developer profile
          </h1>

          <p className="mt-4 text-base font-medium leading-7 text-violet-300">
            Turn your skills into something people can actually see.
          </p>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Create a mobile-first developer profile that showcases who you
            are, what you can build, and where people can find your work.
          </p>

        </section>

        {/* Objective */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Today's objective
          </p>

          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Build a polished responsive developer profile page using
            HTML, CSS and JavaScript or React. The page should clearly
            communicate your skills, projects and social presence.
          </p>

        </section>

        {/* Checklist */}
        <section className="mt-8">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            What to build
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Your checklist
          </h2>

          <div className="mt-4 space-y-3">

            {requirements.map((requirement) => (

              <div
                key={requirement}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >

                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15">
                  <Check
                    size={14}
                    className="text-violet-400"
                  />
                </div>

                <p className="text-sm leading-6 text-zinc-400">
                  {requirement}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Success Criteria */}
        <section className="mt-8">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
            Before you submit
          </p>

          <div className="mt-4 space-y-2">

            {successCriteria.map((criteria) => (

              <div
                key={criteria}
                className="flex items-center gap-3 py-1"
              >

                <Check
                  size={15}
                  className="text-lime-400"
                />

                <p className="text-sm text-zinc-500">
                  {criteria}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Proof of Work */}
        <section className="mt-10">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
            Your proof of work
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Make today's work count.
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Submit both links to complete today's challenge and keep your
            progress visible.
          </p>

          {/* GitHub */}
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Code2 size={21} />
              </div>

              <div>

                <p className="font-semibold">
                  GitHub repository / commit
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  Share the code you built today.
                </p>

              </div>

            </div>

            <input
              type="url"
              value={github}
              onChange={(e) => {
                setGithub(e.target.value)
                setGithubSaved(false)
              }}
              placeholder="https://github.com/..."
              className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/50"
            />

            <button
              onClick={saveGithub}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10"
            >
              {githubSaved
                ? "✓ GitHub proof saved"
                : "Add GitHub proof"}
            </button>

          </div>

          {/* LinkedIn */}
          <div className="mt-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">

                <span className="text-sm font-bold">
                  in
                </span>

              </div>

              <div>

                <p className="font-semibold">
                  LinkedIn post
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  Share what you learned and built today.
                </p>

              </div>

            </div>

            <input
              type="url"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value)
                setLinkedinSaved(false)
              }}
              placeholder="https://linkedin.com/posts/..."
              className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/50"
            />

            <button
              onClick={saveLinkedin}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10"
            >
              {linkedinSaved
                ? "✓ LinkedIn proof saved"
                : "Add LinkedIn proof"}
            </button>

          </div>

        </section>

        {/* Complete */}
        {!completed ? (

          <button
            onClick={handleCompleteDay}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-5 py-4 text-sm font-bold shadow-lg shadow-violet-500/20 transition hover:bg-violet-400 active:scale-[0.98]"
          >
            Complete Day {DAY}
            <Check size={17} />
          </button>

        ) : (

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/10 px-5 py-5 text-center">

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-lime-400/15">

              <Check
                size={20}
                className="text-lime-400"
              />

            </div>

            <h3 className="mt-3 text-lg font-bold">
              Day {DAY} completed! 🎉
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Your GitHub and LinkedIn proofs have been saved.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="mt-4 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              Back to Dashboard
            </button>

          </div>

        )}

        <p className="mt-4 pb-8 text-center text-[11px] leading-5 text-zinc-700">
          Your submission will be saved as today's proof of work.
        </p>

      </div>
    </main>
  )
}