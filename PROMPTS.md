# ABTalks Elevate — AI Development Prompt History

## 1. Project Context

ABTalks runs a **60-day coding challenge** for Indian college students.

Students choose a track, build something every day, and maintain a public learning streak by submitting:

- A GitHub commit or repository
- A LinkedIn post

The goal is to help students build consistency and become more visible to recruiters.

The product is primarily used on mobile devices, especially late at night after college.

The hackathon brief emphasized:

- Mobile-first design at 390px
- Clear communication for first-time users
- Current streak
- Today's task
- Challenge progress
- Overall completion
- Achievements / student standing
- GitHub and LinkedIn proof submission
- Real-world states such as first day, missed day, and empty profile
- At least one thoughtful student-experience improvement

Required routes:

```text
/
/dashboard
/day/12
```

Authentication, real user accounts, production database, recruiter dashboard, and admin panel were out of scope.

---

# 2. Development Approach

The project was developed incrementally using AI-assisted implementation.

The workflow used throughout the project was:

```text
Understand requirement
        ↓
Plan milestone
        ↓
Implement
        ↓
Run application
        ↓
Test in browser
        ↓
Fix issues
        ↓
Verify
        ↓
Commit milestone
        ↓
Push to GitHub
        ↓
Continue
```

The project intentionally used multiple meaningful commits instead of completing the entire hackathon project in a single commit.

---

# 3. Technology Stack

The implementation uses:

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router
- LocalStorage
- Mock data

No production backend or database was required.

---

# 4. Project Structure

The main structure evolved around reusable pages and dashboard components:

```text
abtalks-elevate/
├── public/
├── src/
│   ├── components/
│   │   └── dashboard/
│   │       ├── AchievementCard.jsx
│   │       ├── BottomNav.jsx
│   │       ├── ProgressCard.jsx
│   │       ├── StreakCard.jsx
│   │       └── TodayTask.jsx
│   ├── data/
│   │   └── challengeData.js
│   ├── pages/
│   │   ├── AchievementsPage.jsx
│   │   ├── ChallengeDayPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── LandingPage.jsx
│   │   └── ProfilePage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── README.md
├── prompt.md
├── package.json
└── vite.config.js
```

---

# 5. Design Direction

The interface was designed as a mobile-first student productivity and coding-challenge experience.

Primary target:

```text
390px mobile viewport
```

Visual direction:

- Dark background
- Violet accent color
- Rounded cards
- Strong typography hierarchy
- Compact information blocks
- Touch-friendly controls
- Bottom navigation
- Responsive desktop support
- Progress visualization
- Motivational copy

The objective was to make the product feel like a real student-focused product rather than a generic dashboard.

---

# 6. Milestone 1 — Landing Page

## Goal

Create the first experience for a student who has never heard of ABTalks.

The landing page needed to communicate enough trust, clarity, and motivation for a student to commit to a 60-day challenge.

## Implemented

The Landing Page includes:

- ABTALKS ELEVATE branding
- 60-day challenge messaging
- Hero section
- Challenge explanation
- Primary CTA
- Challenge statistics
- How-it-works section
- GitHub proof explanation
- LinkedIn proof explanation
- Final CTA

Core product idea:

```text
Build. Show up. Level up.
```

The landing experience was tested successfully.

---

# 7. Milestone 2 — Student Dashboard

## Goal

Create the home screen after entering the challenge.

The dashboard needed to show the most important daily information without overwhelming the student.

## Implemented

The dashboard includes:

- Student name
- Track
- Current streak
- Best streak
- Weekly streak visualization
- Today's task
- Challenge progress
- Overall completion
- Achievements
- Momentum message
- Bottom navigation

Reusable dashboard components:

```text
StreakCard
TodayTask
ProgressCard
AchievementCard
BottomNav
```

Mock student data is stored in:

```text
src/data/challengeData.js
```

---

# 8. Milestone 3 — Challenge Day 12

## Goal

Build the complete experience for:

```text
/day/12
```

A student should be able to understand the day's task and submit proof of work.

## Day 12 Task

```text
Build a responsive developer profile
```

Supporting message:

```text
Turn your skills into something people can actually see.
```

## Implemented

The Challenge Day page includes:

