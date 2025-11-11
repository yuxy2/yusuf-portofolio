"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur", scrolled && "shadow-sm")}> 
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight">Yusuf Mustofa</a>
        <nav className="hidden md:flex items-center gap-1">
          <a href="#projects"><Button variant="ghost" size="sm">Projects</Button></a>
          <a href="#experience"><Button variant="ghost" size="sm">Experience</Button></a>
          <a href="#skills"><Button variant="ghost" size="sm">Skills</Button></a>
          <a href="#contact"><Button size="sm">Contact</Button></a>
        </nav>
      </div>
    </header>
  );
}