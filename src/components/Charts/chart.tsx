"use client"

import { OvertimeResponse } from '@/types/IDashboardResponse';
import { FC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

 interface ChartProps {
    data: OvertimeResponse[]
 }
 
const Chart:FC<ChartProps> = ({data}) => {
    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={"count"} stroke="#8884d8" enableBackground={"#333"}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={"date"} />
        <YAxis />
      </LineChart>

    );
}

export default Chart;
