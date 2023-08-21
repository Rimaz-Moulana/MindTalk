import React from 'react'
import './PatientHistory.css'
import Chart from 'react-apexcharts'
// import { type } from '@testing-library/user-event/dist/type'

const PatientHistory = () => {
    const data = {
        series: [
            {
                name: 'Counseeling Sessions',
                data: [31, 40, 28, 51, 42, 109, 100]

            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",

            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["#ff929f"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            yaxis: {
                show: false,
            },
            toolbar: {
                show: false,
            }
        },
    };









    return (
        <div className="PatientHistory">
            <Chart series={data.series} options={data.options} type='area' />
        </div>
    )
}

export default PatientHistory