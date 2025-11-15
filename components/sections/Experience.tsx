import { EXPERIENCE } from "@/lib/data";
import { ExperienceTimeline } from "@/components/experience-timeline";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pengalaman Kerja</h2>
        <p className="text-muted-foreground">Ringkasan peran dan dampak yang pernah saya berikan.</p>
      </div>
      <ExperienceTimeline items={EXPERIENCE} />
    </section>
  );
}