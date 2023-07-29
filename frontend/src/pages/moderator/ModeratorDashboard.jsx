import ModeratorCards from '../../components/ModeratorDashboard/ModeratorCards'
import React from 'react'
import RequestTable from '../../components/ModeratorDashboard/ModeratorTable'
import Piechart from '../../components/ModeratorDashboard/ModeratorPieChart'
// import PieChart from '../../components/ModeratorDashboard/ModeratorPieChart'
// import { Pie } from 'react-chartjs-2'

const ModeratorDashboard = () => {
    return (
        <>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-wrap gap-4">
                    <ModeratorCards />
                </div>

                <div className="flex flex-wrap">
                    <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full mr-4">
                            <RequestTable />
                        </div>
                    </div>

                    <div className="flex-2">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5">
                            <Piechart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModeratorDashboard
