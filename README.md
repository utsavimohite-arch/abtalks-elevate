# ABTalks Elevate — 60-Day Coding Challenge

A mobile-first student experience designed for the ABTalks 60-Day Coding Challenge.

The platform helps students build consistently every day, maintain a visible learning streak, and create public proof of their work through GitHub and LinkedIn.

---

## 🚀 About the Project

ABTalks runs a 60-day coding challenge for college students.

Every day, students:

- Build something
- Commit their work to GitHub
- Share their progress on LinkedIn
- Maintain their learning streak
- Track their overall challenge progress

The goal of this project was to redesign the experience around the reality that students primarily use the platform on their phones, often late at night after college.

The interface therefore follows a **mobile-first 390px design approach**, with desktop layouts treated as a secondary consideration.

---

## ✨ Key Features

### Landing Page

- Clear explanation of the 60-day challenge
- Motivational hero section
- Strong call-to-action
- Challenge statistics
- Mobile-first layout

### Student Dashboard

- Current streak
- Weekly streak visualization
- Today's challenge
- Challenge progress
- Overall completion
- Achievement system
- Momentum messaging
- Bottom navigation

### Challenge Day

- Daily challenge instructions
- Build checklist
- Success criteria
- GitHub proof submission
- LinkedIn proof submission
- Day completion state
- Return to dashboard

### Achievements

- Achievement cards
- Locked/unlocked states
- Progress-based unlocking

### Profile

- Student information
- Track information
- Technical skills
- Projects
- GitHub profile
- LinkedIn profile

---

## 💡 Thoughtful UX Idea

### Proof-of-Work Driven Progress

Instead of treating a completed day as simply checking a box, the experience connects progress with actual proof of work.

Students submit:

1. A GitHub repository or commit
2. A LinkedIn post

Once both proofs are provided, the challenge day can be completed.

This makes the streak more meaningful because it represents **visible work rather than passive progress**.

---

## 📱 Mobile-First Design

The application was designed primarily for a **390px mobile viewport**, reflecting the expected usage pattern of college students using the platform on their phones.

The UI uses:

- Large touch targets
- Compact cards
- Clear visual hierarchy
- Bottom navigation
- Responsive layouts
- Short readable content blocks
- High-contrast actions

Desktop layouts are treated as a secondary responsive experience.

---

## 🧭 Route Map

The required submission routes are:

```text
/
/dashboard
/day/12