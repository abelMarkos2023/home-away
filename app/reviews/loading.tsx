"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <div className="grid md:grid-cols-2 gap-4 mt-8">
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />   

        </div>
    );
}

const SkeletonCard = () => {
  return (
    <div className="flex items-start gap-2">
      <Skeleton className='h-16 w-16 rounded-full' />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
}