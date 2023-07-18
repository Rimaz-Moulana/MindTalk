import React, { useState } from 'react'
// import './messageStyle.css'
import Searchbar from '../shared/Searchbar'
import placeholderPNG from '../../assets/Chat/chatting.png'
import { FaPaperclip, FaSmile, FaPaperPlane } from 'react-icons/fa'

const ChatApp = () => {
    const [activeChat, setActiveChat] = useState(null)
    const [showChatList, setShowChatList] = useState(true)
    const [selectedChatAvatar, setSelectedChatAvatar] = useState('')
    const [selectedChatName, setSelectedChatName] = useState('')

    const handleChatItemClick = (chatId) => {
        setActiveChat(chatId)
        // setShowChatList(false);
        setShowChatList(true)
        // Fetch the avatar and name of the selected chat from your data source
        // const selectedChatAvatar = getChatAvatar(chatId)
        // const selectedChatName = getChatName(chatId)
        // setSelectedChatAvatar(selectedChatAvatar)
        // setSelectedChatName(selectedChatName)
    }

    return (
        <div className="flex h-full">
            <div className={`bg-white p-4 rounded-xl mr-4 w-96 ${showChatList ? '' : 'hidden'}`}>
                <div className="text-blue-500 font-medium text-2xl mb-4">
                    <span>Messages</span>
                </div>
                <Searchbar />
                <div
                    onClick={() => {
                        handleChatItemClick(1)
                    }}
                    className={`flex items-center p-4 cursor-pointer bg-white rounded-2xl border-b border-gray-200 hover:bg-blue-100 ${
                        activeChat === 1 ? 'active' : ''
                    }`}
                >
                    <div className="relative">
                        <img
                            src="../../../src/assets/Chat/profilePic1.jpg"
                            alt="avatar"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <span className="rounded-full h-4 w-4 bg-blue-700 position-absolute bottom-0 right-0"></span>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold mb-1">Marie Horwitz</p>
                        <p className="mb-1">Hello, Are you there?</p>
                        {/* <span className="badge bg-danger rounded-pill">3</span> */}
                    </div>

                    <p className="text-sm text-gray-600">Just now</p>
                </div>
                <div
                    onClick={() => {
                        handleChatItemClick(2)
                    }}
                    className={`flex items-center p-4 cursor-pointer bg-white rounded-2xl border-b border-gray-200 hover:bg-blue-100 ${
                        activeChat === 2 ? 'active' : ''
                    }`}
                >
                    <div className="relative">
                        <img
                            src="../../../src/assets/Chat/profilePic2.jpg"
                            alt="avatar"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-warning"></span>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold mb-1">Alexa Chung</p>
                        <p className="mb-1 ">Well, you're doing a..! </p>
                        {/* <span className="badge bg-danger rounded-full">2</span> */}
                    </div>
                    <p className="text-sm text-gray-600">5 mins ago</p>
                </div>
                <div
                    onClick={() => {
                        handleChatItemClick(3)
                    }}
                    className={`flex items-center p-4 cursor-pointer bg-white rounded-2xl border-b border-gray-200 hover:bg-blue-100 ${
                        activeChat === 3 ? 'active' : ''
                    }`}
                >
                    <div className="relative">
                        <img
                            src="../../../src/assets/Chat/profilePic3.jpg"
                            alt="avatar"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-warning"></span>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold mb-1">Mia Maples</p>
                        <p className="mb-1">Hey, how's it going?</p>
                        {/* <span className="badge bg-danger rounded-full">2</span> */}
                    </div>
                    <p className="text-sm text-gray-600">11 mins ago</p>
                </div>
            </div>

            {activeChat ? (
                <div className="flex flex-col p-4 h-full bg-white rounded-xl">
                    <div className="flex items-center p-4">
                        <div className="w-12 h-12 rounded-full">
                            <img src={selectedChatAvatar} alt="avatar" />
                        </div>
                        <div className="ml-4">
                            <p className="text-2xl font-medium">{selectedChatName}</p>
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-200 p-4 rounded-xl overflow-y-scroll">
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
                            <p className="text-xs text-opacity-25">12:00 PM | Aug 13</p>
                        </div>
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
                            <p className="text-xs text-opacity-25 ">12:00 PM | Aug 13</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-xl mt-4">
                        <input
                            type="text"
                            placeholder="Type message"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl mr-4"
                        />
                        <a href="#!" className="pr-2 text-gray-500 hover:text-blue-500">
                            <FaPaperclip />
                        </a>
                        <a href="#!" className="pr-2 text-gray-500 hover:text-blue-500">
                            <FaSmile />
                        </a>
                        <a href="#!" className="pr-2 text-gray-500 hover:text-blue-500">
                            <FaPaperPlane />
                        </a>
                    </div>
                </div>
            ) : (
                <div className="flex-1 p-4">
                    <img src={placeholderPNG} alt="placeholderpic" className="h-full" />
                </div>
            )}
        </div>
    )
}

export default ChatApp
