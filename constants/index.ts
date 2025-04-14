import { History, House, NotebookText, Pencil, Users } from "lucide-react"
import {
  FaCalculator, FaAtom, FaFlask, FaLeaf, FaCode, FaBookOpen, FaGlobeAmericas,
  FaGavel, FaHistory, FaMapMarkedAlt, FaMoneyBillWave, FaUsers, FaPaintBrush,
  FaHeartbeat, FaPrayingHands, FaQuestion
} from 'react-icons/fa';

export const dotEnvs = {
  jwtSecret: process.env.JWT_SECRET as string
}

export const categories = [
  { value: "matematika", label: "Matematika", icon: FaCalculator },
  { value: "fisika", label: "Fisika", icon: FaAtom },
  { value: "kimia", label: "Kimia", icon: FaFlask },
  { value: "biologi", label: "Biologi", icon: FaLeaf },
  { value: "informatika", label: "Informatika", icon: FaCode },
  { value: "bahasa-indonesia", label: "Bahasa Indonesia", icon: FaBookOpen },
  { value: "bahasa-inggris", label: "Bahasa Inggris", icon: FaGlobeAmericas },
  { value: "ppkn", label: "PPKn", icon: FaGavel },
  { value: "sejarah", label: "Sejarah", icon: FaHistory },
  { value: "geografi", label: "Geografi", icon: FaMapMarkedAlt },
  { value: "ekonomi", label: "Ekonomi", icon: FaMoneyBillWave },
  { value: "sosiologi", label: "Sosiologi", icon: FaUsers },
  { value: "seni-budaya", label: "Seni Budaya", icon: FaPaintBrush },
  { value: "penjas/kesehatan", label: "Penjas/Kesehatan", icon: FaHeartbeat },
  { value: "pendidikan-agama", label: "Pendidikan Agama", icon: FaPrayingHands },
  { value: "lainnya", label: "Lainnya", icon: FaQuestion },
];

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

export const rules = [
  "Pastikan koneksi internet stabil selama ujian berlangsung.",
  "Tidak diperkenankan membuka tab atau aplikasi lain.",
  "Setiap soal wajib dijawab sebelum mengumpulkan.",
  "Gunakan waktu sebaik mungkin, waktu akan terus berjalan.",
  "Jika keluar dari halaman, waktu tetap berjalan.",
];

export const defaultDescription = `
  <h2>Peraturan Ujian</h2>
  <ul>
    <li>Pastikan koneksi internet stabil selama ujian berlangsung.</li>
    <li>Tidak diperkenankan membuka tab atau aplikasi lain.</li>
    <li>Setiap soal wajib dijawab sebelum mengumpulkan.</li>
    <li>Gunakan waktu sebaik mungkin, waktu akan terus berjalan.</li>
    <li>Jika keluar dari halaman, waktu tetap berjalan.</li>
  </ul>
`;
