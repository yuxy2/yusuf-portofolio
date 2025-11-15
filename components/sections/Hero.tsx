"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from "@/lib/data";

export default function Hero() {
  return (
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
          <a href="#projects"><Button> Lihat Project </Button></a>
          <a href="#contact"><Button variant="outline"> Hubungi Saya </Button></a>
          <a href="/CV_Yusuf_Mustofa.pdf" download><Button variant="ghost"> Download CV </Button></a>
          <a href="/CV_Yusuf_Mustofa.pdf" target="_blank" rel="noreferrer"><Button variant="ghost"> Lihat CV </Button></a>
        </div>
      </div>

      {/* Foto */}
      <div className="relative mx-auto md:mx-0">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-primary/30 via-fuchsia-400/20 to-cyan-400/20 blur-2xl opacity-40" />
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
          <Image
            src="/yusuf.jpg"
            alt="Foto Yusuf Mustofa"
            fill
            sizes="(min-width: 768px) 18rem, 14rem"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}