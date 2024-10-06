import { Separator } from "@/components/ornament/separator";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function HomePage() {
  return (
    <main className="bg-primary-600 min-h-screen px-6">
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-3">
        <h1 className="font-zelda text-center text-5xl leading-tight tracking-wider text-primary-foreground">
          EXPLORING MABIM IN{" "}
          <SparklesText
            text="WONDERLAND"
            className="text-5xl font-normal leading-tight tracking-wider text-primary-foreground"
          />
        </h1>
        <Separator className="w-full" pathClassName="fill-primary-foreground" />

        <p className="font-bonobo text-center text-primary-foreground">
          {`"Membangun Kepemimpinan Diri di Era Revolusi Industri: Transformasi Diri untuk Masa Depan Digital"`}
        </p>
        {/* TODO: Ini nanti pindah footer aja tujuannya */}
        {/* <p className="font-bonobo text-center text-primary-foreground">
          Tujuan dari Mabim RPL 2024 adalah untuk membantu mahasiswa baru dalam
          mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah
          dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus
          Cibiru.
        </p> */}
      </div>
    </main>
  );
}
