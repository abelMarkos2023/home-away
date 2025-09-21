import ChartContainer from '@/components/charts/ChartContainer'
import { ChartLoadingContainer, StatsLoadingContainer } from '@/components/charts/Loading'
import StatsContainer from '@/components/charts/StatsContainer'
import React, { Suspense } from 'react'

const AdminPage = () => {
  return (
    <>
        <Suspense fallback={<StatsLoadingContainer />}>

          <StatsContainer />
        </Suspense>
        <Suspense fallback = {<ChartLoadingContainer />}>
            <ChartContainer />
        </Suspense>
    </>
  )
}

export default AdminPage