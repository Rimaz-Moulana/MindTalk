import React from 'react'
import './Updates.css'
import { UpdatesData } from '../../../constants'

const Updates = () => {
    return (
        <div className="Updates">
            {UpdatesData.map((update) => {
                return (
                    <div  key={update.id} className="update">
                        <img src={update.img} alt="" />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{update.name}:</span>
                                <span> {update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>

                    </div>
                )


            })}

        </div>
    )
}

export default Updates