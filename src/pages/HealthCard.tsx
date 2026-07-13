import DashboardLayout from "../components/layout/DashboardLayout";
import {
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

function HealthCard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              MSME Financial Health Card
            </h1>

            <p className="mt-2 text-slate-600">
              AI Powered Credit Assessment using GST, UPI,
              EPFO & Account Aggregator Data
            </p>

          </div>

          <div className="rounded-full bg-green-100 px-6 py-3 font-bold text-green-700">
            Loan Recommended
          </div>

        </div>

        {/* Company */}

        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-3xl font-bold">
                ABC Industries Pvt Ltd
              </h2>

              <p className="mt-2 text-slate-500">
                Manufacturing • Bangalore • 42 Employees
              </p>

            </div>

            <div className="text-right">

              <p className="text-slate-500">
                AI Confidence
              </p>

              <h2 className="text-5xl font-bold text-blue-700">
                96%
              </h2>

            </div>

          </div>

        </div>

        {/* Score Cards */}

        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-3xl bg-white border border-slate-200 p-8">

            <p className="text-slate-500">
              Financial Health Score
            </p>

            <h2 className="mt-4 text-7xl font-extrabold text-blue-700">
              86
            </h2>

            <div className="mt-5 h-3 rounded-full bg-slate-200">

              <div className="h-full w-[86%] rounded-full bg-green-500"></div>

            </div>

            <p className="mt-4 font-semibold text-green-600">
              Excellent Credit Profile
            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8">

            <BadgeCheck
              size={42}
              className="text-green-600"
            />

            <h3 className="mt-4 text-2xl font-bold">
              Loan Status
            </h3>

            <p className="mt-3 text-3xl font-bold text-green-600">
              APPROVED
            </p>

            <p className="mt-3 text-slate-500">
              Eligible for instant digital lending.
            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8">

            <TrendingUp
              size={42}
              className="text-blue-700"
            />

            <h3 className="mt-4 text-2xl font-bold">
              Suggested Loan
            </h3>

            <p className="mt-3 text-4xl font-bold">
              ₹18 Lakhs
            </p>

            <p className="mt-3 text-slate-500">
              Estimated Interest: 8.9%
            </p>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default HealthCard;