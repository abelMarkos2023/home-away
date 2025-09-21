import { fetchStats } from '@/utils/actions'
import React from 'react'
import StatsCard from './StatsCard';

const StatsContainer = async() => {

    const data = await fetchStats();
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard title = 'users' value={data?.usersCount || 0} />
        <StatsCard title = 'properties' value={data?.propertiesCount || 0} />
        <StatsCard title = 'reservations' value={data?.bookingsCount || 0} />
    </div>
  )
}

export default StatsContainer