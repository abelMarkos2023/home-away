import React from 'react'
import { Card, CardHeader } from '../ui/card';


interface StatsCardProps {
    title: string;
    value: number | string;
}
const StatsCard = ({title, value}:StatsCardProps) => {
  return (
    <Card className="p-2 shadow-md bg-muted" >
      <CardHeader className='flex justify-between items-center'>
        <h3 className="text-2xl capitalize font-bold">{title}</h3>
        <span className="text-5xl text-primary font-extrabold">{value}</span>
      </CardHeader>
      </Card>
  )
}

export default StatsCard