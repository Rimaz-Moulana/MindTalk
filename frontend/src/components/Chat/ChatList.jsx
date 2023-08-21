import React from 'react'
import Searchbar from '../shared/Searchbar'

const ChatList = ({ chats, activeChat, handleChatItemClick }) => {
    return (
        <div className="bg-white p-4 rounded-xl mr-4 w-96">
            <div className="text-blue-500 font-medium text-2xl mb-4">
                <span>Messages</span>
            </div>
            <Searchbar />
            {chats.map((chat) => (
                <div
                    key={chat.id}
                    onClick={() => handleChatItemClick(chat.id)}
                    className={`flex items-center p-4 cursor-pointer bg-white rounded-2xl border-b border-gray-200 hover:bg-blue-100 ${
                        activeChat === chat.id ? 'active' : ''
                    }`}
                >
                    <div className="relative">
                        <img src={chat.avatar} alt="avatar" className="w-16 h-16 rounded-full mr-4" />
                        <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-warning"></span>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold mb-1">{chat.name}</p>
                        <p className="mb-1">Well, you're doing a..</p>
                    </div>
                    <p className="text-sm text-gray-600">5 mins ago</p>
                </div>
            ))}
        </div>
    )
}

export default ChatList
