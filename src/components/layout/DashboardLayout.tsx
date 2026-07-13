import type { ReactNode } from "react";
import {
  LayoutDashboard,
  FileSearch,
  FileText,
  Settings,
  Building2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-72 border-r border-slate-200 bg-white p-6">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="mb-10 flex cursor-pointer items-center gap-3"
        >
          <Building2 className="text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">
            IDBI Vitality
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/analyze"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
          >
            <FileSearch size={20} />
            Analyze MSME
          </Link>

          <Link
            to="/report"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
          >
            <FileText size={20} />
            Reports
          </Link>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
          >
            <Settings size={20} />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}

export default DashboardLayout;