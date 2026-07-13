function DashboardPreview() {
  return (
    <div className="w-[450px] rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Financial Health Score
        </h2>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          86 / 100
        </span>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-[86%] rounded-full bg-green-500"></div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-4">

        <div className="flex justify-between py-2">
          <span>GST Compliance</span>
          <span className="font-semibold">95%</span>
        </div>

        <div className="flex justify-between py-2">
          <span>UPI Activity</span>
          <span className="font-semibold text-green-600">
            Strong
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span>EPFO Stability</span>
          <span className="font-semibold">
            Good
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span>Risk Level</span>
          <span className="font-semibold text-green-600">
            Low
          </span>
        </div>

      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800">
        Loan Recommended
      </button>

    </div>
  );
}

export default DashboardPreview;