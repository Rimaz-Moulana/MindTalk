import React, { useState } from 'react'
import { FaPaperclip, FaSmile, FaPaperPlane } from 'react-icons/fa'

export default function ChatBoxInput() {
    return (
        <>
            <div className="flex items-center p-4 bg-white rounded-xl mt-2">
                <a href="#!" className="pr-2 text-2xl text-gray-500 hover:text-blue-500">
                    <FaPaperclip />
                </a>
                <a href="#!" className="pr-2 text-2xl text-gray-500 hover:text-blue-500">
                    <FaSmile />
                </a>
                <input
                    type="text"
                    placeholder="Type message"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl mr-4"
                />

                <a href="#!" className="pr-2 text-2xl text-gray-500 hover:text-blue-500">
                    <FaPaperPlane />
                </a>
            </div>
        </>
    )
}
