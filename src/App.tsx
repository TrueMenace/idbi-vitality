import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Analyze from "./pages/Analyze";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Processing from "./pages/Processing";
import HealthCard from "./pages/HealthCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/health-card" element={<HealthCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;