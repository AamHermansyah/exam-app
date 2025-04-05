import React from 'react'
import Overview from './_components/overview'
import Participants from './_components/participants'

function UjianDetailPage() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-8">
      <div className="order-2 lg:order-1 lg:col-span-8 space-y-2">
        <h1 className="text-lg font-medium">Peserta</h1>
        <Participants />
      </div>
      <div className="order-1 lg:order-2 lg:col-span-4 space-y-2">
        <h1 className="text-lg font-medium">Ringkasan</h1>
        <Overview />
      </div>
    </div>
  )
}

export default UjianDetailPage