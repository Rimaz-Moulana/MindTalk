import React from 'react'
import { VictoryPie } from 'victory-pie'

const chartData = [
    { x: 'Group A', y: 900 },
    { x: 'Group B', y: 400 },
    { x: 'Group C', y: 300 }
]
const customColorScale = [
    '#04befe', // Group A
    '#2D31FA', // Group B
    '#DDE6ED' // Group C
]
const Piechart = () => {
    return (
        <div className="">
            <h4 className="text-xl font-semibold">Pie Chart Example</h4>
            <div className="mt-4">
                <VictoryPie data={chartData} colorScale={customColorScale} radius={100} />
            </div>
        </div>
    )
}

export default Piechart
// import React from 'react'
// import { Pie } from 'react-chartjs-2'

// const data = {
//     labels: ['grey', 'Blue', 'Yellow'],
//     datasets: [
//         {
//             data: [300, 50, 100],
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//         }
//     ]
// }

// const options = {
//     responsive: true,
//     maintainAspectRatio: false
// }

// const PieChart = () => {
//     return (
//         <div className="">
//             <h4 className="text-xl font-semibold">Pie Chart Example</h4>
//             <div className="mt-4"><Pie data={data} options={options} /></div>
//         </div>
//     )
// }

// export default PieChart
