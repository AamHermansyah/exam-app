'use client'

import ExamCard from "./_components/exam-card"

const studentExams = [
  {
    id: 'exam-1',
    title: "Matematika Umum - Dasar Aljabar",
    categories: ["Matematika", "SMA", "Ujian Akhir"],
  },
  {
    id: 'exam-2',
    title: "Fisika Terapan - Teori dan Perhitungan",
    categories: ["Fisika", "SMA", "Ujian Akhir"],
  },
];

function MyLearningPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">
        Daftar Ujian
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentExams.map((exam) => (
          <ExamCard key={exam.id} data={exam} />
        ))}
      </div>
    </div>
  )
}

export default MyLearningPage