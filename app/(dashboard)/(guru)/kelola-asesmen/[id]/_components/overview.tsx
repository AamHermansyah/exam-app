import { Badge } from '@/components/ui/badge'
import { categories } from '@/constants';
import { getExamDetailById } from '@/data/exam';
import { BriefcaseMedical } from 'lucide-react'
import React from 'react'

interface IProps {
  id: string;
  token: string;
}

async function Overview({ id, token }: IProps) {
  const res = await getExamDetailById(id, token);
  const exam = res.data;
  const Icon = categories.find((category) => category.value === exam.category)?.icon;

  return (
    <div className="space-y-4">
      <div className="w-full h-[200px] rounded-md bg-primary/20 flex justify-center items-center">
        {Icon && (
          <Icon className="w-20 h-20 text-primary" />
        )}
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-bold">{exam.title}</h2>
        <div className="w-full flex gap-2 items-center flex-wrap">
          {exam.tags.split(',').map((tag) => (
            <Badge
              key={crypto.randomUUID()}
              className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200 capitalize"
            >
              {tag.trim()}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-muted-foreground">
        <div className="space-y-1">
          <p className="text-sm text-primary">Total Pertanyaan</p>
          <p className="font-medium">{exam._count.questions} Soal</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Total Peserta</p>
          <p className="font-medium">{exam._count.ExamSubmission} Orang</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Durasi</p>
          <p className="font-medium">{exam.duration} Menit</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Kategori</p>
          <p className="font-medium capitalize">{exam.category.replaceAll('-', ' ')}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Skor Minimal (%)</p>
          <p className="font-medium">{exam.minScore}/100%</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Rata Rata Skor</p>
          <p className="font-medium">{(exam.avgScoreStudents || 0).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  )
}

export default Overview