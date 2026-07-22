type SprintPhase = {
  day: string;
  title: string;
  activities: string[];
};

type SprintFrameworkProps = {
  phases: SprintPhase[];
};

export default function SprintFramework({
  phases,
}: SprintFrameworkProps) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {phases.map((phase) => (
        <div
          key={phase.day}
          className="rounded-lg border border-border p-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            {phase.day}
          </p>

          <h3 className="mt-3 text-xl font-bold">
            {phase.title}
          </h3>

          <ul className="mt-6 space-y-3">
            {phase.activities.map((activity) => (
              <li
                key={activity}
                className="text-muted"
              >
                • {activity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}