import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-tight py-24 text-center">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That page doesn&apos;t exist (or moved). Try the home page.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
