import { ArrowRight, ShieldCheck } from "lucide-react";
import DashboardPreview from "../dashboard/DashboardPreview";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between px-6">

      {/* Left Side */}
      <div className="max-w-2xl">

        <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          <ShieldCheck className="mr-2 h-4 w-4" />
          RBI Inspired • Explainable AI • Financial Inclusion
        </div>

        <h1 className="mb-6 text-6xl font-extrabold leading-tight text-slate-900">
          AI-Powered
          <br />
          MSME Financial
          <br />
          Health Card
        </h1>

        <p className="mb-8 text-xl leading-8 text-slate-600">
          Empower banks with explainable AI to evaluate MSMEs
          using alternate financial data like GST, UPI, EPFO and
          Account Aggregator.
        </p>

        <div className="flex gap-4">

          <button
            onClick={() => navigate("/analyze")}
            className="flex items-center rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Analyze MSME
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl border border-slate-300 px-6 py-4 font-semibold transition hover:bg-slate-100"
          >
            View Demo
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="hidden lg:flex">
        <DashboardPreview />
      </div>

    </section>
  );
}

export default Hero;