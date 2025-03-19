import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function SiswaPage() {
  const usersList = [
    { id: 1, nama: "Ahmad Fauzi", email: "ahmad@example.com", tanggalDaftar: "1 Maret 2025" },
    { id: 2, nama: "Siti Aisyah", email: "siti@example.com", tanggalDaftar: "3 Maret 2025" },
    { id: 3, nama: "Budi Santoso", email: "budi@example.com", tanggalDaftar: "5 Maret 2025" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Daftar Siswa</h3>
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar siswa yang telah mendaftar di website.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama</TableHead>
            <TableHead className="py-4">Email</TableHead>
            <TableHead className="pr-4 py-4">Tanggal Daftar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersList.map((siswa, index) => (
            <TableRow key={siswa.id}>
              <TableCell className="pl-4 py-4">{index + 1}</TableCell>
              <TableCell className="py-4">{siswa.nama}</TableCell>
              <TableCell className="py-4">{siswa.email}</TableCell>
              <TableCell className="pr-4 py-4">{siswa.tanggalDaftar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default SiswaPage;
