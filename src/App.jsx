import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import DashboardPage from "./pages/DashboardPage"
import ChallengeDayPage from "./pages/ChallengeDayPage"
import AchievementsPage from "./pages/AchievementsPage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Challenge Day 12 */}
        <Route path="/day/12" element={<ChallengeDayPage />} />

        {/* Achievements */}
        <Route
          path="/achievements"
          element={<AchievementsPage />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<ProfilePage />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App