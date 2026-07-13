import DashboardLayout from "../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

function Analyze() {

  const navigate = useNavigate();

  return (
    <DashboardLayout>

      <div className="max-w-4xl">

        <h1 className="text-4xl font-bold text-slate-900">
          Analyze New MSME
        </h1>

        <p className="mt-2 text-slate-600">
          Enter business information to generate an AI-powered Financial Health Card.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-semibold">
            Business Information
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="mb-2 block font-medium">
                Business Name
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="ABC Industries Pvt Ltd"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                GSTIN
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="29ABCDE1234F1Z5"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Industry
              </label>

              <select className="w-full rounded-xl border border-slate-300 p-3">

                <option>Manufacturing</option>

                <option>Retail</option>

                <option>Food Processing</option>

                <option>Textiles</option>

              </select>

            </div>

            <div>
              <label className="mb-2 block font-medium">
                Years in Business
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="8"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Annual Revenue (₹)
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="2.4 Crore"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Monthly UPI Volume
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="₹28 Lakhs"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Employees
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="42"
              />
            </div>

          </div>

          <div className="mt-8 flex items-center gap-3">

            <input
              type="checkbox"
              defaultChecked
            />

            <span>
              I authorize Account Aggregator consent-based financial analysis.
            </span>

          </div>

          <button
            onClick={() => navigate("/processing")}
            className="mt-10 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Analyze Financial Health
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Analyze;