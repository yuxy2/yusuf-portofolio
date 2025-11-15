import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Keahlian</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((s) => (
          <Card key={s.group}>
            <CardHeader>
              <CardTitle className="text-base">{s.group}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <Badge key={it} variant="secondary">{it}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}