- Day number
- Estimated time
- Category
- Challenge title
- Description
- Today's objective
- Build checklist
- Success criteria
- GitHub proof submission
- LinkedIn proof submission
- Complete Day 12 button
- Completion confirmation
- Back to Dashboard button

---

# 9. Milestone 4 — Day 12 Proof of Work

## Goal

Make Day 12 completion depend on visible proof of work.

The student provides:

1. GitHub proof
2. LinkedIn proof

Only after both are entered can Day 12 be completed.

## LocalStorage

GitHub proof:

```text
day12_github
```

LinkedIn proof:

```text
day12_linkedin
```

Completion state:

```text
day12_completed
```

Completion value:

```text
true
```

## Flow

```text
Enter GitHub URL
        ↓
Save GitHub proof
        ↓
Enter LinkedIn URL
        ↓
Save LinkedIn proof
        ↓
Complete Day 12
        ↓
Save completion state
        ↓
Show "Day 12 completed!"
        ↓
Return to Dashboard
```

This creates a simple client-side persistence mechanism without requiring a backend.

---

# 10. Dashboard Synchronization Bug

## Problem

After Day 12 was completed, the dashboard initially displayed:

```text
You're 11 days stronger than when you started.
```

even though Day 12 had been completed.

## Diagnosis

The dashboard was still using static/mock challenge values rather than the Day 12 completion state.

## Fix

The dashboard was updated to read:

```javascript
const day12Completed =
  localStorage.getItem("day12_completed") === "true"
```

Then the dashboard synchronizes:

- completed days
- current day
- current streak
- today's task
- achievements
- momentum message

After the fix, the dashboard correctly displayed:

```text
You're 12 days stronger than when you started.
```

The behavior was tested successfully.

---

# 11. Milestone 5 — Navigation, Achievements & Profile

## Goal

Expand the basic dashboard into a small multi-screen product experience.

Navigation was designed around:

```text
Home
Achievements
Profile
```

## Home

Home remains:

```text
/dashboard
```

The Home navigation was verified to work correctly.

---

# 12. Achievements Page

## Route

```text
/achievements
```

## Implemented

The Achievements page provides:

- Achievement list
- Locked state
- Unlocked state
- Achievement title
- Achievement description
- Progress-oriented presentation

The page was tested successfully.

---

# 13. Profile Page

## Route

```text
/profile
```

## Implemented

The Profile page includes:

- Student name
- Track
- Profile hero
- About section
- Technical skills
- Projects
- GitHub
- LinkedIn
- Back to Dashboard

Example technical skills shown:

```text
HTML
CSS
JavaScript
React
Python
Git
GitHub
```

Example projects shown:

```text
AI Chatbot
ABTalks Elevate
```

---

# 14. Profile Blank-Screen Bug

## Problem

After initially adding the Profile page, the browser displayed a blank screen.

## Debugging

The Profile component structure and JSX were checked.

The issue was corrected.

## Result

The Profile page became visible and worked correctly.

---

# 15. Profile External-Link Bug

## Problem

The GitHub and LinkedIn links on the Profile page did not open.

## Fix

The social-link controls were changed to use actual URL values and external browser navigation.

The implementation uses:

```javascript
window.open(url, "_blank", "noopener,noreferrer")
```

The interface also handles missing URLs:

```text
No GitHub URL added
No LinkedIn URL added
```

## Result

Both GitHub and LinkedIn external links were tested successfully.

This completed Milestone 6.3.

---

# 16. Git Commit After Major Milestone

After Dashboard navigation, Achievements, and Profile were completed and verified, the project was committed.

Commit message:

```text
feat: complete dashboard navigation achievements and profile
```

Commit:

```text
d85a8d1
```

The commit was pushed successfully to:

```text
origin/main
```

The repository reported the push successfully.

Later Git verification showed:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

---

# 17. Milestone 6 — Dashboard State & Synchronization

Milestone 6 focused on making the dashboard respond to actual challenge state.

The main goals were:

- Synchronize Day 12 completion
- Synchronize progress
- Synchronize streak
- Synchronize Today's Task
- Synchronize achievements
- Synchronize the momentum message
- Make profile social links functional

---

# 18. Milestone 6.1

## Goal

Verify dashboard navigation and state flow.

## Result

```text
6.1 ✅ Working
```

