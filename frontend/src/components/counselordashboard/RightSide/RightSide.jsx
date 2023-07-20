import React from 'react'
import Updates from '../Updates/Updates'
import PatientHistory from '../PatientHistory/PatientHistory'
import './RightSide.css'

const RightSide = () => {
    return (
        <div className="RightSide">
            <h4 className="money">Wallets</h4>
            <div>
                <h3 className="heading">Test Results</h3>
                <Updates />
            </div>

            <div>
                <h3 className="heading">Counselling Sessions Done</h3>
                <PatientHistory />
            </div>
        </div>
    )
}

export default RightSide