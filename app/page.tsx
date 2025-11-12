import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { CertificatesGallery } from "@/components/certificates-gallery";
import { PROFILE, PROJECTS, EXPERIENCE, SKILLS, CERTS } from "@/lib/data";

export default function Page() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="grid items-center gap-10 md:grid-cols-[1.2fr,1fr]">
        {/* Text */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary">{PROFILE.location}</Badge>
            <Badge>Open to Work</Badge>
            <Badge variant="outline">Remote / Hybrid</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.15]">
            Hi, saya <span className="text-primary">{PROFILE.name}</span>
            <span className="block text-xl md:text-2xl font-semibold mt-2 text-muted-foreground">
              {PROFILE.role}
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {PROFILE.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#projects">
              <Button> Lihat Project </Button>
            </a>
            <a href="#contact">
              <Button variant="outline"> Hubungi Saya </Button>
            </a>
            <a href="/CV_Yusuf_Mustofa.pdf" download>
              <Button variant="ghost"> Download CV </Button>
            </a>
            <a href="/CV_Yusuf_Mustofa.pdf" target="_blank" rel="noreferrer">
              <Button variant="ghost"> Lihat CV </Button>
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="relative mx-auto md:mx-0">
          {/* glow gradient */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-primary/30 via-fuchsia-400/20 to-cyan-400/20 blur-2xl opacity-40" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
            <Image
              src="/yusuf.jpg" // simpan di public/yusuf.jpg
              alt="Foto Yusuf Mustofa"
              fill
              sizes="(min-width: 768px) 18rem, 14rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tech Stack ringkas */}
      <section>
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Tech Stack Unggulan</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {Array.from(new Set(PROJECTS.flatMap((p) => p.tech)))
              .slice(0, 12)
              .map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
          </CardContent>
        </Card>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Projects Unggulan
          </h2>
          <p className="text-muted-foreground">
            Beberapa pekerjaan dan riset paling relevan untuk role developer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Pengalaman Kerja
          </h2>
          <p className="text-muted-foreground">
            Ringkasan peran dan dampak yang pernah saya berikan.
          </p>
        </div>
        <ExperienceTimeline items={EXPERIENCE} />
      </section>

      {/* SKILLS */}
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
                  <Badge key={it} variant="secondary">
                    {it}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Sertifikat</h2>
          <p className="text-muted-foreground">
            Semua sertifikat saya — bisa dicari, difilter tahun, dan diunduh.
          </p>
        </div>
        <CertificatesGallery items={CERTS} />
      </section>

     {/* CONTACT */}
<section id="contact" className="space-y-4">
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Kontak</h2>
  <Card>
    <CardContent className="py-6">
      <div className="flex flex-wrap items-center gap-3">
        {/* Email */}
        <a href={`mailto:${PROFILE.email}`}>
          <Button>Email</Button>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${PROFILE.phone.replace(/[^0-9]/g, "")}`} 
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="default"
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
          >
            {/* Pakai ikon kalau mau (lucide-react) */}
            {/* <MessageCircle size={18} /> */}
            WhatsApp
          </Button>
        </a>

        {/* GitHub */}
        <a href={PROFILE.github} target="_blank" rel="noreferrer">
          <Button variant="outline">GitHub</Button>
        </a>

        {/* LinkedIn */}
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          <Button variant="outline">LinkedIn</Button>
        </a>

        {/* Website */}
        <a href={PROFILE.website} target="_blank" rel="noreferrer">
          <Button variant="ghost">Website</Button>
        </a>
      </div>
    </CardContent>
  </Card>
</section>

    </div>
  );
}
