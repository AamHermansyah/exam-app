import { RegisterForm } from "../_components/register-form"
import Image from "next/image"

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <Image
            src="/images/adls-logo.png"
            alt="logo"
            width={50}
            height={50}
            priority
          />
          Asesmen Digital Literasi Sains
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
