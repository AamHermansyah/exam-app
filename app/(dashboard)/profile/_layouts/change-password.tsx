import InputPassword from "@/components/core/input-password"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

function ChangePassword() {
  return (
    <div className="px-4 py-6 border rounded-md">
      <form action="" className="space-y-4">
        <div className="space-y-1">
          <h3 className="font-semibold leading-none">
            Keamanan
          </h3>
          <p className="text-sm text-neutral-600">
            Terakhir diubah: 11:04 AM, Rabu 12 Feb 2025
          </p>
        </div>
        <div className="grid w-full items-center gap-y-2">
          <Label htmlFor="new-password" className="font-semibold">Password Saat Ini</Label>
          <InputPassword
            type="password"
            id="password"
            placeholder="Masukan password"
          />
        </div>
        <div className="grid w-full items-center gap-y-2">
          <Label htmlFor="new-password" className="font-semibold">Password Baru</Label>
          <InputPassword
            type="password"
            id="new-password"
            placeholder="Masukan password baru"
          />
        </div>
        <div className="grid w-full items-center gap-y-2">
          <Label htmlFor="confirm-password" className="font-semibold">Konfirmasi Password</Label>
          <InputPassword
            type="password"
            id="confirm-password"
            placeholder="Masukan konfirmasi password"
          />
        </div>
        <Button>Ubah Password</Button>
      </form>
    </div>
  )
}

export default ChangePassword