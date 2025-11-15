import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  const wa = PROFILE.phone.replace(/[^0-9]/g, "");
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Kontak</h2>
      <Card>
        <CardContent className="py-6">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${PROFILE.email}`}><Button>Email</Button></a>
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white">WhatsApp</Button>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Button variant="outline">GitHub</Button></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Button variant="outline">LinkedIn</Button></a>
            <a href={PROFILE.website} target="_blank" rel="noreferrer"><Button variant="ghost">Website</Button></a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}