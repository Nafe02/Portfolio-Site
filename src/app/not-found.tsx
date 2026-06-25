import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-start justify-center px-6 py-24 md:px-10 lg:px-12">
      <p className="text-sm font-medium uppercase tracking-wider text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you,re looking for doesn,t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-ink"
      >
        Back to home
      </Link>
    </div>
  );
}
