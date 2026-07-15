type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}