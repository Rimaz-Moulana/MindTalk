import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import Table from '../Table/Table'



const MainDash = () => {
    return (
        <div className="MainDash">
            <h1 className="heading">Counselor Dashboard</h1>
            <Cards />
            <Table />


        </div>
    )
}

export default MainDash