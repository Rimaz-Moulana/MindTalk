import React, { useState, useEffect, useContext } from 'react'
import Searchbar from '../shared/Searchbar'
import placeholderPNG from '../../assets/Chat/chatting.png'
import chatUserPNG from '../../assets/Chat/chatUser.png'
import { FaPaperclip, FaSmile, FaPaperPlane, FaArrowLeft } from 'react-icons/fa'
import ChatBoxInput from './ChatBoxInput'
import axios from 'axios'
import AuthContext from '../../context/AuthProvider'
import { useLocation } from 'react-router-dom'

const ChatApp = () => {
    let senderId
    const { auth } = useContext(AuthContext)
    const [accessToken, setAccessToken] = useState('')

    const [chats, setChats] = useState([])
    const [filteredChats, setFilteredChats] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [messages, setMessages] = useState([])
    //to track whether chat box is open
    const [isChatBoxOpen, setChatBoxOpen] = useState(false)
    const [activeChat, setActiveChat] = useState(null)
    const [showChatList, setShowChatList] = useState(true)
    //get selected chat's info
    //const [selectedChatAvatar, setSelectedChatAvatar] = useState('')
    const [selectedChatName, setSelectedChatName] = useState('')

    const fetchCounsellors = async () => {
        try {
            const authData = localStorage.getItem('authData')
            if (authData) {
                const { accessToken } = JSON.parse(authData)
                //console.log(accessToken)
                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }

                const response = await axios.get('http://localhost:8080/api/counsellor/details/getCounsellor', config)

                console.log(response)
                const newChats = response.data.map((counsellor) => ({
                    id: counsellor.id,
                    name: `${counsellor.firstname} ${counsellor.lastname}`
                }))

                console.log(newChats)

                setChats(newChats)
                setFilteredChats(newChats)
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        fetchCounsellors()
    }, [])

    useEffect(() => {
        // Filter chats based on the search term and set the filteredChats state
        setFilteredChats(chats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [chats, searchTerm])

    //}, [])

    const handleSendMessage = async (message) => {
        const storedAuthData = localStorage.getItem('authData')
        if (storedAuthData) {
            const { accessToken, id } = JSON.parse(storedAuthData)
            setAccessToken(accessToken)
            if (message.trim() !== '') {
                const newMessage = {
                    content: message,
                    senderId: parseInt(id)
                }
                //setMessages((prevMessages) => [...prevMessages, newMessage])
                // setMessages([...message, newMessage])

                // Send the message to the backend
                try {
                    const response = await axios.post('http://localhost:8080/api/v1/messages/save', newMessage, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })

                    console.log('Message sent successfully:', response.data)

                    // Update messages state
                    setMessages((prevMessages) => [...prevMessages, newMessage])
                } catch (error) {
                    console.error('Error sending message:', error)
                }
            }
        }
    }

    const handleChatItemClick = (chatId) => {
        setChatBoxOpen(true)
        setActiveChat(chatId)
        if (window.innerWidth < 700 && activeChat) {
            setShowChatList(false)
        }

        console.log(chats)
        const selectedChat = chats.find((chat) => chat.id === chatId)
        if (selectedChat) {
            setSelectedChatName(selectedChat.name)
        } else {
            console.log('Chat with ID ${chatId} not found')
        }
        //setSelectedChatAvatar(selectedChat.avatar)
        //setSelectedChatName(selectedChat.name)
    }
    const handleShowChatList = () => {
        setActiveChat(false)
        setShowChatList(true)
        setChatBoxOpen(false)
    }

    return (
        <div className="flex h-full w-full">
            {window.innerWidth >= 700 && showChatList && !activeChat && (
                //chat list (left side component)
                <div className={`bg-white p-4 rounded-xl mr-4 w-96 ${showChatList ? '' : 'hidden'}`}>
                    <div className="text-blue-500 font-medium text-2xl mb-4">
                        <span>Messages</span>
                    </div>
                    <Searchbar onSearch={setSearchTerm} />
                    {/* Iterate over chats array and render chat items */}
                    {filteredChats.map((chat, index) => (
                        <div
                            key={chat.id}
                            onClick={() => handleChatItemClick(chat.id, index)}
                            className={`flex items-center p-4 cursor-pointer bg-white rounded-2xl border-b border-gray-200 hover:bg-blue-100 ${
                                activeChat === chat.id ? 'active' : ''
                            }`}
                        >
                            <div className="relative">
                                <img src={chatUserPNG} alt="avatar" className="w-16 h-16 rounded-full mr-4" />
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
                <div className="flex flex-col p-4 h-full bg-white rounded-xl w-full">
                    <div className="flex items-center p-4 ">
                        <div className="flex flex-row w-12 h-12 rounded-full items-center">
                            <div className="pr-4" onClick={handleShowChatList}>
                                <a href="#!" className="p-2 text-gray-500 hover:text-blue-600">
                                    <FaArrowLeft />
                                </a>
                            </div>
                            <img src={chatUserPNG} alt="avatar" className="w-14 h-14 rounded-full " />
                            {/* <img src={selectedChatAvatar} alt="avatar" className="w-14 h-14 rounded-full " /> */}
                            <div className="ml-4 w-40">
                                <p className="text-2xl font-medium whitespace-nowrap">{selectedChatName}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-100 p-4 rounded-xl overflow-y-auto">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`${
                                    message.senderId === parseInt(senderId) ? 'text-right' : 'text-left'
                                } mb-2`}
                            >
                                <div
                                    className={`bg-blue-600 text-white font-medium py-2 px-7 rounded-2xl inline-block`}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <ChatBoxInput onSendMessage={handleSendMessage} />
                </div>
            ) : window.innerWidth >= 900 && !activeChat ? (
                //placeholder picture
                <div className="flex flex-1 flex-col p-4 justify-center items-center bg-white rounded-xl">
                    <img src={placeholderPNG} alt="placeholderpic" className="h-4/5" />
                    <div className="text-blue-700">
                        {/* <p>Every Chat a Step Towards Healing and Hope</p> <br /> */}
                        <p>Let's Navigate this Journey Together.</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ChatApp