Home navigation remained correctly connected to:

```text
/dashboard
```

---

# 19. Milestone 6.2

## Goal

Continue dashboard and achievement synchronization.

## Result

```text
6.2 ✅ Working
```

---

# 20. Milestone 6.3

## Goal

Make GitHub and LinkedIn external links work on Profile.

## Result

```text
6.3 ✅ Working
```

Both external links were verified.

---

# 21. Milestone 6.4

## Goal

Improve dashboard synchronization and achievement behavior.

## Implementation

Dashboard reads the Day 12 state:

```javascript
const day12Completed =
  localStorage.getItem("day12_completed") === "true"
```

It then calculates synchronized values.

```javascript
const completedDays = day12Completed
  ? Math.max(challenge.completedDays, 12)
  : challenge.completedDays

const currentDay = day12Completed
  ? Math.max(challenge.currentDay, 13)
  : challenge.currentDay

const currentStreak = day12Completed
  ? Math.max(challenge.currentStreak, 12)
  : challenge.currentStreak
```

Today's task is synchronized with:

```javascript
const synchronizedToday = {
  ...today,
  completed: day12Completed,
}
```

## Result

```text
6.4 ✅ Working
```

---

# 22. Achievement Synchronization

Achievements were changed from static mock states into progress-aware UI.

The logic uses rules such as:

```javascript
if (achievement.id === 1) {
  unlocked = completedDays >= 7
}

if (achievement.id === 2) {
  unlocked = currentStreak >= 10
}

if (achievement.id === 3) {
  unlocked = completedDays >= 15
}
```

This means achievement state depends on challenge progress.

The dashboard maps the data into:

```javascript
const synchronizedAchievements = achievements.map(...)
```

---

# 23. Momentum Synchronization

When Day 12 is complete, the dashboard displays:

```text
You're 12 days stronger than when you started.
```

and:

```text
You completed Day 12. Keep the momentum going and start your next build.
```

Before completion, it displays motivational copy encouraging the student to finish the day's build.

---

# 24. Milestone 6.5

## Goal

Perform final verification of the current implementation before documentation and submission work.

## Result

The application was verified as working.

Git status was also checked and showed:

```text
nothing to commit, working tree clean
```

The README was subsequently updated and pushed.

---

# 25. Thoughtful UX Improvement

The most important product idea added is **proof-of-work-driven progress**.

Instead of allowing a student to simply press "complete", the product encourages a meaningful workflow:

```text
Build
  ↓
Commit code to GitHub
  ↓
Share progress on LinkedIn
  ↓
Submit both proofs
  ↓
Complete challenge day
  ↓
Update streak
  ↓
Update dashboard
  ↓
Unlock achievements
```

This directly connects:

- Building
- Public proof
- Consistency
- Progress
- Recruiter visibility

This is aligned with the purpose of the ABTalks challenge.

---

# 26. Real-World Edge Cases Addressed

## Empty social profile

Profile handles missing links with:

```text
No GitHub URL added
No LinkedIn URL added
```

## Achievement states

Achievements can be represented as:

```text
Locked
Unlocked
```

based on challenge progress.

## Completed challenge day

The dashboard changes its progress and motivation state after Day 12 completion.

## Mobile usage

The design prioritizes a 390px mobile viewport.

---

# 27. Mobile-First Testing

The hackathon specifies that submissions may be opened at:

```text
390px width
```

The interface was therefore developed and checked with mobile usage as the primary experience.

Areas checked include:

- Card widths
- Typography
- Buttons
- Navigation
- Scroll behavior
- Spacing
- Responsive content
- Avoiding obvious horizontal overflow

---

# 28. Major Problems Solved During Development

### Problem 1 — Escaped JSX characters

Copied code contained unwanted escape characters such as:

```text
\<
\>
\_
\:
```

These were cleaned so the JSX contained normal React syntax.

### Problem 2 — Dashboard showed 11 instead of 12

The dashboard was not synchronized with Day 12 completion.

Fixed using LocalStorage.

### Problem 3 — Profile page was blank

The Profile JSX/component structure was corrected.

### Problem 4 — GitHub and LinkedIn did not open

External navigation was implemented using the saved URL values.

### Problem 5 — Achievement state was static

