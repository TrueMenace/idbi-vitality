import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/dashboard/KPICard";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Here's your MSME portfolio overview.
        </p>

      </div>

      <div className="grid grid-cols-4 gap-6">

        <KPICard
          title="Total MSMEs"
          value="12,456"
          subtitle="+12% this month"
        />

        <KPICard
          title="Average Health Score"
          value="86%"
          subtitle="Excellent Portfolio"
        />

        <KPICard
          title="Loans Approved"
          value="348"
          subtitle="+18 today"
        />

        <KPICard
          title="High Risk Cases"
          value="27"
          subtitle="-8 this week"
        />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;