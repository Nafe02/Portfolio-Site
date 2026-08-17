import Image from "next/image";

type ArtifactCardProps = {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
};

export default function ArtifactCard({
  image,
  alt,
  category,
  title,
  description,
}: ArtifactCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border">
      <Image
  src={image}
  alt={alt}
  width={1200}
  height={800}
  className="w-full"
/>

      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {description}
        </p>
      </div>
    </article>
  );
}