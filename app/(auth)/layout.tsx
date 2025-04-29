import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Image from "next/image"

async function LayoutAuth({ children }: { children: ReactNode }) {
  const token = (await cookies()).get('token');

  if (token?.value) redirect('/');

  return (
    <div className="bg-muted">
      <div className="min-h-svh w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-10 p-6 md:p-10">
        <div className="flex-1 space-y-4">
          <div className="hidden md:flex items-center gap-2 justify-center font-medium">
            <Image
              src="/images/adls-logo.png"
              alt="logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="text-2xl font-semibold">Asesmen Digital Literasi Sains</h1>
          </div>
          <p className="md:text-lg text-justify">
            <span className="text-lg md:text-xl font-semibold">&quot;Asesmen Digital Literasi Sains&quot;</span> adalah platform tes online yang dirancang khusus untuk mengukur kompetensi literasi sains peserta secara komprehensif. Website ini menyajikan soal-soal berbasis konteks kehidupan nyata yang terintegrasi  materi substansi dalam pembelajaran IPA maupun Biologi. Literasi sains mencakup tiga kompetensi yakni <i>menjelaskan fenomena ilmiah, mengevaluasi dan merancang penyelidikan ilmiah serta menafsirkan data dan bukti secara ilmiah. Dimensi pengetahuan melalui tiga lingkup yakni konten,procedural dan konteks</i>. Fitur unggulan mencakup analisis otomatis yang memetakan komptensi literasi sains, efisien dan fleksibel digunakan oleh peserta dan pendidik. Asesmen ini dapat digunakan untuk mandiri, ujian sekolah, maupun pemetaan kompetensi nasional.
          </p>
          <h4 className="text-right">
            <b>Dukungan dari</b>
            <br />
            <i>Prof. Ani Rusilowati, M.Pd. & Dr. Wahyu Lestari, M.Pd.</i>
          </h4>
        </div>
        <div className="flex w-full md:w-auto flex-1 max-w-md flex-col gap-6">
          <div className="flex md:hidden items-center gap-2 self-center font-medium">
            <Image
              src="/images/adls-logo.png"
              alt="logo"
              width={75}
              height={75}
              priority
              className="w-[50px] sm:w-[75px]"
            />
            <h1 className="text-xl md:text-2xl font-semibold">Asesmen Digital Literasi Sains</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutAuth;
