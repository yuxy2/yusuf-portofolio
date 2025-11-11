export const PROFILE = {
  name: "Yusuf Mustofa",
  role: "Full‑Stack Developer",
  tagline:
    "Membangun aplikasi web end‑to‑end: React/Next.js, Node.js, Prisma, MongoDB, LiveKit, dan GCP.",
  location: "Yogyakarta, Indonesia",
  email: "yusaufcok@gmail.com",
  phone: "+62 813-5818-7878",
  github: "https://github.com/yuxy2",
  linkedin: "https://www.linkedin.com/in/username/",
  website: "https://yourdomain.dev",
};

export const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "daisyUI"] },
  { group: "Backend", items: ["Node.js", "Express", "Prisma", "MongoDB", "REST/GraphQL"] },
  { group: "DevOps", items: ["Docker", "WSL2", "Vercel", "Render", "GCP"] },
  { group: "Realtime/Media", items: ["LiveKit", "WebRTC", "Socket.IO"] },
];

export const PROJECTS = [
  {
    title: "Greenfy – Layanan Jemput Sampah",
    year: "2025",
    description:
      "Aplikasi mobile + backend untuk penjadwalan pickup sampah rumah tangga dengan dashboard admin.",
    impact: ["1.5k+ order simulasi", "Arsitektur REST modular, JWT auth"],
    tech: ["React Native", "Express", "MongoDB", "Prisma", "Docker"],
    links: { demo: "https://greenfy.example.com", repo: "https://github.com/username/greenfy" },
    cover: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Nonton‑NextGen – Live Streaming",
    year: "2024",
    description:
      "Platform streaming multi‑view dengan LiveKit: grid viewer, chat realtime, dan upload VOD.",
    impact: ["Join stream < 2 dtk", "Upload VOD ke MinIO"],
    tech: ["Next.js", "LiveKit", "MinIO", "Prisma", "Tailwind"],
    links: { demo: "https://nonton.example.com", repo: "https://github.com/username/nonton-nextgen" },
    cover: "https://images.unsplash.com/photo-1641077818099-05d12fc74201?auto=format&fit=crop&q=80&w=1400&h=900"
,
  },
  {
    title: "SETerON – Sentimen Tren Berita",
    year: "2024",
    description:
      "Sistem analisis sentimen otomatis untuk monitoring tren berita online (skripsi/proyek riset).",
    impact: ["Akurasi 86% (dataset uji)", "Dashboard metrik & chart"],
    tech: ["Python", "FastAPI", "React", "MongoDB"],
    links: { demo: "https://seteron.example.com", repo: "https://github.com/username/seteron" },
    cover: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop",
  },
];

export const EXPERIENCE = [
  {
    company: "Mebel Mbah Kayun",
    role: "Software/IT Support (Freelance)",
    period: "Nov 2024 – Nov 2025",
    location: "Rembang (Hybrid)",
    highlights: [
      "Bangun sistem stok & produksi (pintu, jendela, kusen)",
      "Integrasi laporan & kontrol bahan (contoh: glue 10L di awal)",
    ],
  },
  {
    company: "Cymbal (Google Cloud Project)",
    role: "Network Technician (Design)",
    period: "Sep 2024 – Dec 2024",
    location: "Remote",
    highlights: ["Desain VPC, GKE, Interconnect", "Dokumentasi topologi & capacity planning"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: number;
  file: string;     // path ke pdf/jpg/png di public
  thumb?: string;   // optional thumbnail
  tags?: string[];  // optional
};

// Ganti isi CERTS:
export const CERTS: Certificate[] = [
  {
    title: "Introduction to Relational Databases (RDBMS)",
    issuer: " coursera",
    year: 2025,
    file: "/certificates/Coursera GKIL82DDXLA6.pdf",
    thumb: "/certificates/thumbs/Coursera GKIL82DDXLA6_page-0001.jpg",
    tags: ["IBM"],
  },
  {
    title: "SQL: A Practical Introduction for Querying Databases",
    issuer: "coursera",
    year: 2025,
    file: "/certificates/Coursera LZXSNS6QWNRK.pdf",
    thumb: "/certificates/thumbs/Coursera LZXSNS6QWNRK_page-0001.jpg",
    tags: ["IBM"],
  },
  {
    title: "Introduction to Agile Development and Scrum",
    issuer: " ",
    year: 2025,
    file: "/certificates/Coursera PLAJ9U1LK8AW.pdf",
    thumb: "/certificates/thumbs/Coursera PLAJ9U1LK8AW_page-0001.jpg",
    tags: ["backend", "node"],
  },
  {
    title: "APPLIED MICROSOFT OFFICE ",
    issuer: "TRUST TRAINING PARTNERS",
    year: 2024,
    file: "/certificates/Microsoft.pdf",
    thumb: "/certificates/thumbs/Microsoft_page-0001.jpg",
    tags: ["TRUST"],
  },
  {
    title: "Security for Software Development Managers LFD125",
    issuer: "THE LINUX FUNDATION",
    year: 2024,
    file: "/certificates/yusuf-mustofa-a8801788-5ba5-40b9-a934-ddc766012019-certificate.pdf",
    thumb: "/certificates/thumbs/yusuf-mustofa-a8801788-5ba5-40b9-a934-ddc766012019-certificate_page-0001.jpg",
    tags: ["cloud"],
  },
  {
    title: "Introduction to Data Science with R",
    issuer: "DQLABBGINREPTQON",
    year: 2024,
    file: "/certificates/certificate-DQLABBGINREPTQON.pdf",
    thumb: "/certificates/thumbs/certificate-DQLABBGINREPTQON_page-0001.jpg",
    tags: ["cloud"],
  },
];