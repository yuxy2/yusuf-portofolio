import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline({ items }: { items: any[] }) {
  return (
    <div className="relative pl-5">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-6">
        {items.map((e) => (
          <div key={e.company} className="relative">
            <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-primary" />
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center justify-between gap-3">
                  <span>{e.role} • {e.company}</span>
                  <Badge variant="outline">{e.period}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{e.location}</p>
                {e.highlights?.length ? (
                  <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
                    {e.highlights.map((h: string) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}