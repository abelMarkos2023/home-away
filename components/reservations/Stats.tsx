import { fetchReservationStats } from '@/utils/actions'
import React from 'react'
import StatsCard from '../charts/StatsCard';
import { formatCurrency } from '@/utils/format';

const Stats = async () => {

    const stats = await fetchReservationStats();
  return (
    <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StatsCard title='Properties' value={stats.properties} />
        <StatsCard title='Bookings' value={stats.bookings} />
        <StatsCard title='Amount' value={formatCurrency(stats.amount)} />
        <StatsCard title='Total Nights' value={stats.nights} />
    </div>
  )
}

export default Stats