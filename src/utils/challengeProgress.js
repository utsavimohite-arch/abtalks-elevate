const STORAGE_KEY = "abtalks_challenge_progress"

const DEFAULT_PROGRESS = {
  completedDays: [],
  proofs: {},
}

export function getProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) {
      return DEFAULT_PROGRESS
    }

    const parsed = JSON.parse(saved)

    return {
      completedDays: Array.isArray(parsed.completedDays)
        ? parsed.completedDays
        : [],
      proofs:
        parsed.proofs && typeof parsed.proofs === "object"
          ? parsed.proofs
          : {},
    }
  } catch (error) {
    console.error("Failed to load challenge progress:", error)

    return DEFAULT_PROGRESS
  }
}

export function saveProgress(progress) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  )
}

export function saveProof(day, type, url) {
  const progress = getProgress()

  if (!progress.proofs[day]) {
    progress.proofs[day] = {}
  }

  progress.proofs[day][type] = url

  saveProgress(progress)

  return progress
}

export function completeDay(day) {
  const progress = getProgress()

  if (!progress.completedDays.includes(day)) {
    progress.completedDays.push(day)
  }

  saveProgress(progress)

  return progress
}

export function isDayCompleted(day) {
  const progress = getProgress()

  return progress.completedDays.includes(day)
}

export function getCompletedDaysCount() {
  const progress = getProgress()

  return progress.completedDays.length
}

export function getDayProofs(day) {
  const progress = getProgress()

  return progress.proofs[day] || {}
}