Achievement unlock logic was synchronized with progress.

---

# 29. README

A README was created for the repository and later pushed.

The README documents the project and its submission structure.

The required Route Map is:

```text
/
/dashboard
/day/12
```

Additional implemented routes include:

```text
/achievements
/profile
```

---

# 30. Current Feature Status

```text
Landing Page                  ✅
Student Dashboard             ✅
Challenge Day                 ✅
Day 12 completion             ✅
GitHub proof submission       ✅
LinkedIn proof submission     ✅
Dashboard synchronization     ✅
12-day streak state           ✅
Achievement synchronization   ✅
Achievements page             ✅
Profile page                  ✅
GitHub external link          ✅
LinkedIn external link        ✅
Home navigation               ✅
Bottom navigation             ✅
README                        ✅
Mobile-first design           ✅
390px testing                 ✅
Git verification              ✅
```

---

# 31. Current User Journey

```text
Landing Page
    ↓
Dashboard
    ↓
Today's Challenge
    ↓
Challenge Day 12
    ↓
Read task
    ↓
Build project
    ↓
Submit GitHub proof
    ↓
Submit LinkedIn proof
    ↓
Complete Day 12
    ↓
Return to Dashboard
    ↓
Progress updates
    ↓
Streak updates
    ↓
Achievements update
    ↓
Profile / Achievements
```

---

# 32. Required Route Map

The hackathon requires these three routes in this exact order:

```text
/
/dashboard
/day/12
```

These routes must remain functional for final submission.

Additional routes currently implemented:

```text
/achievements
/profile
```

---

# 33. Git Workflow Used

Meaningful milestones were committed separately.

Recommended workflow for remaining changes:

```bash
git status
git add .
git commit -m "feat: <meaningful milestone>"
git push origin main
```

Before starting another milestone:

```bash
git status
```

should be checked.

After pushing:

```text
Your branch should be up to date with origin/main.
```

and the working tree should be clean.

---

# 34. Repository

GitHub repository:

```text
https://github.com/utsavimohite-arch/abtalks-elevate
```

The repository contains the ABTalks Elevate project, README, and development documentation.

---

# 35. Final Submission Checklist

```text
[ ] Repository is public
[ ] README is pushed
[ ] prompt.md is pushed
[ ] Required Route Map is present
[ ] / works
[ ] /dashboard works
[ ] /day/12 works
[ ] /achievements works
[ ] /profile works
[ ] GitHub proof works
[ ] LinkedIn proof works
[ ] Day 12 completion works
[ ] Dashboard synchronization works
[ ] GitHub external link works
[ ] LinkedIn external link works
[ ] Achievement synchronization works
[ ] 390px Landing Page works
[ ] 390px Dashboard works
[ ] 390px Challenge Day works
[ ] No obvious horizontal overflow
[ ] Final changes are committed
[ ] Final changes are pushed
[ ] Live deployment URL is available
[ ] Route Map matches the required order
```

---

# 36. Development Principle

The project should remain focused on the hackathon brief.

Do not add unnecessary production features such as:

- Authentication
- Database
- Admin panel
- Recruiter dashboard
- Complex backend systems

unless specifically required.

The strongest final submission should prioritize:

```text
Clarity
+
Mobile-first UX
+
Consistency
+
Proof of Work
+
Visible Progress
+
Polished Visual Design
```

---

# 37. Final Product Concept

The ABTalks Elevate experience is designed around:

```text
Discover
   ↓
Commit
   ↓
Build
   ↓
Show proof
   ↓
Track progress
   ↓
Earn achievements
   ↓
Build a visible record
```

The product turns a 60-day coding challenge into a visible, motivating daily habit.

---

# 38. Final Development State

At the end of the documented development history:

- Core hackathon screens are implemented.
- Day 12 proof submission works.
- Dashboard synchronization works.
- Achievements work.
- Profile works.
- GitHub and LinkedIn external links work.
- README has been pushed.
- Git working tree was verified clean.
- The project is ready for final deployment and submission audit.

The next stage should focus on:

1. Final deployment verification
2. Final route verification
3. Final 390px visual audit
4. README verification
5. `prompt.md` verification
6. Git status verification
7. Final commit/push if any submission changes remain
8. Submit repository and live deployment URL
