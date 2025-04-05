import { Badge } from '@/components/ui/badge'
import { BriefcaseMedical } from 'lucide-react'
import React from 'react'

function Overview() {
  return (
    <div className="space-y-4">
      <div className="w-full h-[200px] rounded-md bg-primary/20 flex justify-center items-center">
        <BriefcaseMedical className="w-20 h-20 text-primary" />
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-bold">Matematika Umum - Dasar Aljabar</h2>
        <div className="w-full flex gap-2 items-center flex-wrap">
          {['Matematika', 'Aljabar'].map((category) => (
            <Badge
              key={crypto.randomUUID()}
              className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-muted-foreground">
        <div className="space-y-1">
          <p className="text-sm text-primary">Total Pertanyaan</p>
          <p className="font-medium">20 soal</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Total Peserta</p>
          <p className="font-medium">3 orang</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-primary">Durasi</p>
          <p className="font-medium">120 menit</p>
        </div>
      </div>
    </div>
  )
}

export default Overview