import React, { useState } from 'react'
import Searchbar from '../shared/Searchbar'
import placeholderPNG from '../../assets/Chat/chatting.png'
import { FaPaperclip, FaSmile, FaPaperPlane, FaArrowLeft } from 'react-icons/fa'
import ChatBoxInput from './ChatBoxInput'

const ChatApp = () => {
    //store information about chats
    const chats = [
        {
            id: 1,
            avatar: '../../../src/assets/Chat/profilePic1.jpg',
            name: 'Marie Horwitz'
        },
        {
            id: 2,
            avatar: '../../../src/assets/Chat/profilePic2.jpg',
            name: 'Alexa Chung'
        },
        {
            id: 3,
            avatar: '../../../src/assets/Chat/profilePic3.jpg',
            name: 'Mia Maples'
        }
    ]

    //to track whether chat box is open
    const [isChatBoxOpen, setChatBoxOpen] = useState(false)
    const [activeChat, setActiveChat] = useState(null)
    const [showChatList, setShowChatList] = useState(true)
    //get selected chat's info
    const [selectedChatAvatar, setSelectedChatAvatar] = useState('')
    const [selectedChatName, setSelectedChatName] = useState('')

    const handleChatItemClick = (chatId) => {
        setChatBoxOpen(true)
        setActiveChat(chatId)
        if (window.innerWidth < 700 && activeChat) {
            setShowChatList(false)
        }

        const selectedChat = chats.find((chat) => chat.id === chatId)
        setSelectedChatAvatar(selectedChat.avatar)
        setSelectedChatName(selectedChat.name)
    }
    const handleShowChatList = () => {
        setActiveChat(false)
        setShowChatList(true)
        setChatBoxOpen(false)
    }

    return (
        <div className="flex h-full">
            {window.innerWidth >= 700 && showChatList && !activeChat && (
                //chat list (left side component)
                <div className={`bg-white p-4 rounded-xl mr-4 w-96 ${showChatList ? '' : 'hidden'}`}>
                    <div className="text-blue-500 font-medium text-2xl mb-4">
                        <span>Messages</span>
                    </div>
                    <Searchbar />
                    {chats.map((chat, index) => (
                        <div
                            key={chat.id}
                            onClick={() => handleChatItemClick(chat.id, index)}
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
            )}

            {isChatBoxOpen && activeChat ? (
                // chat box (right side component)
                <div className="flex flex-col p-4 h-full bg-white rounded-xl">
                    <div className="flex items-center p-4 ">
                        <div className="flex flex-row w-12 h-12 rounded-full items-center">
                            <div className="pr-4" onClick={handleShowChatList}>
                                <a href="#!" className="p-2 text-gray-500 hover:text-blue-600">
                                    <FaArrowLeft />
                                </a>
                            </div>
                            <img src={selectedChatAvatar} alt="avatar" className="w-14 h-14 rounded-full " />
                            <div className="ml-4 w-40">
                                <p className="text-2xl font-medium whitespace-nowrap">{selectedChatName}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-200 p-4 rounded-xl overflow-y-auto">
                        <div className="flex flex-row space-y-4 mb-5">
                            <p className="flex items-start bg-blue-50 p-2 rounded-2xl rounded-tl-none">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-xs text-opacity-25 pl-2">12:00 PM | Aug 13</p>
                        </div>
                        <div className="flex flex-row-reverse space-y-4 mb-5">
                            <p className="flex items-start bg-white p-2 rounded-2xl rounded-tr-none">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>
                            <p className="text-xs text-opacity-25 pr-2">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    <ChatBoxInput />
                </div>
            ) : window.innerWidth >= 900 && !activeChat ? (
                //placeholder picture
                <div className="flex flex-1 p-4 justify-center align-middle">
                    <img src={placeholderPNG} alt="placeholderpic" className="h-4/5" />
                </div>
            ) : null}
        </div>
    )
}

export default ChatApp
