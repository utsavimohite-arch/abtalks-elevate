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