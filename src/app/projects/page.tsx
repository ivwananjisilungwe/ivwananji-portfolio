import { FeaturedWork } from "@/components/home/featured-work";

export default function ProjectsPage() {
  return (
    <section className="site-container flex flex-col py-8 sm:py-12">
      <p className="mb-5 font-mono text-sm text-accent">Selected work</p>
      <h1 className="max-w-3xl animate-fade-up text-4xl font-semibold tracking-tight text-foreground sm:text-6xl sm:tracking-tighter">
        Portfolio
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        A selection of software engineering projects, with scope and progress
        described from the available project information.
      </p>
      <div className="mt-10">
        <FeaturedWork />
      </div>
    </section>
  );
}
