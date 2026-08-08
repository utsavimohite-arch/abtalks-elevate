import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import DashboardPage from "./pages/DashboardPage"
import ChallengeDayPage from "./pages/ChallengeDayPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Challenge Day 12 */}
        <Route path="/day/12" element={<ChallengeDayPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App