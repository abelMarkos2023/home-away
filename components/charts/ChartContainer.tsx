import { fetchChartData } from '@/utils/actions'
import React from 'react'
import Chart from './Chart'

const ChartContainer = async() => {

  const charts = await fetchChartData()
  return (
    <Chart data={charts} />
  )
}

export default ChartContainer