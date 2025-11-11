"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Certificate } from "@/lib/data";

export function CertificatesGallery({ items }: { items: Certificate[] }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<string>("All");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Certificate | null>(null);

  const years = useMemo(() => {
    const ys = Array.from(new Set(items.map(i => i.year))).sort((a,b)=>b-a);
    return ["All", ...ys.map(String)];
  }, [items]);

  const filtered = items.filter(c => {
    const y = year === "All" || String(c.year) === year;
    const q = query.toLowerCase();
    const m = !q || c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q) || c.tags?.some(t => t.toLowerCase().includes(q));
    return y && m;
  });

  const onOpen = (c: Certificate) => { setActive(c); setOpen(true); };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3">
        <Input placeholder="Cari sertifikat (judul/penerbit/tag)…" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-full md:w-44"><SelectValue placeholder="Tahun" /></SelectTrigger>
          <SelectContent>
            {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => (
          <Card key={c.file} className="overflow-hidden">
            <div className="relative aspect-[3/2] bg-muted">
              {c.thumb
                ? <Image fill src={c.thumb} alt={c.title} className="object-cover" />
                : <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">No thumbnail</div>}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between gap-3">
                <span className="line-clamp-1">{c.title}</span>
                <Badge variant="outline">{c.year}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-1">{c.issuer}</p>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => onOpen(c)}>Lihat</Button>
                <a href={c.file} download><Button size="sm" variant="outline">Unduh</Button></a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader><DialogTitle>{active?.title}</DialogTitle></DialogHeader>
          {active && (active.file.endsWith(".pdf")
            ? <iframe src={active.file} className="w-full h-[70vh] rounded-md" />
            : <div className="relative w-full h-[70vh]"><Image fill alt={active.title || "certificate"} src={active.file} className="object-contain" /></div>
          )}
          <div className="flex gap-2">
            <a href={active?.file || "#"} target="_blank" rel="noreferrer"><Button variant="outline">Buka Tab</Button></a>
            <a href={active?.file || "#"} download><Button>Unduh</Button></a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
