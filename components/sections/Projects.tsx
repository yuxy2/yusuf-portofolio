import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Projects Unggulan</h2>
        <p className="text-muted-foreground">Beberapa pekerjaan dan riset paling relevan untuk role developer.</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}