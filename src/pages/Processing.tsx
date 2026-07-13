import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

function Processing() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/health-card");

    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <DashboardLayout>

      <div className="flex min-h-[70vh] flex-col items-center justify-center">

        <div className="mb-8 h-20 w-20 animate-spin rounded-full border-8 border-slate-200 border-t-blue-700"></div>

        <h1 className="text-4xl font-bold">
          AI Analysis In Progress
        </h1>

        <p className="mt-3 text-slate-600">
          Fetching Alternate Data Sources...
        </p>

      </div>

    </DashboardLayout>

  );

}

export default Processing;