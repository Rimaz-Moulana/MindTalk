import React from 'react'
import { FiCheck } from 'react-icons/fi'

export default function CounsellorButton() {
    return (
        <>
            <button
                type="button"
                className="flex items-center rounded bg-white border border-blue-700 px-2 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-blue-700 hover:bg-primary-600 "
            >
                <FiCheck className="mr-1" />
                Accept
            </button>
        </>
    )
}
