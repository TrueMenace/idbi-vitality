interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
}

function KPICard({
  title,
  value,
  subtitle,
}: KPICardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-sm text-green-600">
        {subtitle}
      </p>

    </div>
  );
}

export default KPICard;