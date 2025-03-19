import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function ProfilDetail() {
  return (
    <div className="px-4 py-6 border rounded-md">
      <form action="" className="space-y-4">
        <h3 className="font-semibold leading-none">
          Profile Information
        </h3>
        <div className="grid w-full items-center gap-y-2">
          <Label htmlFor="name" className="font-semibold">Nama Lengkap</Label>
          <Input
            type="text"
            id="name"
            placeholder="Masukan nama lengkap"
            defaultValue="Jhon Doe"
            readOnly
          />
        </div>
        <div className="grid w-full items-center gap-y-2">
          <Label htmlFor="email" className="font-semibold">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Masukan email"
            defaultValue="m@student.com"
            readOnly
          />
        </div>
        <div className="grid w-full items-center gap-y-2">
          <Label htmlFor="email" className="font-semibold">Role</Label>
          <Select disabled defaultValue="siswa">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Role anda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="siswa">Siswa</SelectItem>
              <SelectItem value="guru">Guru</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  )
}

export default ProfilDetail