import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,

} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { TrendingUp } from 'lucide-react'

const chartData = [
  { month: "January", mouse: 186, keyboard: 80 ,headset:300},
  { month: "February", mouse: 305, keyboard: 200,headset:300 },
  { month: "March", mouse: 237, keyboard: 120,headset:300 },
  { month: "April", mouse: 73, keyboard: 190,headset:300 },
  { month: "May", mouse: 209, keyboard: 130,headset:300 },
  { month: "June", mouse: 214, keyboard: 140,headset:300 },
]

const chartConfig = {
  mouse: {
    label: "Desktop",
    color: "#2563eb",
  },
  keyboard: {
    label: "Mobile",
    color: "#60a5fa",
  },
   headset: {
    label: "Headset",
    color: "#b2cae8ff",
  },
} 


function Chart1() {


  return (
    <Card className="flex-1 rounded-xl bg-muted/50 md:min-h-min">
    <CardHeader>
      <CardTitle>Bar Chart - Multiple</CardTitle>
      <CardDescription>January - June 2025</CardDescription>
    </CardHeader>
    <CardContent>
    <ChartContainer config={chartConfig} >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="keyboard" fill="var(--color-keyboard)" radius={4} />
        <Bar dataKey="mouse" fill="var(--color-mouse)" radius={4} />
        <Bar dataKey="headset" fill="var(--color-headset)" radius={4} />

      </BarChart>
    </ChartContainer>
    <CardFooter className="flex-col items-start gap-2 text-sm">
<div className='flex gap-2 font-medium leading-none '>
treanding up by 5.2% this month<TrendingUp className='h-4 w-4'/>
</div>
<div className='leading-none text-muted-foreground'>
  Showing total visitor for the last 6 months
</div >
    </CardFooter>
    </CardContent>
    </Card>
  )
};

  


export default Chart1


