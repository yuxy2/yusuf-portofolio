import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image fill alt={project.title} src={project.cover} className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between gap-3">
          <span>{project.title}</span>
          <Badge variant="outline">{project.year}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        {project.impact?.length ? (
          <ul className="text-sm list-disc list-inside text-muted-foreground">
            {project.impact.map((it: string) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            <Button size="sm">Demo</Button>
          </a>
          <a href={project.links.repo} target="_blank" rel="noreferrer">
            <Button size="sm" variant="outline">Code</Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}