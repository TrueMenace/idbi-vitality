import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold text-blue-700"
        >
          IDBI Vitality
        </div>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">

          <button
            onClick={() => navigate("/")}
            className="text-slate-600 transition hover:text-blue-700"
          >
            Home
          </button>

          <button
            className="text-slate-600 transition hover:text-blue-700"
          >
            Features
          </button>

          <button
            className="text-slate-600 transition hover:text-blue-700"
          >
            About
          </button>

        </div>

        {/* Right Buttons */}
        <div className="flex gap-3">

          <button
            onClick={() => navigate("/login")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Dashboard
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;