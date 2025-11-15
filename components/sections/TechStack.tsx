import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";

export default function TechStack() {
  const techs = Array.from(new Set(PROJECTS.flatMap((p) => p.tech))).slice(0, 12);
  return (
    <section>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>Tech Stack Unggulan</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {techs.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}