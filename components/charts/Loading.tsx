

import { Card, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';


export function StatsLoadingContainer(){
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
        </div>
    )
}

export function ChartLoadingContainer(){
    return (
        <div className='w-full h-96'>
            <Skeleton className="w-full h-full" />
        </div>
    )
}

function LoadingCard(){
    return (
        <Card>
            <CardHeader>
                <Skeleton className="w-full h-20 rounded-lg" />
            </CardHeader>
        </Card>
    )
}

