import { CERTS } from "@/lib/data";
import { CertificatesGallery } from "@/components/certificates-gallery";

export default function Certificates() {
  return (
    <section id="certificates" className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Sertifikat</h2>
        <p className="text-muted-foreground">Semua sertifikat saya — bisa dicari, difilter tahun, dan diunduh.</p>
      </div>
      <CertificatesGallery items={CERTS} />
    </section>
  );
}