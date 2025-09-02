'use client'

import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr:false,
    loading: () =>  <Skeleton className="w-full h-[400px] md:h-[500px] rounded" />
    
  })

  export default DynamicMap