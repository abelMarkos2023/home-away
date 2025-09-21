'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type ChartPropsType = {
  data: {
    date: string;
    count: number;
  }[];
};

const Chart = ({data}:ChartPropsType) => {
  return (
    <section className="mt-20">
        <h3 className="text-4xl font-semibold text-center">Analytics</h3>

        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false}/>
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" barSize={75} />
            </BarChart>
        </ResponsiveContainer>
    </section>
  )
}

export default Chart