export const metadata = {
  title: "Yusuf Mustofa – Portfolio",
  description:
    "Portfolio pengembang: React/Next.js, Node.js, Prisma, MongoDB, LiveKit, GCP.",
  icons: {
    icon: "/favicon.png",       // atau "/favicon.png"
    shortcut: "/favicon.png",   // optional
    apple: "/favicon.png",      // optional untuk iOS
  },  
};

import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteHeader />
        <Separator className="sticky top-0" />
        <main className="container mx-auto px-4 md:px-6 py-10">{children}</main>
        <footer className="border-t">
          <div className="container mx-auto px-4 md:px-6 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Yusuf Mustofa. All rights reserved.</p>
            <p>Built with Next.js • Tailwind • shadcn/ui</p>
          </div>
        </footer>
      </body>
    </html>
  );
}