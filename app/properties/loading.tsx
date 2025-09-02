'use client'

import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <Skeleton className="w-full h-[400px] md:h-[500px] rounded" />
  )
}

export default loading