import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, BookOpen, Users, Clock } from "lucide-react";
import { getOverview } from '@/data/overview';

interface IProps {
  token: string;
}

async function Overview({ token }: IProps) {
  const data = await getOverview(token);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-blue-400 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Ujian</CardTitle>
            <BookOpen size={28} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totalExams}</p>
          </CardContent>
        </Card>

        <Card className="bg-green-400 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Siswa</CardTitle>
            <Users size={28} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totalUsers}</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-400 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Submit</CardTitle>
            <ShieldCheck size={28} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totalExamSubmissions}</p>
          </CardContent>
        </Card>

        <Card className="bg-red-400 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Rata Rata Durasi</CardTitle>
            <Clock size={28} />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.durationAvgExams} menit</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Overview