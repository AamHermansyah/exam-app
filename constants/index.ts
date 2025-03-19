import { History, House, NotebookText, Pencil, Users } from "lucide-react"

export const navigations = {
  guru: [
    {
      title: "Overview",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "Kelola Ujian",
      url: "/kelola-ujian",
      icon: NotebookText,
      isActive: true,
    },
    {
      title: "Siswa",
      url: "/siswa",
      icon: Users,
      isActive: true,
    },
  ],
  siswa: [
    {
      title: "Daftar Ujian",
      url: "/daftar-ujian",
      icon: Pencil,
      isActive: true,
    },
    {
      title: "Riwayat",
      url: "/riwayat",
      icon: History,
      isActive: true,
    },
  ],
};