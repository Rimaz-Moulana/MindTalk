import React from 'react'
import { VictoryPie } from 'victory-pie'

const chartData = [
    { x: 'Reg Users', y: 900 },
    { x: 'Non Reg Users', y: 400 }
]
const customColorScale = [
    '#1E6CE4', // Group A
    '#F5F7F9', // Group B
]
const Piechart = () => {
    return (
        <div className="">
             <div className="my-4" />
            <h4 className="text-xl font-semibold ">Test Performs</h4>
            <p>Total users that perform Test</p>
            <div className="mt-2">
                <VictoryPie data={chartData} colorScale={customColorScale} radius={100} />
            </div>
        </div>
    )
}

export default Piechart