export const studentData = {
  name: "Utsavi",
  track: "Full Stack Development",

  challenge: {
    currentDay: 12,
    totalDays: 60,
    completedDays: 11,
    currentStreak: 11,
    bestStreak: 14,
  },

  today: {
    day: 12,
    title: "Build a responsive developer profile",
    description:
      "Create a mobile-first profile page that showcases your skills, projects and social links.",
    difficulty: "Intermediate",
    estimatedTime: "45 min",
    category: "Frontend",
  },

  week: [
    { day: "M", completed: true },
    { day: "T", completed: true },
    { day: "W", completed: true },
    { day: "T", completed: true },
    { day: "F", completed: true },
    { day: "S", completed: true },
    { day: "S", completed: false },
  ],

  achievements: [
    {
      id: 1,
      title: "First Week",
      description: "Completed your first 7 days",
      icon: "🏆",
      unlocked: true,
    },
    {
      id: 2,
      title: "10 Day Streak",
      description: "Maintained a 10 day streak",
      icon: "🔥",
      unlocked: true,
    },
    {
      id: 3,
      title: "Consistent Builder",
      description: "Complete 15 challenge days",
      icon: "⭐",
      unlocked: false,
    },
  ],

  submissions: {
    github: false,
    linkedin: false,
  },
}


// Data specifically for Challenge Day 12

export const dayData = {
  day: 12,

  title: "Build a responsive developer profile",

  tagline: "Turn your skills into something people can actually see.",

  description:
    "Create a mobile-first developer profile that showcases who you are, what you can build, and where people can find your work.",

  estimatedTime: "45 min",

  category: "Frontend",

  objective:
    "Build a polished responsive developer profile page using HTML, CSS and JavaScript or React. The page should clearly communicate your skills, projects and social presence.",

  requirements: [
    "Create a clean mobile-first developer profile layout.",
    "Add your name, short introduction and technical skills.",
    "Showcase at least two projects with short descriptions.",
    "Add GitHub and LinkedIn profile links.",
    "Make the page responsive for mobile and desktop screens.",
  ],

  successCriteria: [
    "The page works correctly on a 390px mobile viewport.",
    "The layout is responsive on larger screens.",
    "Projects and skills are clearly visible.",
    "GitHub and LinkedIn links are included.",
    "The final project is committed to GitHub.",
  ],
}