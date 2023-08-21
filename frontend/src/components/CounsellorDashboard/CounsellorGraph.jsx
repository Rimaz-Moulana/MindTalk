import React from "react";
import graphImage from './graph.png'

export default function CounsellorGraph() {
    return (
        <div className="bg-white rounded-xl md:col-span-3">
         <div className="col-span-3 row-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full">
            <img src={graphImage} alt="Graph" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    )
}
