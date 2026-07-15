type Metric = {
  value: string;
  label: string;
};

type MetricsGridProps = {
  metrics: Metric[];
};

export default function MetricsGrid({
  metrics,
}: MetricsGridProps) {
  return (
    <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
      {metrics.map((item) => (
        <div
          key={item.label}
          className="border rounded-lg p-8 text-center"
        >
          <p className="text-4xl font-bold">
            {item.value}
          </p>

          <p className="mt-3 text-sm uppercase tracking-wide text-muted">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}